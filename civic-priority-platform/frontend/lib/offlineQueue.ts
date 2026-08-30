import { createSubmission } from "./api";

/**
 * offlineQueue.ts — IndexedDB + Network Status offline queue system for CIVICO PWA.
 * Serializes submission payloads locally when network connection is absent/weak,
 * and automatically flushes queued items to the server upon network recovery.
 */

export interface QueuedSubmission {
  id: string;
  timestamp: number;
  text: string;
  language: string;
  wardId: string;
  latitude: number | null;
  longitude: number | null;
  audioBlob?: Blob | null;
  photoBlob?: Blob | null;
  videoBlob?: Blob | null;
  fullName?: string;
  email?: string;
  phone?: string;
  customLocationText?: string;
  status: "pending" | "syncing" | "failed";
}

const DB_NAME = "CivicoOfflineDB";
const STORE_NAME = "submissions_queue";
const DB_VERSION = 1;

function openDB(): Promise<IDBDatabase> {
  return new Promise((resolve, reject) => {
    if (typeof window === "undefined" || !("indexedDB" in window)) {
      reject(new Error("IndexedDB not supported"));
      return;
    }
    const request = window.indexedDB.open(DB_NAME, DB_VERSION);

    request.onupgradeneeded = (e) => {
      const db = (e.target as IDBOpenDBRequest).result;
      if (!db.objectStoreNames.contains(STORE_NAME)) {
        db.createObjectStore(STORE_NAME, { keyPath: "id" });
      }
    };

    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
}

export async function enqueueOfflineSubmission(
  item: Omit<QueuedSubmission, "id" | "timestamp" | "status">,
): Promise<QueuedSubmission> {
  const queuedItem: QueuedSubmission = {
    ...item,
    id: `queue-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
    timestamp: Date.now(),
    status: "pending",
  };

  try {
    const db = await openDB();
    const tx = db.transaction(STORE_NAME, "readwrite");
    const store = tx.objectStore(STORE_NAME);
    await new Promise<void>((resolve, reject) => {
      const req = store.add(queuedItem);
      req.onsuccess = () => resolve();
      req.onerror = () => reject(req.error);
    });
  } catch (e) {
    // Fallback to LocalStorage serialization if IndexedDB fails
    const existing = getLocalStorageQueue();
    existing.push(queuedItem);
    saveLocalStorageQueue(existing);
  }

  return queuedItem;
}

export async function getQueuedSubmissions(): Promise<QueuedSubmission[]> {
  try {
    const db = await openDB();
    const tx = db.transaction(STORE_NAME, "readonly");
    const store = tx.objectStore(STORE_NAME);
    return await new Promise<QueuedSubmission[]>((resolve, reject) => {
      const req = store.getAll();
      req.onsuccess = () => resolve(req.result || []);
      req.onerror = () => reject(req.error);
    });
  } catch {
    return getLocalStorageQueue();
  }
}

export async function removeQueuedSubmission(id: string): Promise<void> {
  try {
    const db = await openDB();
    const tx = db.transaction(STORE_NAME, "readwrite");
    const store = tx.objectStore(STORE_NAME);
    await new Promise<void>((resolve, reject) => {
      const req = store.delete(id);
      req.onsuccess = () => resolve();
      req.onerror = () => reject(req.error);
    });
  } catch {
    const existing = getLocalStorageQueue().filter((item) => item.id !== id);
    saveLocalStorageQueue(existing);
  }
}

function getLocalStorageQueue(): QueuedSubmission[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = localStorage.getItem("civico_offline_queue");
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

function saveLocalStorageQueue(queue: QueuedSubmission[]) {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem("civico_offline_queue", JSON.stringify(queue));
  } catch {
    // Storage quota exceeded
  }
}

type SyncCallback = (count: number) => void;
const syncListeners: Set<SyncCallback> = new Set();

export function subscribeQueueSync(cb: SyncCallback): () => void {
  syncListeners.add(cb);
  return () => syncListeners.delete(cb);
}

export async function autoSyncQueue(): Promise<number> {
  if (typeof navigator !== "undefined" && !navigator.onLine) {
    return 0;
  }

  const queue = await getQueuedSubmissions();
  if (queue.length === 0) return 0;

  let syncedCount = 0;
  for (const item of queue) {
    try {
      const langMap: Record<string, "odia" | "hindi" | "english"> = {
        or: "odia",
        hi: "hindi",
        en: "english",
      };
      await createSubmission({
        constituency: "khordha",
        language: langMap[item.language] || "odia",
        submission_type: item.audioBlob ? "voice" : item.videoBlob ? "video" : item.photoBlob ? "photo" : "text",
        content: item.text || (item.photoBlob ? "[Photo Evidence Attached]" : ""),
        audio_file: item.audioBlob || undefined,
        video_file: item.videoBlob || undefined,
        full_name: item.fullName,
        email: item.email,
        phone: item.phone,
        location: {
          ward: item.wardId || "Ward 5",
          block: "Khordha Block",
          latitude: item.latitude ?? undefined,
          longitude: item.longitude ?? undefined,
          custom_text: item.customLocationText || item.text,
        },
      });
      await removeQueuedSubmission(item.id);
      syncedCount++;
    } catch (err) {
      console.warn("Failed to auto-sync offline submission:", err);
    }
  }

  syncListeners.forEach((listener) => listener(syncedCount));
  return syncedCount;
}

if (typeof window !== "undefined") {
  window.addEventListener("online", () => {
    autoSyncQueue();
  });
}

"use client";

import {
  createContext,
  useContext,
  useState,
  useCallback,
  ReactNode,
} from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type ToastType = "success" | "error" | "info";

type Toast = {
  id: string;
  type: ToastType;
  message: string;
  details?: string;
};

type ConfirmationRequest = {
  id: string;
  question: string;
  description?: string;
  confirmLabel?: string;
  cancelLabel?: string;
  destructive?: boolean;
  onConfirm: () => void;
  onCancel?: () => void;
};

type FeedbackPayload = {
  type: "bug" | "suggestion" | "other";
  message: string;
  contact?: string;
};

type FeedbackHubContextValue = {
  showSuccess: (message: string, details?: string) => void;
  showError: (message: string, details?: string) => void;
  showInfo: (message: string, details?: string) => void;
  askConfirmation: (req: Omit<ConfirmationRequest, "id">) => void;
  openFeedbackWidget: () => void;
};

const FeedbackHubContext = createContext<FeedbackHubContextValue | null>(null);

export function FeedbackHubProvider({ children }: { children: ReactNode }) {
  const [toasts, setToasts] = useState<Toast[]>([]);
  const [confirmation, setConfirmation] = useState<ConfirmationRequest | null>(
    null,
  );
  const [feedbackOpen, setFeedbackOpen] = useState(false);

  function addToast(type: ToastType, message: string, details?: string) {
    const id = Math.random().toString(36).slice(2);

    setToasts((t) => [
      ...t,
      {
        id,
        type,
        message,
        details,
      },
    ]);

    setTimeout(() => {
      setToasts((t) => t.filter((x) => x.id !== id));
    }, 4000);
  }

  const showSuccess = useCallback(
    (message: string, details?: string) =>
      addToast("success", message, details),
    [],
  );

  const showError = useCallback(
    (message: string, details?: string) => addToast("error", message, details),
    [],
  );

  const showInfo = useCallback(
    (message: string, details?: string) => addToast("info", message, details),
    [],
  );

  function askConfirmation(req: Omit<ConfirmationRequest, "id">) {
    const id = Math.random().toString(36).slice(2);

    setConfirmation({
      ...req,
      id,
    });
  }

  function closeConfirmation(confirm: boolean) {
    if (!confirmation) return;

    if (confirm) {
      confirmation.onConfirm();
    } else if (confirmation.onCancel) {
      confirmation.onCancel();
    }

    setConfirmation(null);
  }

  async function submitGlobalFeedback(payload: FeedbackPayload) {
    try {
      const res = await fetch("/api/feedback", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          targetType: "platform",
          targetId: null,
          type: payload.type,
          message: payload.message,
          contact: payload.contact,
        }),
      });

      if (!res.ok) {
        throw new Error("Feedback submit failed");
      }

      showSuccess("Thanks! Your feedback has been recorded.");

      setFeedbackOpen(false);
    } catch {
      showError("Failed to send feedback. Please try again.");
    }
  }

  const value: FeedbackHubContextValue = {
    showSuccess,
    showError,
    showInfo,
    askConfirmation,
    openFeedbackWidget: () => setFeedbackOpen(true),
  };

  return (
    <FeedbackHubContext.Provider value={value}>
      {children}

      {/* Toast layer */}
      <div className="fixed right-4 top-4 z-50 flex flex-col gap-2">
        {toasts.map((t) => (
          <div
            key={t.id}
            className={[
              "min-w-[220px] max-w-sm rounded-md border p-3 shadow-lg",
              t.type === "success" &&
                "border-green-200 bg-green-50 text-green-900",
              t.type === "error" && "border-red-200 bg-red-50 text-red-900",
              t.type === "info" && "border-blue-200 bg-blue-50 text-blue-900",
            ].join(" ")}
          >
            <div className="text-sm font-medium">{t.message}</div>

            {t.details && (
              <div className="mt-1 text-xs opacity-80">{t.details}</div>
            )}
          </div>
        ))}
      </div>

      {/* Confirmation dialog */}
      {confirmation && (
        <Dialog open onOpenChange={() => closeConfirmation(false)}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Confirm action</DialogTitle>

              {confirmation.description && (
                <DialogDescription>
                  {confirmation.description}
                </DialogDescription>
              )}
            </DialogHeader>

            <div className="py-2 text-sm">{confirmation.question}</div>

            <DialogFooter>
              <Button
                variant="outline"
                className="cursor-pointer"
                onClick={() => closeConfirmation(false)}
              >
                {confirmation.cancelLabel ?? "Cancel"}
              </Button>

              <Button
                variant={confirmation.destructive ? "destructive" : "default"}
                className="cursor-pointer"
                onClick={() => closeConfirmation(true)}
              >
                {confirmation.confirmLabel ?? "Confirm"}
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      )}

      {/* Global feedback widget */}
      <GlobalFeedbackModal
        open={feedbackOpen}
        onOpenChange={setFeedbackOpen}
        onSubmit={submitGlobalFeedback}
      />

      {/* Floating feedback button */}
      <button
        type="button"
        onClick={() => setFeedbackOpen(true)}
        className="fixed bottom-4 right-4 z-40 cursor-pointer rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-lg"
      >
        Send feedback
      </button>
    </FeedbackHubContext.Provider>
  );
}

export function useFeedback() {
  const ctx = useContext(FeedbackHubContext);

  if (!ctx) {
    throw new Error("useFeedback must be used within FeedbackHubProvider");
  }

  return ctx;
}

function GlobalFeedbackModal({
  open,
  onOpenChange,
  onSubmit,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSubmit: (payload: FeedbackPayload) => void;
}) {
  const [type, setType] = useState<FeedbackPayload["type"]>("suggestion");

  const [message, setMessage] = useState("");
  const [contact, setContact] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit() {
    if (!message.trim()) return;

    setLoading(true);

    await onSubmit({
      type,
      message: message.trim(),
      contact: contact.trim() || undefined,
    });

    setLoading(false);
    setMessage("");
    setContact("");
  }

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[99999] flex items-center justify-center"
      role="dialog"
      aria-modal="true"
      aria-labelledby="feedback-dialog-title"
    >
      {/** Full-screen backdrop */}
      <Button
        type="button"
        aria-label="Close feedback"
        onClick={() => onOpenChange(false)}
        className="absolute inset-0 cursor-pointer bg-gray-500 backdrop-blur-[2px]"
      />
      {/* Feedback panel */}
      <div className="relative z-[100000] w-[calc(100%-2rem)] max-w-lg rounded-xl border bg-white p-6 text-black shadow-2xl">
        <div className="mb-5">
          <h2
            id="feedback-dialog-title"
            className="text-lg font-semibold text-black"
          >
            Send feedback
          </h2>

          <p className="mt-1 text-sm text-gray-600">
            Help us improve the platform. Report bugs, suggest features, or
            share general feedback.
          </p>
        </div>

        <div className="grid gap-4">
          {/* Type */}
          <div>
            <label className="mb-1.5 block text-sm font-medium text-black">
              Type
            </label>

            <Select
              value={type}
              onValueChange={(value) =>
                setType(value as FeedbackPayload["type"])
              }
            >
              <SelectTrigger className="w-full cursor-pointer bg-white text-black">
                <SelectValue />
              </SelectTrigger>

              <SelectContent className="z-[100001] bg-white text-black">
                <SelectItem value="bug" className="cursor-pointer">
                  Bug
                </SelectItem>

                <SelectItem value="suggestion" className="cursor-pointer">
                  Suggestion
                </SelectItem>

                <SelectItem value="other" className="cursor-pointer">
                  Other
                </SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Message */}
          <div>
            <label className="mb-1.5 block text-sm font-medium text-black">
              Message
            </label>

            <Textarea
              className="min-h-[120px] cursor-text bg-white text-black"
              rows={5}
              placeholder="Describe what you experienced or what you'd like to see..."
              value={message}
              onChange={(event) => setMessage(event.target.value)}
              autoFocus
            />
          </div>

          {/* Contact */}
          <div>
            <label className="mb-1.5 block text-sm font-medium text-black">
              Contact (optional)
            </label>

            <input
              type="email"
              placeholder="you@example.com"
              className="w-full rounded-md border bg-white px-3 py-2 text-sm text-black outline-none focus:ring-2"
              value={contact}
              onChange={(event) => setContact(event.target.value)}
            />
          </div>
        </div>

        {/* Footer */}
        <div className="mt-6 flex justify-end gap-2">
          <Button
            type="button"
            variant="outline"
            className="cursor-pointer"
            onClick={() => onOpenChange(false)}
          >
            Cancel
          </Button>

          <Button
            type="button"
            className="cursor-pointer"
            onClick={handleSubmit}
            disabled={loading || !message.trim()}
          >
            {loading ? "Sending..." : "Send"}
          </Button>
        </div>
      </div>
    </div>
  );
}

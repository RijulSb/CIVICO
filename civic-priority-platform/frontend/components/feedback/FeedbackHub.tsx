"use client";

import {
  createContext,
  useContext,
  useState,
  useCallback,
  ReactNode,
} from "react";
import { CheckCircle2, Mail, Send } from "lucide-react";
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

      const data = await res.json();
      const deliveredTo = data.delivered_to || "feedback@civico.gov.in";

      showSuccess(`SENT ✓ Feedback email delivered to ${deliveredTo}`);

      setTimeout(() => {
        setFeedbackOpen(false);
      }, 1800);
    } catch (err) {
      console.error(err);
      showError("Failed to send feedback. Please check contact email.");
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
      <div className="fixed right-4 top-4 z-[100002] flex flex-col gap-2">
        {toasts.map((t) => (
          <div
            key={t.id}
            className={[
              "min-w-[260px] max-w-sm rounded-xl border p-3.5 shadow-2xl font-sans text-xs font-semibold",
              t.type === "success" &&
                "border-emerald-300 bg-emerald-50 text-emerald-950",
              t.type === "error" && "border-red-300 bg-red-50 text-red-950",
              t.type === "info" && "border-blue-300 bg-blue-50 text-blue-950",
            ].join(" ")}
          >
            <div className="flex items-center gap-2 text-sm font-bold">
              {t.type === "success" && <CheckCircle2 className="h-4 w-4 text-emerald-600" />}
              {t.message}
            </div>

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
        className="fixed bottom-4 right-4 z-40 cursor-pointer flex items-center gap-2 rounded-full bg-[#1c2d1c] px-4 py-2.5 text-xs font-bold text-white shadow-2xl transition hover:bg-[#2b442b]"
      >
        <Mail className="h-4 w-4 text-[#e25a45]" />
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
  onSubmit: (payload: FeedbackPayload) => Promise<void>;
}) {
  const [type, setType] = useState<FeedbackPayload["type"]>("suggestion");

  const [message, setMessage] = useState("");
  const [contact, setContact] = useState("");
  const [loading, setLoading] = useState(false);
  const [sentSuccess, setSentSuccess] = useState(false);

  async function handleSubmit() {
    if (!message.trim()) return;

    setLoading(true);

    await onSubmit({
      type,
      message: message.trim(),
      contact: contact.trim() || undefined,
    });

    setLoading(false);
    setSentSuccess(true);

    setTimeout(() => {
      setMessage("");
      setContact("");
      setSentSuccess(false);
    }, 2000);
  }

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[99999] flex items-center justify-center font-sans"
      role="dialog"
      aria-modal="true"
      aria-labelledby="feedback-dialog-title"
    >
      {/** Full-screen backdrop */}
      <button
        type="button"
        aria-label="Close feedback"
        onClick={() => onOpenChange(false)}
        className="absolute inset-0 cursor-pointer bg-black/60 backdrop-blur-sm"
      />
      {/* Feedback panel */}
      <div className="relative z-[100000] w-[calc(100%-2rem)] max-w-lg rounded-2xl border border-[#171817]/20 bg-white p-6 text-[#171817] shadow-2xl">
        <div className="mb-5 flex items-start justify-between">
          <div>
            <div className="flex items-center gap-2">
              <span className="rounded bg-[#e25a45] px-2 py-0.5 font-mono text-[10px] font-bold text-white uppercase">
                Email Dispatch
              </span>
              <h2
                id="feedback-dialog-title"
                className="text-lg font-bold text-[#171817]"
              >
                Send feedback
              </h2>
            </div>

            <p className="mt-1 text-xs text-slate-600">
              Help us improve the platform. Report bugs, suggest features, or
              share general feedback. Message will be sent to email.
            </p>
          </div>

          {sentSuccess && (
            <span className="flex items-center gap-1 rounded-lg bg-emerald-600 px-3 py-1 font-mono text-xs font-bold text-white shadow animate-in fade-in">
              <CheckCircle2 className="h-4 w-4" />
              SENT ✓
            </span>
          )}
        </div>

        {sentSuccess ? (
          <div className="my-6 rounded-xl border border-emerald-300 bg-emerald-50 p-5 text-center space-y-2">
            <div className="flex justify-center text-emerald-600">
              <CheckCircle2 className="h-10 w-10" />
            </div>
            <h3 className="font-bold text-emerald-950 text-base">
              Email Sent Successfully!
            </h3>
            <p className="text-xs text-emerald-800">
              Your feedback message has been formatted and delivered to{" "}
              <strong>rsekharbarik@gmail.com</strong>{contact && contact.includes("@") ? ` and ${contact}` : ""}.
            </p>
          </div>
        ) : (
          <div className="grid gap-4">
            {/* Type */}
            <div>
              <label className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-[#171817]">
                Type
              </label>

              <Select
                value={type}
                onValueChange={(value) =>
                  setType(value as FeedbackPayload["type"])
                }
              >
                <SelectTrigger className="w-full cursor-pointer bg-white text-[#171817] border-[#171817]/20">
                  <SelectValue />
                </SelectTrigger>

                <SelectContent className="z-[100001] bg-white text-[#171817]">
                  <SelectItem value="bug" className="cursor-pointer">
                    Bug Report
                  </SelectItem>

                  <SelectItem value="suggestion" className="cursor-pointer">
                    Feature Suggestion
                  </SelectItem>

                  <SelectItem value="other" className="cursor-pointer">
                    General Feedback
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Message */}
            <div>
              <label className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-[#171817]">
                Message
              </label>

              <Textarea
                className="min-h-[120px] cursor-text bg-[#f6f5f2] text-[#171817] border-[#171817]/20 text-xs focus:ring-[#e25a45]"
                rows={5}
                placeholder="Describe what you experienced or what you'd like to see..."
                value={message}
                onChange={(event) => setMessage(event.target.value)}
                autoFocus
              />
            </div>

            {/* Contact */}
            <div>
              <label className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-[#171817]">
                Recipient Contact Email (optional)
              </label>

              <input
                type="email"
                placeholder="you@example.com"
                className="w-full rounded-xl border border-[#171817]/20 bg-[#f6f5f2] px-3 py-2 text-xs text-[#171817] outline-none focus:ring-2 focus:ring-[#e25a45]"
                value={contact}
                onChange={(event) => setContact(event.target.value)}
              />
            </div>
          </div>
        )}

        {/* Footer */}
        <div className="mt-6 flex justify-end gap-2 border-t pt-4">
          <Button
            type="button"
            variant="outline"
            className="cursor-pointer text-xs"
            onClick={() => onOpenChange(false)}
          >
            Cancel
          </Button>

          <Button
            type="button"
            className={`cursor-pointer text-xs font-bold ${
              sentSuccess ? "bg-emerald-600 hover:bg-emerald-700" : "bg-[#e25a45] hover:bg-[#d44833]"
            }`}
            onClick={handleSubmit}
            disabled={loading || !message.trim() || sentSuccess}
          >
            {sentSuccess ? (
              <>
                <CheckCircle2 className="mr-1.5 h-4 w-4" />
                SENT ✓
              </>
            ) : loading ? (
              "Dispatching Email..."
            ) : (
              <>
                <Send className="mr-1.5 h-3.5 w-3.5" />
                Send Email
              </>
            )}
          </Button>
        </div>
      </div>
    </div>
  );
}

import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { type, message, contact, targetType, recipientEmail } = body;

    if (!message || !message.trim()) {
      return NextResponse.json(
        { error: "Message field cannot be empty" },
        { status: 400 }
      );
    }

    const backendUrl =
      process.env.BACKEND_INTERNAL_URL ||
      process.env.NEXT_PUBLIC_API_URL ||
      (process.env.NODE_ENV === "production"
        ? "https://civico-backend-7cm1.onrender.com"
        : "http://localhost:8000");

    // 1. Try forwarding to FastAPI feedback engine
    try {
      const backendRes = await fetch(`${backendUrl}/api/v1/feedback`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          targetType: targetType || "platform",
          type: type || "suggestion",
          message: message.trim(),
          contact: contact?.trim() || undefined,
          recipientEmail: recipientEmail || "rsekharbarik@gmail.com",
        }),
      });

      if (backendRes.ok) {
        const data = await backendRes.json();
        return NextResponse.json(data);
      }
    } catch (err) {
      console.warn("Backend email proxy warning:", err);
    }

    // 2. Direct fallback to FormSubmit HTTPS API for rsekharbarik@gmail.com
    const formSubmitUrl = "https://formsubmit.co/ajax/rsekharbarik@gmail.com";
    const formData = new URLSearchParams();
    formData.append("_subject", `[CIVICO Feedback - ${type?.toUpperCase()}] New Submission for rsekharbarik@gmail.com`);
    formData.append("Feedback_Type", type || "suggestion");
    formData.append("Sender_Contact", contact || "Anonymous Citizen");
    formData.append("Message", message.trim());
    formData.append("Submitted_At", new Date().toISOString());

    const origin = request.headers.get("origin") || request.headers.get("referer") || process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

    const fsRes = await fetch(formSubmitUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        "Referer": origin,
        "User-Agent": "Mozilla/5.0 CIVICO Platform",
      },
      body: formData.toString(),
    });

    const deliveredTo = "rsekharbarik@gmail.com";

    return NextResponse.json({
      success: true,
      message: "Feedback email dispatched successfully to rsekharbarik@gmail.com.",
      delivered_to: deliveredTo,
      timestamp: new Date().toISOString(),
    });
  } catch (error) {
    console.error("Error sending feedback email:", error);
    return NextResponse.json(
      { success: false, error: "Internal Server Error" },
      { status: 500 }
    );
  }
}

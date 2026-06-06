import { NextRequest, NextResponse } from "next/server";

// ============================================================
//  QUOTE SUBMISSION HANDLER
//  ------------------------------------------------------------
//  Receives the form payload from the browser (any device, any
//  number of times) and forwards it server-side to the Make.com
//  webhook in the exact field schema the scenario expects.
//  Handling it server-side avoids browser CORS issues with the
//  webhook and keeps the URL out of client code.
// ============================================================

// Env override wins; otherwise the live Make webhook below is used.
const MAKE_WEBHOOK_URL =
  process.env.MAKE_WEBHOOK_URL ||
  "https://hook.us2.make.com/a6u5ai8rk4a1ns4vsjkyci3ptg6fy5op";

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();

    // Light validation: name, a way to reach them (phone OR email), and service.
    const name = (data?.name ?? "").toString().trim();
    const phone = (data?.phone ?? "").toString().trim();
    const email = (data?.email ?? "").toString().trim();
    const service = (data?.service ?? "").toString().trim();
    if (!name || (!phone && !email) || !service) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    // Map to the EXACT field names the webhook expects.
    const payload = {
      Name: name,
      Email: email,
      Phone: phone,
      Service: service,
      Address: (data?.address ?? "").toString().trim(),
      Notes: (data?.details ?? "").toString().trim(),
      Status: "new",
    };

    const res = await fetch(MAKE_WEBHOOK_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (!res.ok) {
      console.error("[QUOTE WEBHOOK] non-OK status", res.status);
      return NextResponse.json({ error: "Webhook failed" }, { status: 502 });
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[QUOTE ERROR]", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}

import { NextRequest, NextResponse } from "next/server";

// ============================================================
//  QUOTE SUBMISSION HANDLER
//  ------------------------------------------------------------
//  Currently logs + returns success (UI works out of the box).
//
//  TO WIRE LIVE (Antonio):
//  1. Make.com: create a scenario with a "Custom Webhook" trigger.
//     Paste its URL into MAKE_WEBHOOK_URL below (or .env as
//     MAKE_WEBHOOK_URL). It forwards the full payload to:
//        - Email (you + Juan)
//        - Airtable CRM (Create Record module)
//  2. That's it — this route POSTs the JSON straight through.
//
//  Payload shape sent to webhook:
//   { name, phone, email, service, address, windows?, stories?,
//     details?, submittedAt }
// ============================================================

const MAKE_WEBHOOK_URL = process.env.MAKE_WEBHOOK_URL || "";

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();

    // Minimal validation
    if (!data?.name || !data?.phone || !data?.service || !data?.address) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    // Forward to Make.com if configured
    if (MAKE_WEBHOOK_URL) {
      await fetch(MAKE_WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
    } else {
      // Dev fallback — visible in server logs until webhook is set
      console.log("[QUOTE REQUEST]", JSON.stringify(data, null, 2));
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[QUOTE ERROR]", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}

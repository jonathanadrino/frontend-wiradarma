/**
 * PLACEHOLDER — replace with the real API call.
 *
 * Payload shape sent by <InquiryForm />:
 * {
 *   name: string,
 *   entity: string,      // Corporate Entity / Fund Name (required)
 *   aum: string,         // Capital Deployed / AUM (optional, may be "")
 *   nature: string,      // Nature of Inquiry (category)
 *   message: string,     // Details
 *   website: string,     // honeypot — should always be "" for humans
 * }
 *
 * Must resolve on success and throw (or reject) on failure.
 *
 * Example once the API exists:
 *
 *   const res = await fetch(process.env.NEXT_PUBLIC_INQUIRY_API_URL, {
 *     method: "POST",
 *     headers: { "Content-Type": "application/json" },
 *     body: JSON.stringify(payload),
 *   });
 *   if (!res.ok) throw new Error(`Inquiry failed: ${res.status}`);
 *   return res.json();
 */
export async function submitInquiry(payload) {
  if (process.env.NODE_ENV !== "production") {
    console.info("[submitInquiry placeholder]", payload);
  }
  await new Promise((resolve) => setTimeout(resolve, 900));
  return { ok: true };
}

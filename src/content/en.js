// English copy — served at "/". Every key here must also exist in ./id.js.

const en = {
  locale: "en",

  meta: {
    title: "The Wiradarma Group — Strategic Government Relations & Sovereign Risk Mitigation, Indonesia",
    description:
      "Strategic government relations and sovereign risk mitigation in Indonesia. Regulatory alignment, spatial legality, and institutional asset protection for multinationals, defense contractors, and foreign syndicates.",
  },

  nav: [
    { href: "#doctrine", label: "Doctrine" },
    { href: "#capabilities", label: "Capabilities" },
    { href: "#principal", label: "Principal" },
    { href: "#engagement", label: "Engagement" },
    { href: "#inquiries", label: "Private Inquiries" },
  ],

  header: {
    group: "Group",
    menu: "Menu",
    close: "Close",
    progress: "Page scroll progress",
    language: "Language",
    toDark: "Switch to dark mode",
    toLight: "Switch to light mode",
  },

  // Image descriptions for screen readers
  alt: {
    hero: "Structural steel frame of a high-rise under construction, with a tower crane above",
    hBeam: "Close-up of wide-flange H-beam structural steel sections",
    contract: "Assignment clause of an agreement with a pen resting on the signature line",
  },

  hero: {
    eyebrow: "Jakarta · Indonesia",
    headline: "Strategic Government Relations & Sovereign Risk Mitigation.",
    // Same headline, broken into the lines that animate in on large screens.
    headlineLines: ["Strategic Government Relations", "& Sovereign Risk Mitigation."],
    stats: [
      { value: "Rp 400B+", label: "Corporate asset value created by the Principal" },
      { value: "12 Mo.", label: "Minimum engagement" },
      { value: "48 Hrs", label: "Inquiry review window" },
    ],
    subheadline:
      "We engineer regulatory alignment, spatial legality, and institutional asset protection for multinationals, defense contractors, and foreign syndicates deploying capital in Indonesia.",
    cta: { href: "#inquiries", label: "Inquire on Capabilities" },
  },

  doctrine: {
    eyebrow: "Our Approach",
    header: "The Institutional Shield.",
    paragraphs: [
      "Foreign capital routinely bleeds in the Indonesian market. Institutional syndicates and multinationals fail not because of a lack of funds, but due to a failure to master the regulatory, spatial, and geopolitical terrain.",
      "The Wiradarma Group acts as the executive shield between institutional capital and local market friction. We do not manage daily site operations; we engineer the strategic architecture that guarantees capital survival, strict compliance, and asset liquidity.",
    ],
    tenets: ["Capital Survival", "Strict Compliance", "Asset Liquidity"],
  },

  capabilities: {
    eyebrow: "The Four Pillars",
    header: "Core Capabilities.",
    intro: "Four disciplines, exercised exclusively at the executive level.",
    items: [
      {
        title: "Government Relations & Strategic Alignment",
        icon: "capitol",
        body: "Peer-to-peer alignment across the executive branch and macroeconomic gatekeepers to clear regulatory friction and structure state-level procurement for global syndicates and defense contractors.",
      },
      {
        title: "Institutional Land Acquisition & Spatial Legality",
        icon: "zoning",
        body: "Direct integration with state agrarian, spatial planning, and central revenue authorities to guarantee land-use conformity, commercial zoning approvals, and absolute title clearance.",
      },
      {
        title: "Corporate Intelligence & Risk Mitigation",
        icon: "reticle",
        body: "Military-grade pre-acquisition reconnaissance to audit local counterparties, map regional political exposure, and sanitize operational perimeters prior to capital deployment.",
      },
      {
        title: "Distressed Asset Turnarounds & Capital Rescue",
        icon: "deed",
        body: "Tactical acquisition, title-clearing, and executive intervention for highly leveraged non-performing loans, stalled infrastructure, and state-auctioned commercial assets.",
      },
    ],
  },

  principal: {
    eyebrow: "Leadership",
    header: "Executive Command.",
    body: "The Wiradarma Group is directed by its Principal, a former military commander and the active Chief Executive Officer of a major Indonesian corporate group, possessing absolute mastery of the Indonesian regulatory and geopolitical terrain.",
    // Article body — plain prose built only from the stated credentials
    article: [
      "As the active CEO of BML Group, the Principal scales master-planned developments and directs over Rp 400 billion in corporate asset value creation.",
      "The Principal is a graduate of the Indonesian Military Academy (Akmil, class of 2005) and retired from the Indonesian Army (TNI) with the rank of Infantry Major.",
      "Academic training includes a Master of Arts in Security Studies, focused on civil-military relations, from the U.S. Naval Postgraduate School in Monterey, California. Advanced military training includes Airborne Ranger, USMC Command and Staff College, and the Combined Strategic Intelligence Training Program.",
    ],
    // Short factual summary shown beside the article
    summaryLabel: "Background",
    summary: [
      { label: "Corporate", value: "Chief Executive Officer, BML Group" },
      { label: "Military", value: "Indonesian Military Academy, Akmil '05 · Retired Infantry Major (TNI)" },
      { label: "Education", value: "M.A. Security Studies, U.S. Naval Postgraduate School" },
      {
        label: "Training",
        value: "Airborne Ranger · USMC Command and Staff College · Combined Strategic Intelligence Training Program",
      },
    ],
  },

  engagement: {
    eyebrow: "Terms of Engagement",
    header: "Rules of Engagement.",
    body: "The Wiradarma Group only engages with institutional capital, family offices, and foreign syndicates. To ensure absolute operational integrity, our advisory structure mandates a strict 12-month minimum engagement period. We operate exclusively at the executive level; on-demand physical deployment to the field requires a 3-day minimum and is subject to full executive logistics. We do not accept retail advisory mandates.",
    // Four headline rules, shown as a rigid grid
    terms: [
      {
        label: "Counterparties",
        value: "Institutional",
        unit: "only",
        detail: "Institutional capital, family offices, and foreign syndicates.",
      },
      {
        label: "Minimum Engagement",
        value: "12",
        unit: "months",
        detail: "A strict minimum term on every advisory mandate.",
      },
      {
        label: "Field Deployment",
        value: "3",
        unit: "days min.",
        detail: "On-demand physical deployment, subject to full executive logistics.",
      },
      {
        label: "Retail Mandates",
        value: "None",
        unit: "accepted",
        detail: "We operate exclusively at the executive level.",
      },
    ],
    term: {
      label: "Minimum Term",
      total: "12 Months",
      start: "Month 01",
      startNote: "Mandate commences",
      end: "Month 12",
      endNote: "Minimum term fulfilled",
    },
    eligibility: {
      acceptedLabel: "We work with",
      accepted: ["Institutional capital", "Family offices", "Foreign syndicates"],
      declinedLabel: "We decline",
      declined: ["Retail advisory mandates", "Engagements under 12 months", "Day-to-day site operations"],
    },
    closing: "All terms apply to every mandate",
    cta: "Request Engagement Terms",
  },

  inquiry: {
    eyebrow: "Contact",
    header: "Private Inquiries.",
    intro:
      "Tell us briefly who you represent and what you are considering. All inquiries are treated as strictly confidential.",
    stepsLabel: "What happens next",
    steps: ["Send a short brief using the form", "We review it within 48 hours", "If there is a fit, we arrange a call"],
    // `value` is what the API receives (kept in English for both languages); `label` is what visitors see.
    natureOptions: [
      {
        value: "Government Relations / Regulatory Alignment",
        label: "Government Relations / Regulatory Alignment",
      },
      { value: "Spatial Legality / Land Acquisition", label: "Spatial Legality / Land Acquisition" },
      { value: "Corporate Intelligence / Risk Mitigation", label: "Corporate Intelligence / Risk Mitigation" },
      { value: "Distressed Asset Turnaround", label: "Distressed Asset Turnaround" },
    ],
    aumOptions: [
      { value: "Under USD 10M", label: "Under USD 10M" },
      { value: "USD 10M – 50M", label: "USD 10M – 50M" },
      { value: "USD 50M – 250M", label: "USD 50M – 250M" },
      { value: "USD 250M – 1B", label: "USD 250M – 1B" },
      { value: "Above USD 1B", label: "Above USD 1B" },
    ],
    disclaimer:
      "The Wiradarma Group reviews all inquiries within 48 hours. We reserve the right to decline engagements that do not align with our institutional risk parameters.",
    form: {
      required: "Required",
      optional: "Optional",
      name: "Name",
      entity: "Corporate Entity / Fund Name",
      aum: "Capital Deployed / AUM",
      aumPlaceholder: "Select range",
      nature: "Nature of Inquiry",
      naturePlaceholder: "Select mandate",
      message: "Brief",
      messagePlaceholder: "Asset class, jurisdiction, and the decision you are facing.",
      submit: "Submit Inquiry",
      sending: "Sending…",
      thanks: "Thank you",
      received: "Your inquiry has been received.",
      error: "Something went wrong while sending. Please try again.",
    },
  },

  footer: {
    tagline: "Strategic government relations & sovereign risk mitigation in Indonesia.",
    sections: "Sections",
    office: "Office",
    location: "Jakarta, Indonesia",
    contact: "Send an inquiry",
    rights: "All rights reserved.",
    top: "Back to top",
  },
};

export default en;

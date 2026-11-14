// English copy — served at "/". Every key here must also exist in ./id.js.

const en = {
  locale: "en",

  meta: {
    title: "The Wiradarma Group — Institutional Real Estate Advisory, Indonesia",
    description:
      "Institutional real estate advisory and distressed asset turnarounds in Indonesia. Executive-level risk mitigation, regulatory navigation, and tactical asset protection for foreign syndicates and family offices.",
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
    headline: "Institutional Real Estate Advisory & Distressed Asset Turnarounds in Indonesia.",
    // Same headline, broken into the lines that animate in on large screens.
    headlineLines: ["Institutional Real Estate Advisory", "& Distressed Asset Turnarounds", "in Indonesia."],
    stats: [
      { value: "Rp 400B+", label: "Distressed asset value created by the Principal" },
      { value: "12 Mo.", label: "Minimum engagement" },
      { value: "48 Hrs", label: "Inquiry review window" },
    ],
    subheadline:
      "We provide executive-level risk mitigation, regulatory navigation, and tactical asset protection for foreign syndicates and family offices.",
    cta: { href: "#inquiries", label: "Inquire on Capabilities" },
  },

  doctrine: {
    eyebrow: "Our Approach",
    header: "The Institutional Shield.",
    paragraphs: [
      "Foreign capital routinely bleeds in the Indonesian real estate market. Syndicates fail not because of a lack of funds, but due to a failure to master the spatial, regulatory, and human terrain.",
      "The Wiradarma Group acts as the executive shield between institutional capital and local market friction. We do not manage daily site operations; we engineer the strategic architecture that guarantees capital survival, strict compliance, and asset liquidity.",
    ],
    tenets: ["Capital Survival", "Strict Compliance", "Asset Liquidity"],
  },

  capabilities: {
    eyebrow: "What We Do",
    header: "Core Capabilities.",
    intro: "Four disciplines, exercised exclusively at the executive level.",
    items: [
      {
        title: "Distressed Asset Turnarounds",
        icon: "deed",
        body: "Tactical acquisition and title-clearing for highly leveraged non-performing loans.",
        // Spelled out under the description
        terms: [
          { abbr: "KPKNL", meaning: "State Asset & Auction Office (Kantor Pelayanan Kekayaan Negara dan Lelang)" },
        ],
      },
      {
        title: "Bureaucratic & Spatial Navigation",
        icon: "zoning",
        body: "Peer-to-peer alignment with BPN, PUPR, and KPP to guarantee KKPR, PBG, and SLF compliance.",
        terms: [
          { abbr: "BPN", meaning: "National Land Agency (Badan Pertanahan Nasional)" },
          { abbr: "PUPR", meaning: "Ministry of Public Works & Housing (Pekerjaan Umum dan Perumahan Rakyat)" },
          { abbr: "KPP", meaning: "Tax Service Office (Kantor Pelayanan Pajak)" },
          { abbr: "KKPR", meaning: "Spatial-use conformity (Kesesuaian Kegiatan Pemanfaatan Ruang)" },
          { abbr: "PBG", meaning: "Building approval (Persetujuan Bangunan Gedung)" },
          { abbr: "SLF", meaning: "Certificate of occupancy (Sertifikat Laik Fungsi)" },
        ],
      },
      {
        title: "Strategic Risk Mitigation",
        icon: "reticle",
        body: "Pre-acquisition intelligence, threat calibration, and high-level dispute resolution to protect asset IRR.",
        terms: [{ abbr: "IRR", meaning: "Internal rate of return — the asset's projected annual yield" }],
      },
      {
        title: "Institutional Project Command",
        icon: "beam",
        body: "Executive oversight enforcing absolute material integrity (Structural Steel, Quadra, YKK AP) and treasury control.",
        terms: [
          { abbr: "Materials", meaning: "Structural steel, Quadra stone, YKK AP façade systems" },
          { abbr: "Treasury", meaning: "Control of project funds and disbursements" },
        ],
      },
    ],
  },

  principal: {
    eyebrow: "Leadership",
    header: "Executive Command.",
    body: "The Wiradarma Group is led by its Principal, a former military commander and the current CEO of BML Group, with absolute mastery of the Indonesian regulatory and operational terrain.",
    // Article body — plain prose built only from the stated credentials
    article: [
      "The Principal currently serves as Chief Executive Officer of BML Group (PT Bangun Minanga Lestari), leading the development of master-planned townships and over Rp 400 billion in distressed asset value creation to date.",
      "The Principal is a graduate of the Indonesian Military Academy (Akmil, class of 2005) and retired from the Indonesian Army (TNI) with the rank of Infantry Major.",
      "Academic training includes a Master of Arts in Security Studies, focused on civil-military relations, from the U.S. Naval Postgraduate School in Monterey, California. Advanced strategic training with the U.S. Armed Forces includes Airborne Ranger qualification, the Marine Corps Command and Staff College, and the Combined Strategic Intelligence Training Program.",
    ],
    // Short factual summary shown beside the article
    summaryLabel: "Background",
    summary: [
      { label: "Corporate", value: "Chief Executive Officer (current), BML Group (PT Bangun Minanga Lestari)" },
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
      "Tell us briefly who you represent and what you are considering. All inquiries are treated as confidential.",
    stepsLabel: "What happens next",
    steps: ["Send a short brief using the form", "We review it within 48 hours", "If there is a fit, we arrange a call"],
    // `value` is what the API receives (kept in English for both languages); `label` is what visitors see.
    natureOptions: [
      { value: "Distressed Asset Turnaround (KPKNL)", label: "Distressed Asset Turnaround (KPKNL)" },
      { value: "Bureaucratic & Spatial Navigation", label: "Bureaucratic & Spatial Navigation" },
      { value: "Strategic Risk Mitigation", label: "Strategic Risk Mitigation" },
      { value: "Institutional Project Command", label: "Institutional Project Command" },
      { value: "Other — Executive Matter", label: "Other — Executive Matter" },
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
    tagline: "Institutional real estate advisory & distressed asset turnarounds in Indonesia.",
    sections: "Sections",
    office: "Office",
    location: "Jakarta, Indonesia",
    contact: "Send an inquiry",
    rights: "All rights reserved.",
    top: "Back to top",
  },
};

export default en;

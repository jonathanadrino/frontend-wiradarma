// All public copy for the site lives here so it can be edited without touching layout code.

export const site = {
  name: "The Wiradarma Group",
  shortName: "Wiradarma",
  // Drop a dark-toned loop (structural steel placement or archipelago topography)
  // into /public/media (create the folder) and set the path here, e.g. "/media/hero.mp4".
  // While null, the hero shows the structural-steel photograph.
  heroVideo: null,
  heroPoster: null,
};

export const nav = [
  { href: "#doctrine", label: "Doctrine" },
  { href: "#capabilities", label: "Capabilities" },
  { href: "#principal", label: "Principal" },
  { href: "#engagement", label: "Engagement" },
  { href: "#inquiries", label: "Private Inquiries" },
];

export const hero = {
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
};

export const doctrine = {
  eyebrow: "Our Approach",
  header: "The Institutional Shield.",
  paragraphs: [
    "Foreign capital routinely bleeds in the Indonesian real estate market. Syndicates fail not because of a lack of funds, but due to a failure to master the spatial, regulatory, and human terrain.",
    "The Wiradarma Group acts as the executive shield between institutional capital and local market friction. We do not manage daily site operations; we engineer the strategic architecture that guarantees capital survival, strict compliance, and asset liquidity.",
  ],
  tenets: ["Capital Survival", "Strict Compliance", "Asset Liquidity"],
};

export const capabilities = {
  eyebrow: "What We Do",
  header: "Core Capabilities.",
  intro: "Four disciplines, exercised exclusively at the executive level.",
  items: [
    {
      title: "Distressed Asset Turnarounds",
      // Spelled out under the description
      terms: [
        { abbr: "KPKNL", meaning: "State Asset & Auction Office (Kantor Pelayanan Kekayaan Negara dan Lelang)" },
      ],
      icon: "deed",
      body: "Tactical acquisition and title-clearing for highly leveraged non-performing loans.",
    },
    {
      title: "Bureaucratic & Spatial Navigation",
      terms: [
        { abbr: "BPN", meaning: "National Land Agency (Badan Pertanahan Nasional)" },
        { abbr: "PUPR", meaning: "Ministry of Public Works & Housing (Pekerjaan Umum dan Perumahan Rakyat)" },
        { abbr: "KPP", meaning: "Tax Service Office (Kantor Pelayanan Pajak)" },
        { abbr: "KKPR", meaning: "Spatial-use conformity (Kesesuaian Kegiatan Pemanfaatan Ruang)" },
        { abbr: "PBG", meaning: "Building approval (Persetujuan Bangunan Gedung)" },
        { abbr: "SLF", meaning: "Certificate of occupancy (Sertifikat Laik Fungsi)" },
      ],
      icon: "zoning",
      body: "Peer-to-peer alignment with BPN, PUPR, and KPP to guarantee KKPR, PBG, and SLF compliance.",
    },
    {
      title: "Strategic Risk Mitigation",
      terms: [{ abbr: "IRR", meaning: "Internal rate of return — the asset's projected annual yield" }],
      icon: "reticle",
      body: "Pre-acquisition intelligence, threat calibration, and high-level dispute resolution to protect asset IRR.",
    },
    {
      title: "Institutional Project Command",
      terms: [
        { abbr: "Materials", meaning: "Structural steel, Quadra stone, YKK AP façade systems" },
        { abbr: "Treasury", meaning: "Control of project funds and disbursements" },
      ],
      icon: "beam",
      body: "Executive oversight enforcing absolute material integrity (Structural Steel, Quadra, YKK AP) and treasury control.",
    },
  ],
};

export const principal = {
  eyebrow: "Leadership",
  header: "Executive Command.",
  body: "The Wiradarma Group is led by its Principal, a former military commander and corporate CEO with absolute mastery of the Indonesian regulatory and operational terrain.",
  // Article body — plain prose built only from the stated credentials
  article: [
    "As former Chief Executive Officer of BML Group (PT Bangun Minanga Lestari), the Principal scaled master-planned townships and executed over Rp 400 billion in distressed asset value creation.",
    "The Principal is a graduate of the Indonesian Military Academy (Akmil, class of 2005) and retired from the Indonesian Army (TNI) with the rank of Infantry Major.",
    "Academic training includes a Master of Arts in Security Studies, focused on civil-military relations, from the U.S. Naval Postgraduate School in Monterey, California. Advanced strategic training with the U.S. Armed Forces includes Airborne Ranger qualification, the Marine Corps Command and Staff College, and the Combined Strategic Intelligence Training Program.",
  ],
  // Short factual summary shown beside the article
  summary: [
    { label: "Corporate", value: "Former CEO, BML Group (PT Bangun Minanga Lestari)" },
    { label: "Military", value: "Indonesian Military Academy, Akmil '05 · Retired Infantry Major (TNI)" },
    { label: "Education", value: "M.A. Security Studies, U.S. Naval Postgraduate School" },
    { label: "Training", value: "Airborne Ranger · USMC Command and Staff College · Combined Strategic Intelligence Training Program" },
  ],
};

export const engagement = {
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
  eligibility: {
    accepted: ["Institutional capital", "Family offices", "Foreign syndicates"],
    declined: ["Retail advisory mandates", "Engagements under 12 months", "Day-to-day site operations"],
  },
};

export const inquiry = {
  eyebrow: "Contact",
  header: "Private Inquiries.",
  intro: "Tell us briefly who you represent and what you are considering. All inquiries are treated as confidential.",
  natureOptions: [
    "Distressed Asset Turnaround (KPKNL)",
    "Bureaucratic & Spatial Navigation",
    "Strategic Risk Mitigation",
    "Institutional Project Command",
    "Other — Executive Matter",
  ],
  aumOptions: ["Under USD 10M", "USD 10M – 50M", "USD 50M – 250M", "USD 250M – 1B", "Above USD 1B"],
  disclaimer:
    "The Wiradarma Group reviews all inquiries within 48 hours. We reserve the right to decline engagements that do not align with our institutional risk parameters.",
};

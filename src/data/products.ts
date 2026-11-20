export interface ProductScreenshot {
  src: string;
  alt: string;
  caption: string;
}

export interface ProductMetric {
  label: string;
  value: string;
}

export interface Product {
  slug: string;
  name: string;
  tagline: string;
  category: "Enterprise Software" | "EdTech & AI Platforms";
  role: string;
  status: "Production Deployed" | "Active Enterprise Deployment" | "Live Platform";
  targetMarket: string;
  shortDescription: string;
  problemSolved: string;
  architectureOverview: string;
  features: string[];
  stack: string[];
  metrics: ProductMetric[];
  screenshots: ProductScreenshot[];
  liveUrl?: string;
  demoAvailable: boolean;
  featured: boolean;
}

export const products: Product[] = [
  {
    slug: "nexo-pos",
    name: "NEXO POS",
    tagline: "Offline-First Dual-Component Retail & Inventory POS System",
    category: "Enterprise Software",
    role: "Lead Developer & System Architect",
    status: "Production Deployed",
    targetMarket: "Supermarkets, Pharmacies, Hardware Stores, Clothing Boutiques & Grocery Stores",
    shortDescription:
      "A dual-component architecture featuring an Offline-First Desktop App (Flutter/Isar) and a Real-Time Cloud Web Dashboard (Next.js/Firebase) with Motherboard Serial-Locked DRM Security.",
    problemSolved:
      "Traditional cloud-only POS systems halt retail checkout operations when internet connectivity drops. Conversely, legacy offline desktop software lacks live cloud visibility and remote managerial analytics. NEXO POS solves this with a zero-downtime offline desktop engine paired with automatic cloud syncing for real-time remote revenue and inventory tracking.",
    architectureOverview:
      "Engineered with Flutter and the embedded NoSQL Isar database on the desktop for millisecond-fast local billing. State synchronization bridges local transactions to Firebase Firestore and Next.js cloud analytics upon connectivity. Security is anchored via hardware-level motherboard serial DRM verification.",
    features: [
      "Rapid barcode & name-based billing with sub-second receipt printing",
      "Hardware-Locked DRM Licensing tied directly to the motherboard serial number",
      "GRN (Good Received Note) inward inventory management with automated low-stock warnings",
      "Live Cloud Web Dashboard for remote real-time monitoring of net profits, expenses, and top sellers",
      "Customer credit ledger and installment accounting with daily expense reconciliation",
      "One-click generation of exportable PDF and CSV financial audit reports"
    ],
    stack: ["Flutter", "Isar Local DB", "Next.js", "Firebase", "TypeScript", "Tailwind CSS", "Motherboard DRM"],
    metrics: [
      { label: "Architecture", value: "Offline-First Dual Engine" },
      { label: "DRM Security", value: "Motherboard Serial Locked" },
      { label: "Sync Engine", value: "Firebase Real-Time Cloud" },
      { label: "Checkout Latency", value: "< 20ms Local Execution" }
    ],
    screenshots: [
      {
        src: "/projects/nexo-pos/login-screen.jpg",
        alt: "NEXO POS Secure Authentication and Workstation Terminal",
        caption: "Workstation terminal sign-in with hardware licensing validation and dual role access"
      },
      {
        src: "/projects/nexo-pos/desktop-dashboard.jpg",
        alt: "NEXO POS Desktop Billing and Financial Summary Interface",
        caption: "Desktop POS operating terminal featuring today's sales, cash in drawer, credit tracking, and inventory"
      },
      {
        src: "/projects/nexo-pos/cloud-analytics.jpg",
        alt: "NEXO POS Web Cloud Executive Analytics Dashboard",
        caption: "Real-time cloud analytics dashboard: multi-channel sales trends, order volumes, and inventory valuation"
      }
    ],
    demoAvailable: true,
    featured: true
  },
  {
    slug: "resto-management",
    name: "Resto Restaurant Management",
    tagline: "End-to-End Hospitality POS & Zero-Latency Kitchen Display System",
    category: "Enterprise Software",
    role: "Lead Developer & System Architect",
    status: "Active Enterprise Deployment",
    targetMarket: "Fine Dining Restaurants, Cafes, Cloud Kitchens & Quick Service Restaurants (QSR)",
    shortDescription:
      "A complete food service management solution connecting front-of-house table reservations and rapid touch billing to back-of-house kitchen display systems (KDS) with ingredient-level stock control.",
    problemSolved:
      "Restaurant operations suffer from paper ticket loss, waiter-to-kitchen miscommunication, and untracked ingredient waste. Resto synchronizes front-of-house waitstaff with chefs in real-time, enforcing shift transparency and ingredient-level batch deduction on every meal prepped.",
    architectureOverview:
      "Built with a responsive React/Node.js architecture tailored for both desktop touchscreens and tablet form factors. Real-time event propagation guarantees zero-latency order dispatch to Kitchen Display screens while enforcing multi-role PIN barriers.",
    features: [
      "Intuitive Touch Point of Sale (POS) optimized for dine-in tables, takeaway, and delivery orders",
      "Real-Time Kitchen Display System (KDS) displaying order queue status with chef fulfillment markers",
      "Dynamic table layout floor planning, real-time table status, and advance reservation bookings",
      "Precise ingredient-level stock control and daily wastage logging to calculate accurate food margins",
      "Role-Based PIN Security with distinct access controls for Admins, Managers, Cashiers, Waiters, and Chefs",
      "Categorized visual menu management with time-specific pricing and eco-friendly digital receipts"
    ],
    stack: ["React", "Node.js", "MySQL", "Tailwind CSS", "Socket.io", "Touch POS UI"],
    metrics: [
      { label: "Order Flow", value: "Real-time KDS Synchronization" },
      { label: "Inventory", value: "Ingredient-Level Tracking" },
      { label: "Access Security", value: "PIN Role Enforcement" },
      { label: "Platform", value: "Web, Tablet & Terminal" }
    ],
    screenshots: [
      {
        src: "/projects/resto/kds-preview.svg",
        alt: "Resto Restaurant Management System Architecture Preview",
        caption: "Resto Enterprise POS & Kitchen Display System (Live deployment screenshots available upon authorized NDA request)"
      }
    ],
    demoAvailable: true,
    featured: true
  },
  {
    slug: "nexoplay-game-cafe",
    name: "NexoPlay Game Cafe Management",
    tagline: "Real-Time Console Billing, Station Automation & Cafe Ledger System",
    category: "Enterprise Software",
    role: "Lead Developer & System Architect",
    status: "Production Deployed",
    targetMarket: "Gaming Lounges, eSports Arenas, PlayStation Cafes, VR Hubs & Racing Simulator Centers",
    shortDescription:
      "A specialized desktop management solution for gaming venues that automates active console time tracking, session billing, snack bar sales, and cash reconciliations.",
    problemSolved:
      "Gaming cafe operators lose significant revenue due to unmetered playtime, manual clock checks, and unrecorded confectionery sales. NexoPlay automates console session timers down to the exact second, prevents unauthorized gameplay, and provides unified station-to-cashbook reconciliation.",
    architectureOverview:
      "Engineered as a high-reliability desktop application with interactive station cards displaying live active countdown timers. Features local data integrity, station status toggling, integrated snack inventory, and daily cash drawer accounting.",
    features: [
      "Interactive Active Machines Grid with real-time countdown timers for PS5, Racing Sims, and VR bays",
      "One-click Start, Pause, and Stop session actions with configurable hourly rate tiers",
      "Integrated Snack Bar point of sale to bill refreshments alongside gaming time",
      "Daily Cash Book audit ledger tracking opening floats, continuous revenues, and closing reconciliations",
      "Customer registry with visit frequency, playtime analytics, and contact management",
      "Dynamic Machine Management hub to instantly add, configure, or retire physical console hardware"
    ],
    stack: ["Flutter Desktop", "Node.js", "Local DB", "Real-time Timers", "Tailwind Theme", "Hardware Controls"],
    metrics: [
      { label: "Timer Precision", value: "100% Real-time Second Sync" },
      { label: "Station Support", value: "PS5, PC, VR & Simulators" },
      { label: "POS Engine", value: "Gaming + Snack Bar Unified" },
      { label: "Reconciliation", value: "Automated Daily Cash Book" }
    ],
    screenshots: [
      {
        src: "/projects/nexoplay/active-sessions.jpg",
        alt: "NexoPlay Active Console Sessions and Real-time Countdown Timers",
        caption: "Active station monitoring grid displaying in-use countdown timers (PS5 TV 02, Racing Sim 01) and available bays"
      },
      {
        src: "/projects/nexoplay/machine-management.png",
        alt: "NexoPlay Machine and Console Management Hub",
        caption: "Machine configuration center managing PS5 consoles, racing rigs, and equipment categories"
      },
      {
        src: "/projects/nexoplay/dashboard-overview.jpg",
        alt: "NexoPlay Gaming Cafe Workstation Overview",
        caption: "Console station grid ready for instant one-click session activation"
      }
    ],
    demoAvailable: true,
    featured: true
  },
  {
    slug: "koreanguru",
    name: "KoreanGuru",
    tagline: "EPS-TOPIK Korean Exam Preparation & Computer-Based UBT Simulator",
    category: "EdTech & AI Platforms",
    role: "Full Stack Architect & Product Creator",
    status: "Live Platform",
    targetMarket: "EPS-TOPIK Examination Candidates, Sri Lankan Foreign Employment Aspirants & Language Learners",
    shortDescription:
      "A comprehensive digital self-study platform for the Korean EPS-TOPIK exam, featuring all 60 official HRD Korea textbooks, Sinhala explanations, native listening audio, and 100 UBT computer-based exam papers.",
    problemSolved:
      "Aspirants preparing for Korean employment exams often travel far for expensive classes that lack authentic computer-based UBT exam simulators. KoreanGuru democratizes access by delivering structured self-study, 4,000+ interactive practice questions, and authentic computer exam testing on any device.",
    architectureOverview:
      "Designed as an ultra-fast, responsive web application with PWA offline-first capabilities. Includes custom audio pitch/speed control algorithms, interactive question grading engines, and real-time exam timing simulators.",
    features: [
      "All 60 Official HRD Korea Textbook Lessons with comprehensive Sinhala explanations and vocabulary",
      "100 Computer-Based UBT Mock Exam Papers comprising over 4,000 verified questions with detailed solutions",
      "Native Korean listening drills with multi-speed playback and phrase repetition controls",
      "1-Click Quick Access Hub covering Hangul alphabet, 2,500+ vocabulary flashcards, and speed match games",
      "Round 2 Skill Test simulator with interview commands and vocational instructions",
      "Integrated Ishihara Color Vision testing engine ensuring candidate medical compliance",
      "Offline-enabled Progressive Web App (PWA) allowing uninterrupted study without active data"
    ],
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "PWA Architecture", "Audio Synthesis Engine", "UBT Exam Simulator"],
    metrics: [
      { label: "Exam Question Vault", value: "4,000+ Questions / 100 Papers" },
      { label: "Official Curriculum", value: "60 HRD Korea Lessons" },
      { label: "Vocabulary Bank", value: "2,500+ Words & Flashcards" },
      { label: "Platform Type", value: "Installable PWA (Offline Ready)" }
    ],
    screenshots: [
      {
        src: "/projects/koreanguru/hero-banner.png",
        alt: "KoreanGuru EPS-TOPIK Self-Study Portal Hero",
        caption: "KoreanGuru homepage featuring official HRD Korea lesson access, native listening, and demo UBT tests"
      },
      {
        src: "/projects/koreanguru/curriculum-hub.png",
        alt: "KoreanGuru 1-Click Quick Access Hub and Exam Modules",
        caption: "1-Click learning modules: Hangul alphabet, official textbooks, 100 UBT papers, and color blindness assessment"
      }
    ],
    liveUrl: "https://koreanguru.lk",
    demoAvailable: true,
    featured: true
  },
  {
    slug: "nihongoguru",
    name: "NihongoGuru",
    tagline: "JLPT N5 & SSW Japanese Language Learning & Interactive Kanji Studio",
    category: "EdTech & AI Platforms",
    role: "Full Stack Architect & Product Creator",
    status: "Live Platform",
    targetMarket: "JLPT N5 & SSW Japanese Visa Candidates, Language Students & Self-Study Enthusiasts",
    shortDescription:
      "An immersive Japanese language mastery portal combining 25 Minna no Nihongo lessons, interactive stroke-order Kana/Kanji drawing pads, authentic Choukai listening tests, and offline study tools.",
    problemSolved:
      "Memorizing Japanese syllabaries (Hiragana/Katakana) and Kanji characters without tactile feedback is difficult. NihongoGuru provides an interactive digital drawing canvas with instant stroke-recognition, alongside complete exam mock papers and Sinhala explanations.",
    architectureOverview:
      "Engineered with Next.js, HTML5 Canvas for real-time stroke tracking, and a modular client-side state engine for streak and XP tracking. Fully configured as an offline-ready PWA with rich audio sound effects.",
    features: [
      "Complete 25 lessons of Minna no Nihongo translated with in-depth Sinhala grammatical explanations",
      "103 JLPT N5 Kanji Flashcards with stroke-by-stroke guides, Onyomi/Kunyomi readings, and vocabulary",
      "Interactive Kana Studio & Digital Drawing Pad for tactile handwriting practice and character retention",
      "Authentic Choukai (Listening) mock exams paired with speed controls and dialog transcripts",
      "Gamified learning ecosystem with daily study streaks, XP reward badges, and milestone tracking",
      "PWA installable app supporting complete offline study on both desktop and mobile devices"
    ],
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "HTML5 Canvas", "PWA Architecture", "Audio Engine", "Gamification"],
    metrics: [
      { label: "Official Syllabus", value: "25 Minna no Nihongo Lessons" },
      { label: "Kanji Bank", value: "103 JLPT N5 Characters" },
      { label: "Interactive Tools", value: "Digital Kanji/Kana Drawing Pad" },
      { label: "Availability", value: "100% Offline PWA Ready" }
    ],
    screenshots: [
      {
        src: "/projects/nihongoguru/study-dashboard.jpg",
        alt: "NihongoGuru Japanese Student Learning Dashboard",
        caption: "NihongoGuru dashboard highlighting study streaks, Kana Studio, Minna lessons, and vocabulary flashcards"
      }
    ],
    liveUrl: "https://nihongoguru.lk",
    demoAvailable: true,
    featured: true
  },
  {
    slug: "englishguru",
    name: "EnglishGuru",
    tagline: "4D Adaptive Spoken English & Voice Pronunciation Feedback Platform",
    category: "EdTech & AI Platforms",
    role: "Full Stack Architect & Product Creator",
    status: "Live Platform",
    targetMarket: "Students, Job Seekers, Working Professionals & Corporate Teams",
    shortDescription:
      "An adaptive spoken English and exam coaching platform that pairs personalized 2-minute study plans with an interactive AI Spoken Studio for real-time microphone pronunciation feedback.",
    problemSolved:
      "English learners frequently know grammar rules but lack confidence and immediate speaking feedback in conversational contexts. EnglishGuru provides an interactive studio where users practice speaking with instant pronunciation validation and Sinhala phonetics.",
    architectureOverview:
      "Combines modern Next.js client architecture with the Web Speech and MediaStream APIs for client-side voice capture. Implements personalized level diagnostic engines and dynamic flashcard vaults.",
    features: [
      "Interactive AI Spoken Studio with live microphone speech input and instant pronunciation feedback",
      "Adaptive learning diagnostics creating customized daily study roadmaps based on available minutes",
      "Sinhala phonetic guidance explaining vocal modulation, sentence rhythm, and common mispronunciations",
      "Think-in-English lab designed to break word-by-word mental translation habits",
      "Comprehensive Exam & School hub supporting national O/L preparation and career English",
      "3D Flashcard vault for active vocabulary expansion with native audio playback"
    ],
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Web Speech API", "Audio Processing", "Adaptive Engine"],
    metrics: [
      { label: "Speech Engine", value: "Live Mic Pronunciation Check" },
      { label: "Learning Engine", value: "4D Adaptive Personalized Plan" },
      { label: "Content Scope", value: "Spoken, Phonics, O/L & Career" },
      { label: "Bilingual Support", value: "Sinhala Guided Audio & Text" }
    ],
    screenshots: [
      {
        src: "/projects/englishguru/adaptive-platform.png",
        alt: "EnglishGuru Adaptive Spoken & Exam Platform Dashboard",
        caption: "EnglishGuru main interface showing the live interactive speech studio, pronunciation evaluator, and learning tracks"
      }
    ],
    liveUrl: "https://englishguru.lk",
    demoAvailable: true,
    featured: true
  }
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getAllProductSlugs(): string[] {
  return products.map((p) => p.slug);
}

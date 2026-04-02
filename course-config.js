/* ============================================
   CALCULUS II — COURSE CONFIGURATION
   ============================================
   Central config file. All pages read from here.
   ============================================ */

const COURSE = {

  // ── Course Identity ──
  code: "MATH 102",
  title: "Calculus II",
  subtitle: "Integration techniques, applications of integrals, sequences, series, and parametric & polar curves.",
  brandName: "Calc 2",
  heroHighlight: "Calculus II",

  // ── Instructor ──
  instructor: {
    name: "Dr. Mohamed Mabrok",
    initials: "MM",
    role: "Associate Professor",
    department: "Mathematics & Statistics, Qatar University",
    email: "m.a.mabrok@gmail.com",
    photo: "instructor.jpg",
  },

  // ── Hero Stats ──
  stats: [
    { num: "7",    label: "Chapters" },
    { num: "31",   label: "Topics" },
    { num: "120+", label: "Problems" },
    { num: "Live", label: "Visualizations" },
  ],

  // ── Color Theme ──
  theme: {
    primary:      "#2563eb",
    primaryLight: "#dbeafe",
    primaryDark:  "#1e40af",
    accent:       "#7c3aed",
    accentLight:  "#ede9fe",
    success:      "#059669",
    successLight: "#d1fae5",
    warning:      "#d97706",
    warningLight: "#fef3c7",
    danger:       "#dc2626",
    dangerLight:  "#fee2e2",
  },

  // ── Chapter Colors ──
  chapterColors: [
    { main: "#6366f1", light: "#e0e7ff", gradient: ["#4f46e5", "#6366f1"] },  // Ch 0 — Indigo
    { main: "#059669", light: "#d1fae5", gradient: ["#059669", "#10b981"] },  // Ch 1
    { main: "#2563eb", light: "#dbeafe", gradient: ["#2563eb", "#3b82f6"] },  // Ch 2
    { main: "#7c3aed", light: "#ede9fe", gradient: ["#7c3aed", "#8b5cf6"] },  // Ch 3
    { main: "#d97706", light: "#fef3c7", gradient: ["#d97706", "#f59e0b"] },  // Ch 4
    { main: "#dc2626", light: "#fee2e2", gradient: ["#dc2626", "#ef4444"] },  // Ch 5
    { main: "#0891b2", light: "#cffafe", gradient: ["#0891b2", "#06b6d4"] },  // Ch 6
  ],

  // ── Chapter Definitions ──
  chapters: [
    {
      id: "ch0",
      title: "Why Study Calculus II?",
      shortTitle: "The Big Picture",
      description: "Where Calculus II fits in your engineering journey — the math roadmap, connections to physics and engineering, and why this course matters.",
      tagline: "See the big picture first",
      status: "available",
      topics: [
        {
          id: "ch0-big-picture",
          title: "0.1 — The Engineering Math Roadmap",
          icon: "M",
          description: "A visual map of every math course you'll take and how Calc II connects them all.",
          mathPreview: "\\text{Calc I} \\to \\text{Calc II} \\to \\text{Calc III, DE, Linear Algebra}",
          file: "why-study.html",
        },
        {
          id: "ch0-applications",
          title: "0.2 — Real-World Applications",
          icon: "A",
          description: "How integration, series, and convergence appear in physics, engineering, and data science.",
          mathPreview: "W = \\int_a^b F(x)\\,dx",
          file: "why-study.html#applications",
        },
        {
          id: "ch0-connections",
          title: "0.3 — Connections to Engineering",
          icon: "E",
          description: "How each chapter of Calc II feeds into your future courses and engineering career.",
          mathPreview: "\\text{Signals} \\leftrightarrow \\text{Fourier Series}",
          file: "why-study.html#connections",
        },
      ],
    },
    {
      id: "ch1",
      title: "Integration Techniques",
      shortTitle: "Integration",
      description: "Beyond basic antiderivatives: integration by parts, trigonometric integrals, trigonometric substitution, partial fractions, and numerical methods.",
      tagline: "The art of finding antiderivatives",
      status: "available",
      topics: [
        {
          id: "ch1-by-parts",
          title: "1.1 — Integration by Parts",
          icon: "P",
          description: "Reversing the product rule to integrate products of functions.",
          mathPreview: "\\int u\\,dv = uv - \\int v\\,du",
          file: "ch1-by-parts.html",
        },
        {
          id: "ch1-trig-integrals",
          title: "1.2 — Trigonometric Integrals",
          icon: "T",
          description: "Integrating powers and products of sine, cosine, tangent, and secant.",
          mathPreview: "\\int \\sin^m x \\cos^n x\\,dx",
          file: "ch1-trig-integrals.html",
        },
        {
          id: "ch1-trig-sub",
          title: "1.3 — Trigonometric Substitution",
          icon: "S",
          description: "Using trig identities to simplify integrals involving radicals.",
          mathPreview: "\\int \\frac{dx}{\\sqrt{a^2 - x^2}}",
          file: "ch1-trig-sub.html",
        },
        {
          id: "ch1-partial-fractions",
          title: "1.4 — Partial Fractions",
          icon: "F",
          description: "Decomposing rational functions into simpler fractions for integration.",
          mathPreview: "\\frac{P(x)}{Q(x)} = \\frac{A}{x-a} + \\frac{B}{x-b}",
          file: "ch1-partial-fractions.html",
        },
        {
          id: "ch1-decision-guide",
          title: "1.5 — Which Technique? Decision Guide",
          icon: "?",
          description: "An interactive flowchart and wizard to help you choose the right integration technique for any problem.",
          mathPreview: "\\int f(x)\\,dx \\;\\to\\; \\text{which method?}",
          file: "ch1-decision-guide.html",
        },
        {
          id: "ch1-study-tools",
          title: "1.6 — Study Tools",
          icon: "★",
          description: "Formula sheet, step-by-step solver, flashcards, common mistakes gallery, and ELI5 explanations for all Chapter 1 techniques.",
          mathPreview: "\\text{Review} \\;\\&\\; \\text{Practice}",
          file: "ch1-study-tools.html",
        },
      ],
    },
    {
      id: "ch2",
      title: "Applications of Integration",
      shortTitle: "Applications",
      description: "Using definite integrals to compute areas, volumes of revolution, arc lengths, and surface areas.",
      tagline: "From integrals to geometry",
      status: "available",
      topics: [
        {
          id: "ch2-area",
          title: "2.1 — Area Between Curves",
          icon: "A",
          description: "Finding the area enclosed between two curves.",
          mathPreview: "A = \\int_a^b |f(x) - g(x)|\\,dx",
          file: "ch2-area.html",
        },
        {
          id: "ch2-disk-washer",
          title: "2.2 — Volumes: Disk & Washer",
          icon: "D",
          description: "Computing volumes of solids of revolution using the disk/washer method.",
          mathPreview: "V = \\pi \\int_a^b [R(x)]^2 - [r(x)]^2\\,dx",
          file: "ch2-disk-washer.html",
        },
        {
          id: "ch2-shell",
          title: "2.3 — Volumes: Shell Method",
          icon: "S",
          description: "Computing volumes using cylindrical shells.",
          mathPreview: "V = 2\\pi \\int_a^b x\\,f(x)\\,dx",
          file: "ch2-shell.html",
        },
        {
          id: "ch2-arc-length",
          title: "2.4 — Arc Length & Surface Area",
          icon: "L",
          description: "Calculating arc lengths and surface areas of revolution.",
          mathPreview: "L = \\int_a^b \\sqrt{1 + [f'(x)]^2}\\,dx",
          file: "ch2-arc-length.html",
        },
        {
          id: "ch2-study-tools",
          title: "2.5 — Study Tools",
          icon: "★",
          description: "Formula sheet, step-by-step solver, flashcards, common mistakes gallery, and ELI5 explanations for all Chapter 2 applications.",
          mathPreview: "\\text{Review} \\;\\&\\; \\text{Practice}",
          file: "ch2-study-tools.html",
        },
      ],
    },
    {
      id: "ch3",
      title: "Improper Integrals",
      shortTitle: "Improper Int.",
      description: "Extending integration to infinite intervals and discontinuous integrands, with convergence analysis.",
      tagline: "Integrating beyond the finite",
      status: "available",
      topics: [
        {
          id: "ch3-type1",
          title: "3.1 — Type I: Infinite Intervals",
          icon: "I",
          description: "Integrals over unbounded intervals using limits.",
          mathPreview: "\\int_a^{\\infty} f(x)\\,dx = \\lim_{t \\to \\infty} \\int_a^t f(x)\\,dx",
          file: "ch3-type1.html",
        },
        {
          id: "ch3-type2",
          title: "3.2 — Type II: Discontinuities",
          icon: "D",
          description: "Integrals with discontinuous integrands at or between limits.",
          mathPreview: "\\int_a^b f(x)\\,dx \\text{ where } \\lim_{x \\to a^+} f(x) = \\infty",
          file: "ch3-type2.html",
        },
        {
          id: "ch3-comparison",
          title: "3.3 — Comparison Tests",
          icon: "C",
          description: "Determining convergence by comparing with known integrals.",
          mathPreview: "0 \\le f(x) \\le g(x) \\Rightarrow \\text{convergence}",
          file: "ch3-comparison.html",
        },
        {
          id: "ch3-study-tools",
          title: "3.4 — Study Tools",
          icon: "★",
          description: "Formula sheet, step-by-step solver, flashcards, common mistakes gallery, and ELI5 explanations for all Chapter 3 improper integral techniques.",
          mathPreview: "\\text{Review} \\;\\&\\; \\text{Practice}",
          file: "ch3-study-tools.html",
        },
      ],
    },
    {
      id: "ch4",
      title: "Sequences and Series",
      shortTitle: "Series",
      description: "Infinite sequences, infinite series, and a toolkit of convergence tests to determine their behavior.",
      tagline: "The mathematics of infinite sums",
      status: "available",
      topics: [
        {
          id: "ch4-sequences",
          title: "4.1 — Sequences",
          icon: "Q",
          description: "Limits, monotonicity, and boundedness of infinite sequences.",
          mathPreview: "\\lim_{n \\to \\infty} a_n = L",
          file: "ch4-sequences.html",
        },
        {
          id: "ch4-series",
          title: "4.2 — Infinite Series",
          icon: "S",
          description: "Partial sums, geometric series, telescoping series, and the divergence test.",
          mathPreview: "\\sum_{n=1}^{\\infty} a_n = \\lim_{N \\to \\infty} \\sum_{n=1}^N a_n",
          file: "ch4-series.html",
        },
        {
          id: "ch4-integral-comparison",
          title: "4.3 — Integral & Comparison Tests",
          icon: "I",
          description: "Using integrals and known series to test convergence.",
          mathPreview: "\\int_1^{\\infty} f(x)\\,dx \\leftrightarrow \\sum_{n=1}^{\\infty} f(n)",
          file: "ch4-integral-comparison.html",
        },
        {
          id: "ch4-alternating",
          title: "4.4 — Alternating Series",
          icon: "A",
          description: "Alternating series test, absolute vs. conditional convergence.",
          mathPreview: "\\sum_{n=1}^{\\infty} (-1)^{n+1} b_n",
          file: "ch4-alternating.html",
        },
        {
          id: "ch4-ratio-root",
          title: "4.5 — Ratio & Root Tests",
          icon: "R",
          description: "The ratio test and root test for series with factorials or exponentials.",
          mathPreview: "\\lim_{n \\to \\infty} \\left|\\frac{a_{n+1}}{a_n}\\right| = L",
          file: "ch4-ratio-root.html",
        },
        {
          id: "ch4-decision-guide",
          title: "4.6 — Which Test? Decision Guide",
          icon: "?",
          description: "An interactive flowchart and wizard to help you choose the right convergence test for any series.",
          mathPreview: "\\sum a_n \\;\\to\\; \\text{which test?}",
          file: "ch4-decision-guide.html",
        },
        {
          id: "ch4-study-tools",
          title: "4.7 — Study Tools",
          icon: "★",
          description: "Formula sheet, step-by-step solver, flashcards, common mistakes gallery, and ELI5 explanations for all Chapter 4 convergence tests.",
          mathPreview: "\\text{Review} \\;\\&\\; \\text{Practice}",
          file: "ch4-study-tools.html",
        },
      ],
    },
    {
      id: "ch5",
      title: "Power Series",
      shortTitle: "Power Series",
      description: "Representing functions as infinite polynomials — power series, Taylor and Maclaurin series, and their applications.",
      tagline: "Functions as infinite polynomials",
      status: "available",
      topics: [
        {
          id: "ch5-power-series",
          title: "5.1 — Power Series",
          icon: "P",
          description: "Definition, radius and interval of convergence.",
          mathPreview: "\\sum_{n=0}^{\\infty} c_n (x - a)^n",
          file: "ch5-power-series.html",
        },
        {
          id: "ch5-taylor",
          title: "5.2 — Taylor & Maclaurin Series",
          icon: "T",
          description: "Constructing Taylor series and common Maclaurin expansions.",
          mathPreview: "f(x) = \\sum_{n=0}^{\\infty} \\frac{f^{(n)}(a)}{n!}(x-a)^n",
          file: "ch5-taylor.html",
        },
        {
          id: "ch5-applications",
          title: "5.3 — Applications of Taylor Series",
          icon: "A",
          description: "Using series for approximation, limits, and evaluating integrals.",
          mathPreview: "e^x \\approx 1 + x + \\frac{x^2}{2!} + \\frac{x^3}{3!} + \\cdots",
          file: "ch5-applications.html",
        },
        {
          id: "ch5-study-tools",
          title: "5.4 — Study Tools",
          icon: "★",
          description: "Formula sheet, step-by-step solver, flashcards, common mistakes gallery, and ELI5 explanations for all Chapter 5 power series topics.",
          mathPreview: "\\text{Review} \\;\\&\\; \\text{Practice}",
          file: "ch5-study-tools.html",
        },
      ],
    },
    {
      id: "ch6",
      title: "Parametric & Polar Curves",
      shortTitle: "Param. & Polar",
      description: "Alternative coordinate systems: parametric equations and polar coordinates, with calculus applications.",
      tagline: "Beyond Cartesian coordinates",
      status: "available",
      topics: [
        {
          id: "ch6-parametric",
          title: "6.1 — Parametric Curves",
          icon: "P",
          description: "Defining curves via parameter equations; tangents and arc length.",
          mathPreview: "x = f(t),\\; y = g(t)",
          file: "ch6-parametric.html",
        },
        {
          id: "ch6-polar",
          title: "6.2 — Polar Coordinates",
          icon: "O",
          description: "The polar coordinate system; graphing polar curves.",
          mathPreview: "r = f(\\theta)",
          file: "ch6-polar.html",
        },
        {
          id: "ch6-polar-calculus",
          title: "6.3 — Calculus in Polar Coords",
          icon: "C",
          description: "Area and arc length using polar coordinates.",
          mathPreview: "A = \\frac{1}{2}\\int_{\\alpha}^{\\beta} [f(\\theta)]^2\\,d\\theta",
          file: "ch6-polar-calculus.html",
        },
        {
          id: "ch6-study-tools",
          title: "6.4 — Study Tools",
          icon: "★",
          description: "Formula sheet, step-by-step solver, flashcards, common mistakes gallery, and ELI5 explanations for all Chapter 6 parametric and polar topics.",
          mathPreview: "\\text{Review} \\;\\&\\; \\text{Practice}",
          file: "ch6-study-tools.html",
        },
      ],
    },
  ],

  // ── Mind Map Connections ──
  connections: [
    { from: "ch1", to: "ch2", type: "prerequisite", label: "techniques enable applications" },
    { from: "ch1", to: "ch3", type: "prerequisite", label: "extends integration" },
    { from: "ch3", to: "ch4", type: "related", label: "convergence ideas" },
    { from: "ch4", to: "ch5", type: "prerequisite", label: "series → power series" },
    { from: "ch2", to: "ch6", type: "related", label: "alternative coordinates" },
  ],

  // ── Exam Generator Chapters ──
  examChapters: [
    { ch: "ch1", badge: "Ch 1", color: "#059669", title: "Integration Techniques", topics: "By Parts, Trig Integrals, Trig Sub, Partial Fractions, Decision Guide" },
    { ch: "ch2", badge: "Ch 2", color: "#2563eb", title: "Applications of Integration", topics: "Area, Disk/Washer, Shell, Arc Length" },
    { ch: "ch3", badge: "Ch 3", color: "#7c3aed", title: "Improper Integrals", topics: "Type I, Type II, Comparison Tests" },
    { ch: "ch4", badge: "Ch 4", color: "#d97706", title: "Sequences and Series", topics: "Sequences, Series, Convergence Tests, Decision Guide" },
    { ch: "ch5", badge: "Ch 5", color: "#dc2626", title: "Power Series", topics: "Power Series, Taylor/Maclaurin, Applications" },
    { ch: "ch6", badge: "Ch 6", color: "#0891b2", title: "Parametric & Polar", topics: "Parametric Curves, Polar Coords, Polar Calculus" },
  ],

  // ── Navigation Links ──
  navLinks: [
    { label: "Home",           href: "index.html",          active: true },
    { label: "Why Calculus II?", href: "why-study.html",    active: false },
    { label: "Exam Generator", href: "exam-generator.html", active: false },
    { label: "Videos",         href: "videos.html",         active: false },
  ],

  // ── Footer ──
  footer: {
    courseName: "Calculus II (MATH 102)",
    year: new Date().getFullYear(),
    instructor: "Dr. Mohamed Mabrok",
    department: "Mathematics & Statistics Department",
    institution: "Qatar University",
  },

  // ── Why Study Page ──
  whyStudy: {
    title: "Why Study Calculus II?",
    subtitle: "The mathematical toolkit that powers engineering, physics, and data science.",
  },

  // ── Videos Page ──
  videos: {
    title: "Calculus II Video Lectures",
    subtitle: "Visual explanations of integration techniques, series, and more.",
  },

  // ── Applications Bar ──
  applications: "Area & Volume  ·  Arc Length  ·  Series Approximation  ·  Physics  ·  Engineering  ·  Probability",
};

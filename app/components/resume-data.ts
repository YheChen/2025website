export type ResumeEntry = {
  logo: string;
  logoAlt: string;
  role: string;
  org: string;
  period: string;
  bullets: string[];
};

export const experience: ResumeEntry[] = [
  {
    logo: "/Bree.webp",
    logoAlt: "Bree logo",
    role: "Software Engineer Intern",
    org: "Bree (YC S21), Toronto, ON",
    period: "May 2026 – Present",
    bullets: [
      "Selected as 1 of 3 Software Engineering interns from a pool of 3,000+ applicants.",
      "Sole engineer leading the production React Native app's migration from React Navigation to Expo Router (78 screens, 230+ call sites); scoped a 4-milestone / 25-ticket roadmap and built a dual-mode navigation shim enabling a zero-rewrite cutover.",
      "Built and shipped full-stack product and internal tooling features in a TypeScript monorepo using React, Netlify Functions, AWS Lambda, and Supabase/Postgres, including schema-backed workflows for application defaults, manual disbursements, bank-account visibility, and financial investigations.",
      "Built operational automation for Zendesk and Slack, implementing repeated-customer detection, duplicate-reply detection, refund routing, chargeback handling, and backend improvements for application-state accuracy.",
    ],
  },
  {
    logo: "/uoftcslogo.webp",
    logoAlt: "University of Toronto logo",
    role: "Teaching Assistant",
    org: "University of Toronto, Department of Computer Science",
    period: "Jan 2026 – Present",
    bullets: [
      "CSC165H1: Mathematical Expression and Reasoning for Computer Science (Winter 2026).",
    ],
  },
  {
    logo: "/EngCareerCentre.webp",
    logoAlt: "Engineering Career Centre logo",
    role: "Educational Technology & UX Developer",
    org: "U of T, Faculty of Applied Science — Engineering Career Centre",
    period: "May 2025 – Mar 2026",
    bullets: [
      "Developed digital learning platforms and UI/UX improvements for the PEY Co-op Hub, used by 5,000+ engineering PEY students, increasing content engagement by 25% through enhanced navigation and accessibility.",
      "Designed and implemented a structured process for Quercus shell creation, reducing setup time by 70% and identifying key inefficiencies in existing workflows.",
      "Established a reliable backup system for 10+ preparatory and co-op program shells, streamlining instructor workflows and reducing content recovery time by 90% despite automation limitations in Canvas.",
      "Earned an 8-month extension beyond the initial 4-month term in recognition of excellent performance.",
    ],
  },
];

export const leadership: ResumeEntry[] = [
  {
    logo: "/CSSULOGO.webp",
    logoAlt: "CSSU logo",
    role: "President",
    org: "Computer Science Student Union, Toronto, ON",
    period: "May 2026 – Present",
    bullets: [],
  },
  {
    logo: "/CSSULOGO.webp",
    logoAlt: "CSSU logo",
    role: "Vice President of External Relations",
    org: "Computer Science Student Union, Toronto, ON",
    period: "May 2024 – Apr 2026",
    bullets: [
      "Raised a total of $14,000 in sponsorships over two years by securing collaborations with 9 companies.",
      "Led a team of 3 associates to organize 8 professional development events, including information sessions, resume review panels, and networking mixers that connected over 700 students with industry representatives.",
      "Hosted 2 annual career fairs with cumulative attendance of over 1,000 students, connecting them with employers for recruitment opportunities.",
    ],
  },
  {
    logo: "/iqbank.webp",
    logoAlt: "IQBank logo",
    role: "Technical Lead & Software Engineer",
    org: "IQBank, Toronto, ON · Hybrid",
    period: "May 2026 – Present",
    bullets: [
      "Providing technical leadership for a 6-developer team building IQBank's administrative tooling — driving architecture decisions, defining engineering standards, reviewing designs and pull requests, and coordinating feature delivery across frontend and backend systems.",
      "Led the design and implementation of user-management and course-administration tooling, including bulk user provisioning, enrollment workflows, and administrative dashboards.",
    ],
  },
  {
    logo: "/iqbank.webp",
    logoAlt: "IQBank logo",
    role: "Software Engineer",
    org: "IQBank, Toronto, ON · Hybrid",
    period: "Jan 2026 – Apr 2026",
    bullets: [
      "Built a user profile system in a TypeScript monorepo using React, Tailwind CSS, Node.js, Prisma, and PostgreSQL for an exam-preparation platform serving 300+ students per semester.",
      "Implemented local-storage-backed draft persistence for discussion threads, letting users resume unfinished posts across sessions.",
      "Worked under the supervision of Prof. Kuei Jack Sun on IQBank, a production-grade exam preparation platform used by university students.",
    ],
  },
  {
    logo: "/placeholder-logo.svg",
    logoAlt: "MarkUs project logo",
    role: "Open Source Software Engineer",
    org: "University of Toronto, Department of Computer Science — MarkUs Project · Toronto, ON",
    period: "May 2026 – Present",
    bullets: [
      "Contributed 7 merged pull requests to an open-source assignment management platform used by 5,000+ students, improving authentication, course administration, instructor workflows, and test infrastructure.",
    ],
  },
  {
    logo: "/UTMIST_logo.webp",
    logoAlt: "UTMIST logo",
    role: "Software Engineer",
    org: "University of Toronto Machine Intelligence Team",
    period: "May 2025 – Present",
    bullets: [
      "Built responsive UI components using React and Tailwind, improving frontend usability and reducing bounce rate.",
      "Optimized backend APIs with caching and async handlers, reducing load time by 30% for 500+ monthly users.",
      "Used GitHub Actions to build CI/CD pipelines for automated testing, linting, and production deployment.",
      "Wrote and maintained internal documentation for both frontend components and backend API usage to ensure long-term maintainability and team onboarding.",
    ],
  },
  {
    logo: "/Fields.webp",
    logoAlt: "Fields Institute logo",
    role: "Workshop Facilitator",
    org: "The Fields Institute for Research in Mathematical Sciences",
    period: "Sep 2024 – Apr 2025",
    bullets: [
      "The Fields Trip program gives schools across Ontario the chance to bring students to the Department of Mathematics for a 75-minute math workshop, introducing concepts not typically covered in the standard curriculum.",
      "As a workshop facilitator, I prepare lesson plans ahead of time and lead students through the chosen topic.",
    ],
  },
];

export const coursework: string[] = [
  "CSC494: CS Project — IQBank",
  "CSC485: Computational Linguistics",
  "CSC413: Neural Networks & Deep Learning",
  "CSC384: Intro to Artificial Intelligence",
  "CSC373: Advanced Algorithms",
  "CSC369: Operating Systems",
  "CSC343: Introduction to Databases",
  "CSC311: Intro to Machine Learning",
  "CSC309: Programming on the Web",
  "CSC263: Data Structures & Analysis",
  "CSC258: Computer Organization",
  "CSC209: Software Tools & Systems Programming",
  "CSC207: Software Design",
  "CSC165: Mathematical Expression & Reasoning",
  "CSC148: Introduction to Computer Science",
  "CSC108: Introduction to Computer Programming",
];

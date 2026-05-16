/* ── Experience / Career Log Data ── */

export interface Experience {
  role: string;
  isCurrent: boolean;
  hash: string;
  company: string;
  period: string;
  description: string;
  diffHeader: string;
  additions: string[];
  removals: string[];
  /** Duration badge for past roles (e.g. "4 mos", "1 yr 3 mos") — shown in red */
  duration?: string;
}

export const experiences: Experience[] = [
  {
    role: "iOS Developer",
    isCurrent: true,
    hash: "f9c2d41",
    company: "Apple Developer Academy @UC, Jakarta",
    period: "Mar 2026 · Present · Jakarta, ID",
    description:
      "Leading the architectural overhaul of a distributed microservices ecosystem serving 2M+ daily active users. Focused on scalability, high availability, and developer velocity.",
    diffHeader: "diff --git a/skills b/experience",
    additions: [
      "Migrated monolithic GraphQL gateway to Federation v2",
      "Implemented Rust-based core computation engine",
      "Reduced cold-start latency by 45% using Edge functions",
    ],
    removals: [
      "Deprecated legacy PHP processing pipelines",
      "Eliminated manual AWS EC2 provisioning",
    ],
  },
  {
  role: "Web Developer Intern",
  isCurrent: false,
  hash: "510p4l25",
  company: "Universitas Dian Nuswantoro",
  period: "Apr 2025 · Jul 2025 · Semarang, ID",
  duration: "4 mos",
  description: "Contributed to the development of SIOPAL (Sistem Informasi Operasional Laboratorium), an integrated platform designed to digitize computer laboratory management and asset monitoring.",
  diffHeader: "diff --git a/manual-tracking b/siopal-system",
  additions: [
    "Architected core modules for automated laboratory asset tracking",
    "Developed responsive management dashboards for real-time monitoring",
    "Optimized SQL queries to enhance system performance and reporting speed",
    "Implemented secure authentication for administrative laboratory access"
  ],
  removals: [
    "Deprecated manual paper-based reporting workflows",
    "Eliminated data inconsistencies in legacy spreadsheet monitoring",
    "Reduced administrative processing time by digitizing lab logs"
  ],
},
  {
  role: "IT Support Intern",
  isCurrent: false,
  hash: "1t5upp0rt",
  company: "Universitas Dian Nuswantoro",
  period: "Oct 2024 · Dec 2025 · Semarang, ID",
  duration: "1 yr 3 mos",
  description: "Ensured the stability of laboratory computer infrastructure and delivered direct technical support to maintain a high-performing learning environment for students.",
  diffHeader: "diff --git a/manual-maintenance b/system-reliability",
  additions: [
    "Executed hardware-level component replacements and system troubleshooting",
    "Implemented routine network health checks to ensure 99% lab uptime",
    "Standardized monthly digital reporting for laboratory administration",
    "Provided real-time technical resolution for student software environments"
  ],
  removals: [
    "Deprecated manual tracking of hardware malfunctions",
    "Eliminated unpatched software vulnerabilities across 50+ workstations",
    "Reduced technical downtime through proactive system maintenance"
  ],
},
{
  role: "Open-Source Contributor",
  isCurrent: false, 
  hash: "d0sc0m21", 
  company: "Dinus Open Source Community (DOSCOM)",
  period: "Sep 2022 · Jul 2025 · Semarang, ID",
  duration: "2 yrs 10 mos",
  description: "Contribute to the open source community to deepen programming logic and team collaboration from the early days of college.",
  diffHeader: "diff --git a/multimedia-skills b/programming-core",
  additions: [
    "Mastered Flutter & HTML basics for cross-platform development",
    "Adopted professional editing tools for division's creative assets",
    "Improved English proficiency for technical documentation",
    "Actively involved in Programming Division projects and workshops"
  ],
  removals: [
    "Deprecated beginner-level understanding of web structures",
    "Reduced reliance on manual editing workflows"
  ],
},
  {
  role: "Wirausaha Merdeka Technopreneurship",
  isCurrent: false,
  hash: "f0nt41n",
  company: "Kampus Merdeka",
  period: "Aug 2023 · Jan 2024 · Semarang, ID",
  duration: "6 mos",
  description: "A transformative journey of entrepreneurial discovery focused on product refinement, industrial research at PT Jordan Plastics, and high-stakes pitching for 'Fontainest' at a prestigious investor summit.",
  diffHeader: "diff --git a/ideation b/investor-ready",
  additions: [
    "Developed 'Fontainest', a unique and refined bird's nest beverage brand",
    "Gained industrial inspiration and insights through visits to PT Jordan Plastics",
    "Successfully navigated investor engagement and professional networking",
    "Delivered a high-impact pitch at the prestigious Investor Summit",
    "Mastered public speaking and the art of compelling storytelling"
  ],
  removals: [
    "Eliminated public speaking nerves and communication barriers",
    "Transitioned from theoretical concepts to a market-ready product"
  ],
},
  
];

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
    role: "Full Stack Engineer (L4)",
    isCurrent: false,
    hash: "a8c57b9",
    company: "DataStream Inc.",
    period: "Jun 2019 · Dec 2021 · New York, NY",
    description:
      "Developed and maintained real-time data visualization dashboards for fintech clients. Specialized in React performance optimization and socket-based communications.",
    diffHeader: "diff --git a/tech-stack b/capabilities",
    additions: [
      "Adopted TypeScript across all frontend repositories",
      "Scaled Kubernetes clusters to 200+ nodes",
    ],
    removals: ["Refactored untyped Redux boilerplate"],
  },
  {
    role: "Junior Software Developer",
    isCurrent: false,
    hash: "d1f4e77",
    company: "Startup Launchpad",
    period: "May 2017 · May 2019 · Austin, TX",
    description: "",
    diffHeader: "diff --git a/learning b/contributions",
    additions: [
      "First 100 pull requests merged to production",
      "Built internal UI component library",
    ],
    removals: [],
  },
];

/* ── Repository Data ── */

export interface Repo {
  name: string;
  desc: string;
  lang: string;
  langColor: string;
  stars: string;
  forks: string;
}

export const techStack = [
  "Swift / SwiftUI",
  "Rust",
  "PostgreSQL",
  "Docker",
  "Kubernetes",
  "SwiftData",
];

export const activityLevels = [
  0, 1, 2, 0, 3, 1, 4, 2, 0, 1, 3, 4, 2, 0, 1, 0, 2, 3, 1, 4, 0, 2, 3, 1, 0,
  4, 2, 1, 3, 0, 2, 1, 4, 3, 0, 1, 2, 0, 3, 4, 1, 2,
];

export const repos: Record<string, Repo[]> = {
  app: [
    { name: "neuro-fitness-ios", desc: "A high-performance iOS application utilizing CoreML for real-time...", lang: "Swift", langColor: "#F05138", stars: "1.2k", forks: "248" },
    { name: "jetpack-delivery-hub", desc: "Multi-modular Android application built with Jetpack Compose, Hilt,...", lang: "Kotlin", langColor: "#A97BFF", stars: "856", forks: "112" },
    { name: "crypt-wallet-native", desc: "React Native crypto wallet implementation with biometrics and...", lang: "TypeScript", langColor: "#3178C6", stars: "2.4k", forks: "530" },
    { name: "flutter-ai-assistant", desc: "A cross-platform AI chat assistant built with Flutter, focusing on...", lang: "Dart", langColor: "#00B4AB", stars: "1.8k", forks: "340" },
  ],
  web: [
    { name: "next-dashboard-pro", desc: "Full-stack analytics dashboard with real-time data visualization...", lang: "TypeScript", langColor: "#3178C6", stars: "3.1k", forks: "420" },
    { name: "rust-api-gateway", desc: "High-performance API gateway built with Actix-web and Redis...", lang: "Rust", langColor: "#DEA584", stars: "1.5k", forks: "195" },
    { name: "graphql-federation", desc: "Federated GraphQL microservices architecture with Apollo...", lang: "TypeScript", langColor: "#3178C6", stars: "980", forks: "145" },
    { name: "svelte-portfolio-kit", desc: "Open-source portfolio template built with SvelteKit and...", lang: "Svelte", langColor: "#FF3E00", stars: "2.7k", forks: "610" },
  ],
  product: [
    { name: "aksara-jawa-app", desc: "Gamified Javanese script learning app with spaced repetition...", lang: "Swift", langColor: "#F05138", stars: "890", forks: "76" },
    { name: "myvault-manager", desc: "Secure personal vault with biometric auth and SwiftData...", lang: "Swift", langColor: "#F05138", stars: "1.1k", forks: "130" },
    { name: "devlog-cli", desc: "Command-line tool for maintaining developer journals with...", lang: "Rust", langColor: "#DEA584", stars: "560", forks: "42" },
    { name: "sprint-retro-board", desc: "Real-time collaborative retrospective board for agile teams...", lang: "TypeScript", langColor: "#3178C6", stars: "740", forks: "98" },
  ],
};

export const categoryTitles: Record<string, string> = {
  app: "Mobile Architectures",
  web: "Web Engineering",
  product: "Product Development",
};

/* ── Repository Data ── */

export interface Repo {
  name: string;
  desc: string;
  lang: string;
  langColor: string;
  stars: string;
  forks: string;
  /* Detail fields (shown on click) */
  image?: string;
  readme?: string;
  repoUrl?: string;
  liveUrl?: string;
  topics?: string[];
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
    {
      name: "neuro-fitness-ios",
      desc: "A high-performance iOS application utilizing CoreML for real-time fitness tracking and exercise form analysis.",
      lang: "Swift",
      langColor: "#F05138",
      stars: "1.2k",
      forks: "248",
      image: "/images/myvaultlogo.png",
      readme: "### Overview\nNeuro Fitness leverages CoreML and Vision frameworks to provide real-time exercise form analysis. The app uses pose estimation to detect body landmarks and provides instant feedback on workout posture.\n\n### Key Features\n- Real-time pose estimation using Vision framework\n- Custom CoreML models trained on 50k+ exercise samples\n- Haptic feedback system for form corrections\n- HealthKit integration for comprehensive tracking\n- Offline-first architecture with CloudKit sync",
      repoUrl: "https://github.com/dimasdaffa/neuro-fitness-ios",
      topics: ["ios", "coreml", "swiftui", "healthkit", "vision"],
    },
    {
      name: "jetpack-delivery-hub",
      desc: "Multi-modular Android application built with Jetpack Compose, Hilt, and clean architecture for last-mile delivery logistics.",
      lang: "Kotlin",
      langColor: "#A97BFF",
      stars: "856",
      forks: "112",
      image: "/projects/jetpack-delivery.png",
      readme: "### Overview\nA modular delivery management system built with modern Android architecture. Features real-time order tracking, route optimization, and driver management.\n\n### Key Features\n- Multi-module Gradle setup with convention plugins\n- Jetpack Compose UI with Material3 theming\n- Hilt dependency injection across modules\n- Room database with Flow-based reactive queries\n- Google Maps SDK with custom route rendering",
      repoUrl: "https://github.com/dimasdaffa/jetpack-delivery-hub",
      topics: ["android", "kotlin", "jetpack-compose", "hilt", "clean-architecture"],
    },
    {
      name: "crypt-wallet-native",
      desc: "React Native crypto wallet implementation with biometrics, multi-chain support, and hardware wallet integration.",
      lang: "TypeScript",
      langColor: "#3178C6",
      stars: "2.4k",
      forks: "530",
      image: "/projects/crypt-wallet.png",
      readme: "### Overview\nA secure, cross-platform cryptocurrency wallet built with React Native. Supports Ethereum, Solana, and Bitcoin networks with hardware wallet pairing.\n\n### Key Features\n- Multi-chain wallet (ETH, SOL, BTC)\n- Biometric authentication (Face ID / Touch ID)\n- WalletConnect v2 integration for dApp interactions\n- Hardware wallet pairing (Ledger, Trezor)\n- End-to-end encrypted cloud backup",
      repoUrl: "https://github.com/dimasdaffa/crypt-wallet-native",
      topics: ["react-native", "typescript", "web3", "crypto", "biometrics"],
    },
    {
      name: "flutter-ai-assistant",
      desc: "A cross-platform AI chat assistant built with Flutter, focusing on local LLM inference and privacy-first architecture.",
      lang: "Dart",
      langColor: "#00B4AB",
      stars: "1.8k",
      forks: "340",
      image: "/projects/flutter-ai.png",
      readme: "### Overview\nAn AI-powered chat assistant that runs language models locally on-device. Built with Flutter for cross-platform support with a focus on user privacy.\n\n### Key Features\n- On-device LLM inference using GGML/llama.cpp\n- Streaming token generation with isolate-based processing\n- Conversation history with SQLite persistence\n- Custom prompt templates and system instructions\n- Export conversations as Markdown",
      repoUrl: "https://github.com/dimasdaffa/flutter-ai-assistant",
      topics: ["flutter", "dart", "llm", "ai", "privacy"],
    },
  ],
  web: [
    {
      name: "next-dashboard-pro",
      desc: "Full-stack analytics dashboard with real-time data visualization, role-based access control, and multi-tenant support.",
      lang: "TypeScript",
      langColor: "#3178C6",
      stars: "3.1k",
      forks: "420",
      image: "/projects/next-dashboard.png",
      readme: "### Overview\nAn enterprise-grade analytics dashboard built with Next.js 14 App Router. Features real-time data streaming, interactive charts, and granular RBAC.\n\n### Key Features\n- Server Components for optimal performance\n- Real-time data via WebSocket + Server-Sent Events\n- D3.js and Recharts visualization library\n- Prisma ORM with PostgreSQL\n- Multi-tenant architecture with row-level security",
      repoUrl: "https://github.com/dimasdaffa/next-dashboard-pro",
      liveUrl: "https://dashboard-pro.vercel.app",
      topics: ["nextjs", "typescript", "prisma", "postgresql", "d3js"],
    },
    {
      name: "rust-api-gateway",
      desc: "High-performance API gateway built with Actix-web and Redis for rate limiting, request routing, and service mesh integration.",
      lang: "Rust",
      langColor: "#DEA584",
      stars: "1.5k",
      forks: "195",
      image: "/projects/rust-gateway.png",
      readme: "### Overview\nA blazing-fast API gateway written in Rust using Actix-web. Handles 100k+ requests/second with sub-millisecond latency.\n\n### Key Features\n- Token bucket rate limiting with Redis backend\n- Dynamic routing configuration via YAML\n- JWT validation and OAuth2 proxy\n- Circuit breaker pattern for downstream services\n- Prometheus metrics and Grafana dashboards",
      repoUrl: "https://github.com/dimasdaffa/rust-api-gateway",
      topics: ["rust", "actix-web", "redis", "api-gateway", "microservices"],
    },
    {
      name: "graphql-federation",
      desc: "Federated GraphQL microservices architecture with Apollo Router, subgraph composition, and distributed tracing.",
      lang: "TypeScript",
      langColor: "#3178C6",
      stars: "980",
      forks: "145",
      image: "/projects/graphql-fed.png",
      readme: "### Overview\nA production-ready GraphQL Federation v2 setup with Apollo Router. Demonstrates subgraph composition across multiple domains.\n\n### Key Features\n- Apollo Federation v2 with @key and @shareable directives\n- Apollo Router for supergraph composition\n- DataLoader pattern for N+1 query prevention\n- OpenTelemetry distributed tracing\n- Schema registry with CI/CD validation",
      repoUrl: "https://github.com/dimasdaffa/graphql-federation",
      topics: ["graphql", "apollo", "federation", "typescript", "microservices"],
    },
    {
      name: "svelte-portfolio-kit",
      desc: "Open-source portfolio template built with SvelteKit featuring MDX blog support, dark theme, and CMS integration.",
      lang: "Svelte",
      langColor: "#FF3E00",
      stars: "2.7k",
      forks: "610",
      image: "/projects/svelte-kit.png",
      readme: "### Overview\nA beautiful, performant portfolio starter kit built with SvelteKit. Features MDX-powered blog, automatic OG image generation, and headless CMS support.\n\n### Key Features\n- SvelteKit with SSG and ISR support\n- MDsveX for Markdown/Svelte hybrid content\n- Automatic OG image generation via Satori\n- Sanity CMS integration for dynamic content\n- Perfect Lighthouse scores (100/100/100/100)",
      repoUrl: "https://github.com/dimasdaffa/svelte-portfolio-kit",
      liveUrl: "https://svelte-portfolio-kit.vercel.app",
      topics: ["svelte", "sveltekit", "mdx", "portfolio", "open-source"],
    },
  ],
  ml: [
    {
      name: "vision-segmenter",
      desc: "Real-time semantic segmentation model for autonomous driving using DeepLabV3+ with custom backbone on edge devices.",
      lang: "Python",
      langColor: "#3572A5",
      stars: "1.9k",
      forks: "310",
      image: "/projects/vision-segmenter.png",
      readme: "### Overview\nA lightweight semantic segmentation pipeline optimized for edge deployment. Uses a custom MobileNetV3 backbone with DeepLabV3+ decoder for real-time inference.\n\n### Key Features\n- Custom MobileNetV3-Large backbone for efficiency\n- DeepLabV3+ decoder with ASPP module\n- TensorRT optimization for NVIDIA Jetson\n- ONNX export for cross-platform deployment\n- 30+ FPS on Jetson Xavier NX at 512x512",
      repoUrl: "https://github.com/dimasdaffa/vision-segmenter",
      topics: ["pytorch", "computer-vision", "segmentation", "edge-ai", "tensorrt"],
    },
    {
      name: "llm-finetune-kit",
      desc: "LoRA fine-tuning toolkit for open-source LLMs with dataset curation, training pipeline, and evaluation benchmarks.",
      lang: "Python",
      langColor: "#3572A5",
      stars: "3.4k",
      forks: "720",
      image: "/projects/llm-finetune.png",
      readme: "### Overview\nA comprehensive toolkit for fine-tuning large language models using LoRA and QLoRA. Supports Llama, Mistral, and Phi model families with minimal GPU requirements.\n\n### Key Features\n- LoRA / QLoRA fine-tuning with 4-bit quantization\n- Automated dataset curation from JSON/CSV/Parquet\n- Weights & Biases integration for experiment tracking\n- Multi-GPU training with DeepSpeed ZeRO-3\n- Built-in evaluation: MMLU, HellaSwag, HumanEval",
      repoUrl: "https://github.com/dimasdaffa/llm-finetune-kit",
      topics: ["llm", "lora", "fine-tuning", "transformers", "deepspeed"],
    },
    {
      name: "anomaly-detect-ts",
      desc: "Time-series anomaly detection engine using Transformer-based attention and statistical methods for IoT sensor data.",
      lang: "Python",
      langColor: "#3572A5",
      stars: "870",
      forks: "145",
      image: "/projects/anomaly-detect.png",
      readme: "### Overview\nA hybrid anomaly detection system combining Transformer attention mechanisms with classical statistical methods for industrial IoT sensor monitoring.\n\n### Key Features\n- Temporal Fusion Transformer for multi-horizon forecasting\n- Statistical baseline: Z-score, IQR, Isolation Forest\n- Streaming inference via Apache Kafka\n- Grafana dashboard for real-time alerting\n- Auto-labeling pipeline for semi-supervised learning",
      repoUrl: "https://github.com/dimasdaffa/anomaly-detect-ts",
      topics: ["time-series", "anomaly-detection", "transformer", "iot", "kafka"],
    },
    {
      name: "rec-engine-cf",
      desc: "Collaborative filtering recommendation engine with neural matrix factorization and real-time serving via gRPC.",
      lang: "Python",
      langColor: "#3572A5",
      stars: "1.2k",
      forks: "198",
      image: "/projects/rec-engine.png",
      readme: "### Overview\nA production-ready recommendation system using Neural Collaborative Filtering. Combines user/item embeddings with deep neural networks for personalized ranking.\n\n### Key Features\n- Neural Matrix Factorization (NeuMF) architecture\n- Implicit feedback training with BPR loss\n- Real-time serving via gRPC with TorchServe\n- A/B testing framework with statistical significance\n- Feature store integration with Redis",
      repoUrl: "https://github.com/dimasdaffa/rec-engine-cf",
      topics: ["recommendation", "collaborative-filtering", "pytorch", "grpc", "mlops"],
    },
  ],
  product: [
    {
      name: "aksara-jawa-app",
      desc: "Gamified Javanese script learning app with spaced repetition, stroke recognition, and cultural context modules.",
      lang: "Swift",
      langColor: "#F05138",
      stars: "890",
      forks: "76",
      image: "/projects/aksara-jawa.png",
      readme: "### Overview\nAn educational iOS app for learning Javanese script (Aksara Jawa). Uses gamification and spaced repetition to make learning engaging and effective.\n\n### Key Features\n- PencilKit-based stroke recognition for character drawing\n- Spaced repetition algorithm (SM-2) for optimal retention\n- Cultural context modules with historical references\n- Achievement system with unlockable content\n- Offline-first with iCloud sync",
      repoUrl: "https://github.com/dimasdaffa/aksara-jawa-app",
      topics: ["ios", "swift", "education", "pencilkit", "gamification"],
    },
    {
      name: "myvault-manager",
      desc: "Secure personal vault with biometric auth, SwiftData persistence, and zero-knowledge encryption architecture.",
      lang: "Swift",
      langColor: "#F05138",
      stars: "1.1k",
      forks: "130",
      image: "/projects/myvault.png",
      readme: "### Overview\nA privacy-focused personal vault app built with SwiftUI and SwiftData. All data is encrypted locally with zero-knowledge architecture.\n\n### Key Features\n- Zero-knowledge encryption (AES-256-GCM)\n- SwiftData with CloudKit encrypted sync\n- Biometric + passcode dual authentication\n- Auto-lock with configurable timeout\n- Secure document scanner with OCR",
      repoUrl: "https://github.com/dimasdaffa/myvault-manager",
      topics: ["ios", "swift", "swiftdata", "encryption", "security"],
    },
    {
      name: "devlog-cli",
      desc: "Command-line tool for maintaining developer journals with Markdown support, git integration, and analytics.",
      lang: "Rust",
      langColor: "#DEA584",
      stars: "560",
      forks: "42",
      image: "/projects/devlog-cli.png",
      readme: "### Overview\nA fast CLI tool written in Rust for maintaining structured developer journals. Integrates with git to auto-capture commit context.\n\n### Key Features\n- `devlog new` — Create today's entry from template\n- `devlog stats` — Visualize writing streaks and word counts\n- Git hook integration for auto-logging commits\n- Markdown rendering in terminal via termimad\n- Export to PDF, HTML, or static site",
      repoUrl: "https://github.com/dimasdaffa/devlog-cli",
      topics: ["rust", "cli", "developer-tools", "markdown", "git"],
    },
    {
      name: "sprint-retro-board",
      desc: "Real-time collaborative retrospective board for agile teams with voting, timers, and action item tracking.",
      lang: "TypeScript",
      langColor: "#3178C6",
      stars: "740",
      forks: "98",
      image: "/projects/retro-board.png",
      readme: "### Overview\nA real-time collaborative retrospective board for distributed agile teams. Built with Next.js and Supabase for instant sync across participants.\n\n### Key Features\n- Real-time collaboration via Supabase Realtime\n- Anonymous voting with configurable vote limits\n- Timer system for structured retrospective phases\n- Action item tracking with assignee and due dates\n- Export retrospective as PDF report",
      repoUrl: "https://github.com/dimasdaffa/sprint-retro-board",
      liveUrl: "https://retro-board.vercel.app",
      topics: ["nextjs", "typescript", "supabase", "agile", "collaboration"],
    },
  ],
};

export const categoryTitles: Record<string, string> = {
  app: "Mobile Architectures",
  web: "Web Engineering",
  ml: "Machine Learning",
  product: "Product Development",
};

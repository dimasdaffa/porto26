/* ── Repository Data ── */

export interface Repo {
  name: string;
  desc: string;
  lang: string;
  langColor: string;
  stars: string;
  forks: string;
  image?: string;
  readme?: string;
  repoUrl?: string;
  liveUrl?: string;
  topics?: string[];
}

export const techStack = [
  "Swift / SwiftUI",
  "Laravel",
  "Next.js",
  "Flutter",
  "Firebase",
  "SwiftData",
  "Postman",
  "Git",
  "Linux",
  "MySQL",
  "Docker",
];

export const activityLevels = [
  0, 1, 2, 0, 3, 1, 4, 2, 0, 1, 3, 4, 2, 0, 1, 0, 2, 3, 1, 4, 0, 2, 3, 1, 0,
  4, 2, 1, 3, 0, 2, 1, 4, 3, 0, 1, 2, 0, 3, 4, 1, 2,
];

export const repos: Record<string, Repo[]> = {
  app: [
    {
      name: "flutter-tourist-app",
      desc: "A tourist information application built with Flutter as the final output of the DOSCOM Basic Flutter Workshop 2024. Covers OOP, widgeting, state management, API integration, and Firebase.",
      lang: "Dart",
      langColor: "#00B4AB",
      stars: "32",
      forks: "18",
      image: "/projects/flutter-tourist.png",
      readme: "### Overview\nA tourist information application developed as part of the DOSCOM University Basic Flutter Workshop 2024. This project serves as the capstone deliverable, synthesizing all core topics covered in the syllabus.\n\n### Workshop Syllabus\n- Object-Oriented Programming (OOP) with Dart\n- Widgeting concepts and UI composition\n- State management patterns\n- REST API integration\n- Firebase authentication and Firestore\n\n### My Contribution\n- Designed and developed the complete workshop syllabus as a team project\n- Personally delivered the material on widgeting concepts and state management\n- Built example code and exercises for participants\n- Guided participants through building the final tourist app",
      repoUrl: "https://github.com/dimasdaffa/flutter-tourist-app",
      topics: ["flutter", "dart", "firebase", "state-management", "workshop"],
    },
  ],
  web: [
    {
      name: "synergazing",
      desc: "A student collaboration platform — a 'marketplace for talent and ideas' connecting university students across Indonesia for collaborative projects.",
      lang: "TypeScript",
      langColor: "#3178C6",
      stars: "48",
      forks: "12",
      image: "/projects/synergazing.png",
      readme: "### Overview\nSynergazing is a web platform designed as a marketplace for talent and ideas, connecting university students across Indonesia for collaborative projects. I spearheaded the development and led front-end engineering.\n\n### Key Features\n- Project marketplace for discovering and joining collaborative projects\n- Talent discovery gallery to find skilled students across universities\n- Comprehensive user profiles serving as dynamic portfolios\n- Real-time collaboration tools and project management\n- Responsive design optimized for both desktop and mobile\n\n### Tech Stack\n- Next.js with App Router for server-side rendering\n- React and TypeScript for type-safe component architecture\n- RESTful API integration for backend communication\n- Modern UI/UX with responsive layouts",
      repoUrl: "https://github.com/dimasdaffa/synergazing",
      liveUrl: "https://synergazing.vercel.app",
      topics: ["nextjs", "react", "typescript", "collaboration", "marketplace"],
    },
    {
      name: "siopal-udinus",
      desc: "Sistem Informasi Operasional Laboratorium Komputer — an integrated platform to digitize computer laboratory management, inventory, and PTPP correspondence workflows.",
      lang: "PHP",
      langColor: "#4F5D95",
      stars: "15",
      forks: "4",
      image: "/projects/siopal.png",
      readme: "### Overview\nSIOPAL (Sistem Informasi Operasional Laboratorium Komputer) is an integrated platform for Universitas Dian Nuswantoro designed to digitize and streamline computer laboratory management and asset monitoring. Currently under continuous development.\n\n### Key Features\n- Admin panel built with Laravel Filament as core functionality\n- PTPP correspondence workflow management\n- Laboratory inventory tracking and asset management\n- General laboratory information dashboard\n- Employee data management system\n\n### System Design\n- UML documentation: Use Case, Class Diagram, Activity Diagram, Sequence Diagram\n- Structured development following clean architecture principles\n- Optimized SQL queries for performance and reporting\n- Secure authentication for administrative access",
      repoUrl: "https://github.com/dimasdaffa/siopal-udinus",
      topics: ["laravel", "filament", "php", "mysql", "admin-panel"],
    },
    {
      name: "branapparel-cms",
      desc: "Company profile website & CMS for Bran Apparel — a custom clothing business with content management and basic SEO optimization.",
      lang: "PHP",
      langColor: "#4F5D95",
      stars: "8",
      forks: "2",
      image: "/projects/branapparel.png",
      readme: "### Overview\nA company profile website developed for Bran Apparel (@branapparell), a custom clothing business. Built with the Laravel framework featuring a full Content Management System for independent content management.\n\n### Key Features\n- Dynamic company profile with product showcase\n- Content Management System (CMS) for easy content updates by the business owner\n- Product catalog with category filtering\n- Basic SEO optimization for improved search engine visibility\n- Responsive design for mobile and desktop\n\n### Tech Stack\n- Laravel framework for backend and templating\n- MySQL database for content persistence\n- Blade templating engine for server-rendered views\n- SEO meta tags and structured data implementation",
      repoUrl: "https://github.com/dimasdaffa/branapparel-cms",
      liveUrl: "https://branapparel.com",
      topics: ["laravel", "php", "cms", "seo", "company-profile"],
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
      name: "flutter-workshop-doscom-2024",
      desc: "Development of the syllabus & mentoring for the 'Basic Flutter Workshop' at DOSCOM University 2024 — covering OOP, widgeting, state management, API integration, and Firebase.",
      lang: "Dart",
      langColor: "#00B4AB",
      stars: "24",
      forks: "15",
      image: "/projects/flutter-workshop.png",
      readme: "### Overview\nA comprehensive syllabus and workshop curriculum developed as a team project for the DOSCOM (Dinus Open Source Community) University Basic Flutter Workshop 2024. As a mentor, I contributed to designing the full learning path and personally delivered key sessions.\n\n### Syllabus Structure\n- **Week 1** — Object-Oriented Programming (OOP) with Dart\n- **Week 2** — Widgeting concepts and UI composition\n- **Week 3** — State management patterns\n- **Week 4** — REST API integration\n- **Week 5** — Firebase authentication and Firestore\n\n### Final Project\nParticipants build a complete tourist information application as the capstone deliverable, synthesizing all topics covered.\n\n### My Contribution\n- Co-designed the complete workshop syllabus as a team project\n- Personally delivered the material on widgeting concepts and state management\n- Built example code, exercises, and hands-on demos for participants\n- Guided and mentored participants through building the final tourist app",
      repoUrl: "https://github.com/dimasdaffa/flutter-workshop-doscom-2024",
      topics: ["flutter", "dart", "workshop", "education", "mentoring"],
    },
  ],
};

export const categoryTitles: Record<string, string> = {
  app: "Mobile Architectures",
  web: "Web Engineering",
  ml: "Machine Learning",
  product: "Product Development",
};

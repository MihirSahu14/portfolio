export type NavItem = {
  href: string;
  label: string;
};

export type ExternalLink = {
  label: string;
  href: string;
  value: string;
};

export type FeatureCard = {
  title: string;
  subtitle: string;
  description: string;
  href?: string;
  code?: string;
};

export type TimelineItem = {
  title: string;
  org: string;
  location: string;
  period: string;
  bullets: string[];
};

export const navItems: NavItem[] = [
  { href: "/#experience", label: "Experience" },
  { href: "/#projects", label: "Projects" },
  { href: "/#games", label: "Games" },
  { href: "/#skills", label: "Skills" },
];

export const resumeLink: ExternalLink = {
  label: "Resume",
  href: "/resume",
  value: "Preview PDF",
};

export const socialLinks: ExternalLink[] = [
  {
    label: "Email",
    href: "mailto:mihirs1410@gmail.com",
    value: "mihirs1410@gmail.com",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/msahu14",
    value: "linkedin.com/in/msahu14",
  },
  {
    label: "GitHub",
    href: "https://github.com/MihirSahu14",
    value: "github.com/MihirSahu14",
  },
  resumeLink,
];

export const featuredProjects: FeatureCard[] = [
  {
    title: "Intern",
    subtitle: "Next.js, TypeScript, Convex, MCP, Gemini API, OAuth",
    description:
      "Shared memory layer for AI agents, exposed as an MCP server. Append-only event log with idempotent capture; agents draft email and Slack actions for human approval, and edits become preference facts the next agent retrieves, so behaviour improves without retraining.",
    href: "https://intern-brain.vercel.app",
    code: "https://github.com/MihirSahu14/intern",
  },
  {
    title: "GameGold",
    subtitle: "Next.js, FastAPI, ReactFlow, Claude API, MongoDB, Unity MCP",
    description:
      "AI game design platform that takes a game from concept to ship in 7 stages: GDD generation with Claude, balance analysis with exploit detection, asset generation, Unity integration via an in-Editor MCP server, and AI playtesting across 4 personas.",
    href: "https://gamegold.vercel.app/",
    code: "https://github.com/MihirSahu14/GameGold",
  },
  {
    title: "CryptoDash",
    subtitle: "React, FastAPI, CoinGecko API",
    description:
      "A full-stack cryptocurrency dashboard with live market tracking, interactive candlestick charts, crypto news, wallet-based portfolio analysis, and AI-style insight features.",
    href: "https://cryptodash-eta.vercel.app/",
    code: "https://github.com/MihirSahu14/CryptoDash",
  },
  {
    title: "NOMinate",
    code: "https://github.com/MihirSahu14/NOMinate",
    subtitle: "Flask, OpenAI API, MongoDB",
    description:
      "A recommendation system for meals that adapts to user feedback, balances dietary constraints, and supports both takeout and home-cooking decisions.",
  },
  {
    title: "Fraud Detection Capstone",
    code: "https://github.com/MihirSahu14/CapitalOneCapstone",
    subtitle: "AWS Lambda, API Gateway, DynamoDB, Twilio",
    description:
      "An event-driven fraud scoring pipeline that evaluates transactions in real time and loops customer feedback back into the risk system.",
  },
  {
    title: "Ultrasound Guidance System",
    subtitle: "OpenCV, MediaPipe, OCR",
    description:
      "A real-time perception system that helps non-experts reproduce expert scanning behavior with more consistency and less operator error.",
  },
];

export const featuredGames: FeatureCard[] = [
  {
    title: "Veil",
    subtitle: "Unity, C#, 2D Horror",
    description:
      "A horror game focused on atmosphere, progression, enemy behaviors, and modular systems that could expand without collapsing under their own weight.",
    href: "https://aeryno.itch.io/veil",
    code: "https://github.com/MihirSahu14/Veil",
  },
  {
    title: "Community Cook",
    code: "https://github.com/MihirSahu14/CommunityCookGame",
    subtitle: "GameMaker Studio, GML, Pixel Art",
    description:
      "A pixel-art management sim about feeding a struggling town with limited ingredients, recurring NPCs, and a mechanics-driven nutrition scoring loop.",
  },
  {
    title: "UW Game Lab Research",
    subtitle: "Analog + Digital Prototypes",
    description:
      "Short-form games exploring recommendation algorithms, echo chambers, and algorithmic bias through play, iteration, and weekly playtests.",
  },
  {
    title: "Coursework Prototypes",
    subtitle: "Rapid design and technical iteration",
    description:
      "A set of quick prototypes, including an endless runner, used to explore player agency, balancing, and tighter feedback loops.",
  },
];

export const experienceItems: TimelineItem[] = [
  {
    title: "Software Engineer Intern (Capstone)",
    org: "Capital One",
    location: "Madison, WI",
    period: "Feb 2026 - May 2026",
    bullets: [
      "Architected a serverless fraud detection system on AWS for real-time transaction scoring and alerts.",
      "Implemented asynchronous processing and per-account thresholds for faster fraud decisions.",
      "Built a Twilio-based feedback loop to update fraud flags and accelerate responses.",
    ],
  },
  {
    title: "Research Assistant",
    org: "The UW Game Lab",
    location: "Madison, WI",
    period: "Jan 2026 - May 2026",
    bullets: [
      "Prototyped analog and digital games around algorithm literacy, echo chambers, and bias.",
      "Ran weekly playtests and design iterations with an interdisciplinary team.",
      "Contributed to submissions accepted at IDC and Play Make Learn 2026.",
    ],
  },
  {
    title: "Research Assistant | AI Department",
    org: "Sprocket Lab",
    location: "Madison, WI",
    period: "Sep 2025 - May 2026",
    bullets: [
      "Built a multi-level RL environment in IsaacGym for quadcopter navigation and obstacle avoidance.",
      "Integrated VLM-based control and hierarchical learning pipelines.",
      "Automated multi-trial evaluation and visualization across 100+ randomized episodes.",
    ],
  },
  {
    title: "Software Engineer Intern",
    org: "AIMitari MedTech Pte Ltd",
    location: "Singapore",
    period: "Jun 2025 - Feb 2026",
    bullets: [
      "Developed an AI-assisted ultrasound guidance system for clinician-style scan replication.",
      "Built a single-camera perception pipeline with OpenCV, MediaPipe, and OCR.",
      "Improved repeatability by constraining probe movement algorithmically.",
    ],
  },
  {
    title: "Software Engineer Intern",
    org: "AIRO Digital Labs",
    location: "Gurgaon, India",
    period: "May 2024 - Jul 2024",
    bullets: [
      "Built a generative AI platform for sales pitches, decks, and short videos.",
      "Deployed the application on AWS EC2 and S3 for scalable multi-user access.",
      "Developed RAG chatbots to improve answer quality and automate routine queries.",
    ],
  },
];

export const skills = {
  engineering: [
    "Java",
    "Python",
    "C/C++",
    "JavaScript",
    "TypeScript",
    "SQL",
    "React",
    "Next.js",
    "FastAPI",
    "Flask",
    "AWS",
    "MongoDB",
  ],
  gameDev: [
    "Unity",
    "GameMaker",
    "Godot",
    "C#",
    "Pixel Art Pipelines",
    "UI/UX Design",
    "Playtesting",
    "Technical Design",
  ],
  ai: [
    "LLM Agents",
    "MCP",
    "Evals",
    "Anthropic API",
    "Gemini API",
    "OpenAI API",
    "RAG",
    "Reinforcement Learning",
    "PyTorch",
    "OpenCV",
    "MediaPipe",
    "Data Visualization",
  ],
};

// GitHub mark (16x16 viewBox), used in the hero and on project Code buttons
export const githubPath =
  "M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z";

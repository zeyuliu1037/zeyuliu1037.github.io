import type {
  HeroData,
  SkillsData,
  AboutData,
  ContactEntry,
  ProjectCategory,
} from "./types";

// Re-export types so existing imports keep working.
export type { ContactEntry, Project, ProjectCategory } from "./types";

// ─── Hero ────────────────────────────────────────────────────
export const heroData: HeroData = {
  greeting: "Hi, I am Zeyu Liu",
  titles: ["EE PhD Student", "University of Southern California"],
};

// ─── Skills ──────────────────────────────────────────────────
export const skillsData: SkillsData = {
  skills: "Gemini, Claude, ChatGPT, DeepSeek, Qwen",
  highlights: ["Gemini, Qwen"],
};

// ─── About ───────────────────────────────────────────────────
export const aboutData: AboutData = {
  image: "/chatgpt.png",
  imageAlt: " Character Illustration",
  text: `I am a third-year PhD student at EESSC lab in the Viterbi School of Engineering of the University of Southern California advised by Prof. Peter Beerel. My research interests lie in the field of Efficient Artificial Intelligence Systems. Currently, my recent works involve efficient fine-tuning & inference and subquadratic attention architectures.`,
};

// ─── Contact ─────────────────────────────────────────────────
export const contactData: ContactEntry[] = [
  {
    type: "Email",
    value: "liuzeyu@usc.edu",
    href: "mailto:liuzeyu@usc.edu",
  },
  {
    type: "LinkedIn",
    value: "LinkedIn",
    href: "https://www.linkedin.com/in/zeyu-liu-364982220/",
  },
  {
    type: "Google Scholar",
    value: "Google Scholar",
    href: "https://scholar.google.com/citations?user=Gk5kyEEAAAAJ&hl",
  },
];

// ─── Work / Projects ─────────────────────────────────────────
export const projectCategories: ProjectCategory[] = [
  {
    category: "Past Work",
    projects: [
      {
        title: "SGDKV: Summarization Guided KV Cache Compression",
        image: "/projects/amazon.png",
        duration: ["Applied Scientist Intern", "May 2025 - Aug 2025"],
        href: "https://neurips.cc/virtual/2025/loc/san-diego/126627",
      },
      {
        title: "LAWCAT: Efficient Distillation from Quadratic to Linear Attention with Convolution across Tokens for Long Context Modeling",
        image: "/projects/lawcat.png",
        duration: ["Amazon ML Fellow", "Aug 2024 - May 2025"],
        href: "https://github.com/zeyuliu1037/LAWCAT",
      },
      {
        title: "AFLoRA: Adaptive Freezing of Low Rank Adaptation in Parameter Efficient Fine-Tuning of Large Models",
        image: "/projects/aflora.png",
        duration: ["Research Assistant"],
        href: "https://github.com/zeyuliu1037/AFLoRA",
      },
      {
        title: "LMUFormer: Low Complexity Yet Powerful Spiking Model With Legendre Memory Units",
        image: "/projects/lmuformer.png",
        duration: ["Research Assistant"],
        href: "https://github.com/zeyuliu1037/LMUFormer",
      },
    ],
  },
];

export type Locale = "en" | "zh";

export type Project = {
  slug: string;
  featured: boolean;
  category: string;
  stack: string[];
  year: string;
  demoUrl?: string;
  githubUrl?: string;
  en: ProjectCopy;
  zh: ProjectCopy;
};

type ProjectCopy = {
  title: string;
  summary: string;
  problem: string;
  role: string;
  architecture: string;
  decisions: string[];
  results: string[];
  lessons: string;
};

export type Experience = {
  company: string;
  role: string;
  location: string;
  period: string;
  stack: string[];
  en: string[];
  zh: string[];
};

export const profile = {
  name: "Lee Zi Zuo",
  displayName: "Zi Zuo Lee",
  location: "Shanghai / Singapore",
  email: "zizuolee@gmail.com",
  github: "https://github.com/ZiZuoLee",
  linkedin: "https://www.linkedin.com/in/zizuolee/",
  resumeEn: "/resume/lee-zi-zuo-resume.pdf",
  resumeZh: "/resume/lee-zi-zuo-resume-zh.pdf",
  headline:
    "Fudan CS student building AI systems, full-stack products, trading infrastructure, and C++ quant engineering tools.",
  headlineZh:
    "复旦计算机本科生，关注 AI systems、全栈产品、交易基础设施与 C++ 量化工程。",
};

export const skills = [
  "AI Agents",
  "LLM Evaluation",
  "Retrieval Systems",
  "React / Next.js",
  "TypeScript",
  "Node.js",
  "Python",
  "C++",
  "Trading Systems",
  "Quant Engineering",
  "System Design",
  "Product Engineering",
];

export const projects: Project[] = [
  {
    slug: "ai-director-agent",
    featured: true,
    category: "AI Agents",
    stack: ["LLM", "Agent Workflow", "Evaluation", "TypeScript"],
    year: "2026",
    en: {
      title: "AI Director Agent",
      summary:
        "An agent-style system for planning, coordinating, and reviewing multi-step creative or operational workflows.",
      problem:
        "Complex AI workflows often fail because they lack persistent planning, clear intermediate review, and measurable output quality.",
      role:
        "Designed the product workflow, decomposed the agent responsibilities, and shaped the evaluation criteria for output reliability.",
      architecture:
        "The system separates planning, execution, memory, and review stages so each step can be inspected, retried, and improved independently.",
      decisions: [
        "Kept the agent workflow explicit instead of hiding all logic behind a single prompt.",
        "Designed intermediate checkpoints to make failures easier to debug.",
        "Prioritized evaluation and reproducibility over adding more surface-level features.",
      ],
      results: [
        "Created a portfolio-ready AI systems case study with clear architecture and failure analysis.",
        "Established a reusable structure for future agent projects.",
      ],
      lessons:
        "A useful agent product is less about one clever prompt and more about state, evaluation, feedback loops, and reliable product boundaries.",
    },
    zh: {
      title: "AI Director Agent",
      summary: "用于规划、协调和复盘多步骤创作/运营流程的 Agent 系统。",
      problem:
        "复杂 AI 工作流经常因为缺少持续规划、中间检查和可量化评估而变得不稳定。",
      role:
        "负责产品流程设计、Agent 职责拆分，以及输出可靠性的评估标准设计。",
      architecture:
        "系统将规划、执行、记忆和复盘拆分为独立阶段，让每一步都可以检查、重试和优化。",
      decisions: [
        "保留显式 Agent 工作流，而不是把所有逻辑藏在单个 prompt 里。",
        "设计中间 checkpoint，方便定位失败原因。",
        "优先补充评估与可复现性，而不是堆叠表面功能。",
      ],
      results: [
        "形成一个可展示的 AI systems 项目案例，包含架构和失败分析。",
        "沉淀出可复用的 Agent 项目结构。",
      ],
      lessons:
        "可靠的 Agent 产品不只是 prompt，而是状态管理、评估、反馈循环和清晰产品边界的组合。",
    },
  },
  {
    slug: "llm-agent-memory-system",
    featured: true,
    category: "AI Systems",
    stack: ["LLM", "Memory", "Retrieval", "Python"],
    year: "2025",
    en: {
      title: "LLM Agent Memory System",
      summary:
        "A memory layer for agent applications that organizes context, retrieval, and long-running task state.",
      problem:
        "LLM agents lose context across sessions and become unreliable when task history is stored as unstructured conversation text.",
      role:
        "Explored the memory design, retrieval strategy, and how memory should influence future agent decisions.",
      architecture:
        "Memory is represented as structured records with retrieval hooks, allowing the agent to fetch relevant past context instead of replaying entire conversations.",
      decisions: [
        "Separated short-term task context from longer-term user or project memory.",
        "Used retrieval as a controllable tool rather than injecting all historical context.",
        "Designed the system around debuggability, not just response quality.",
      ],
      results: [
        "Built a stronger technical story around AI infrastructure instead of only LLM application UI.",
        "Identified concrete next steps: baseline comparison, retrieval metrics, and ablation testing.",
      ],
      lessons:
        "Memory quality depends on schema, retrieval policy, and evaluation. Storing more text is not the same as remembering better.",
    },
    zh: {
      title: "LLM Agent Memory System",
      summary: "面向 Agent 应用的记忆层，管理上下文、检索和长任务状态。",
      problem:
        "LLM Agent 在跨会话任务中容易丢失上下文，单纯保存聊天记录会让系统难以复用和调试。",
      role: "探索记忆结构、检索策略，以及记忆如何影响 Agent 后续决策。",
      architecture:
        "将记忆设计为结构化记录，并通过检索接口按需获取相关上下文，而不是把全部历史塞进 prompt。",
      decisions: [
        "区分短期任务上下文和长期用户/项目记忆。",
        "把检索作为可控工具，而不是无差别注入历史内容。",
        "围绕可调试性设计，而不只追求单次回答效果。",
      ],
      results: [
        "把个人项目叙事从 LLM 应用界面提升到 AI infrastructure。",
        "明确下一步改进：baseline、检索指标和消融实验。",
      ],
      lessons:
        "记忆质量取决于 schema、检索策略和评估体系。保存更多文本不等于记得更好。",
    },
  },
  {
    slug: "resume-automation-platform",
    featured: true,
    category: "Full-stack AI",
    stack: ["React", "Node.js", "LLM", "Automation"],
    year: "2025",
    en: {
      title: "AI Resume Automation Platform",
      summary:
        "Full-stack AI tooling for resume analysis, workflow automation, and candidate-facing product experiences.",
      problem:
        "Recruiting workflows contain repetitive screening, document interpretation, and feedback tasks that are slow to execute manually.",
      role:
        "Worked across product engineering, full-stack implementation, and AI-assisted workflow features during the AnyHelper internship.",
      architecture:
        "The product connects frontend interfaces, backend APIs, automation logic, and LLM-assisted analysis into a user-facing workflow.",
      decisions: [
        "Designed user-facing flows around practical recruiter tasks instead of isolated AI demos.",
        "Kept AI outputs reviewable so users can verify and correct generated results.",
        "Balanced product speed with maintainable full-stack implementation.",
      ],
      results: [
        "Gained production-oriented AI product experience.",
        "Built evidence for AI engineering, product judgment, and full-stack execution.",
      ],
      lessons:
        "AI product value comes from fitting model behavior into real workflows, not from adding model calls everywhere.",
    },
    zh: {
      title: "AI 简历自动化平台",
      summary: "围绕简历分析、流程自动化和候选人产品体验构建的全栈 AI 工具。",
      problem:
        "招聘流程中存在大量重复筛选、文档理解和反馈任务，人工处理效率低。",
      role:
        "在 AnyHelper 实习期间参与产品工程、全栈实现和 AI 辅助流程功能。",
      architecture:
        "系统连接前端交互、后端 API、自动化逻辑和 LLM 分析能力，形成面向用户的完整工作流。",
      decisions: [
        "围绕真实招聘任务设计流程，而不是做孤立的 AI demo。",
        "让 AI 输出保持可检查，方便用户验证和修正。",
        "在产品迭代速度和工程可维护性之间做平衡。",
      ],
      results: [
        "获得生产导向的 AI 产品工程经验。",
        "证明了 AI engineering、产品判断和全栈执行能力。",
      ],
      lessons:
        "AI 产品价值来自模型能力与真实工作流的结合，而不是在所有地方加入模型调用。",
    },
  },
  {
    slug: "trading-systems-frontend",
    featured: false,
    category: "Trading Systems",
    stack: ["React", "TypeScript", "Web3", "Trading UI"],
    year: "2025",
    en: {
      title: "Trading Systems Frontend",
      summary:
        "Trading-oriented frontend work focused on responsive interfaces, reliability, and product clarity.",
      problem:
        "Trading interfaces need to present dense, fast-changing information while staying understandable and reliable.",
      role:
        "Contributed frontend engineering work in a trading product environment with strong attention to user flow and state handling.",
      architecture:
        "The interface layer connects product state, market/trading data, reusable components, and responsive UI states.",
      decisions: [
        "Focused on clear component boundaries for complex UI states.",
        "Prioritized predictable user interactions over decorative UI.",
        "Kept responsive behavior explicit for different screen sizes.",
      ],
      results: [
        "Strengthened frontend engineering experience in a high-precision product domain.",
        "Connected product engineering work with later quant/trading infrastructure interests.",
      ],
      lessons:
        "In trading products, frontend quality is part of system reliability because UI ambiguity can directly affect user decisions.",
    },
    zh: {
      title: "交易系统前端",
      summary: "面向交易场景的前端工程，关注响应式界面、可靠性和产品清晰度。",
      problem:
        "交易界面需要展示密集且快速变化的信息，同时保持可理解和可靠。",
      role: "在交易产品环境中参与前端工程，重点关注用户流程和状态处理。",
      architecture:
        "界面层连接产品状态、市场/交易数据、可复用组件和响应式 UI 状态。",
      decisions: [
        "为复杂 UI 状态设计清晰组件边界。",
        "优先保证交互可预测，而不是堆叠装饰性视觉。",
        "明确处理不同屏幕尺寸下的响应式行为。",
      ],
      results: [
        "强化了高精度产品场景下的前端工程经验。",
        "把产品工程经历与后续量化/交易基础设施兴趣连接起来。",
      ],
      lessons:
        "交易产品中，前端质量本身就是系统可靠性的一部分，因为 UI 歧义会直接影响用户决策。",
    },
  },
];

export const experiences: Experience[] = [
  {
    company: "Jiyou Fund",
    role: "Quant Developer Intern · C++",
    location: "Shanghai",
    period: "2026",
    stack: ["C++", "Quant Engineering", "Trading Infrastructure"],
    en: [
      "Working on C++-oriented quant development tasks across trading and infrastructure workflows.",
      "Building a stronger bridge between systems programming, financial markets, and data-driven engineering.",
    ],
    zh: [
      "参与 C++ 量化开发相关工作，覆盖交易与基础设施工程场景。",
      "将系统编程、金融市场和数据驱动工程能力连接起来。",
    ],
  },
  {
    company: "ByteDance",
    role: "DOU+ Frontend / Full-stack Intern",
    location: "Shanghai",
    period: "2026",
    stack: ["React", "TypeScript", "Frontend Systems"],
    en: [
      "Contributed to product-facing engineering work in a large-scale internet product environment.",
      "Practiced component design, product iteration, and reliable frontend delivery.",
    ],
    zh: [
      "在大规模互联网产品环境中参与面向产品的工程开发。",
      "实践组件设计、产品迭代和可靠前端交付。",
    ],
  },
  {
    company: "Bybit",
    role: "Trading Frontend Intern",
    location: "Remote / Asia",
    period: "2025 - 2026",
    stack: ["React", "TypeScript", "Trading UI", "Web3"],
    en: [
      "Worked on trading-oriented frontend interfaces where clarity, state management, and reliability matter.",
      "Developed stronger product instincts for financial and high-frequency decision environments.",
    ],
    zh: [
      "参与交易场景前端界面开发，关注清晰度、状态管理和可靠性。",
      "建立对金融和高频决策产品环境的工程判断。",
    ],
  },
  {
    company: "AnyHelper",
    role: "AI Full-stack Intern",
    location: "Shanghai",
    period: "2025",
    stack: ["LLM", "React", "Node.js", "Automation"],
    en: [
      "Built AI-assisted product workflows around resume analysis, automation, and candidate-facing experiences.",
      "Worked across frontend, backend, and AI integration instead of limiting contributions to a single layer.",
    ],
    zh: [
      "围绕简历分析、自动化和候选人体验构建 AI 辅助产品流程。",
      "横跨前端、后端和 AI 集成，不局限于单一工程层。",
    ],
  },
];

export function localize(project: Project, locale: Locale) {
  return project[locale];
}

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export type Locale = "en" | "zh";

export type LocalizedText = {
  en: string;
  zh: string;
};

export type LocalizedList = {
  en: string[];
  zh: string[];
};

export type ProjectMetric = {
  value: string;
  label: LocalizedText;
  note?: LocalizedText;
};

export type ProjectExperiment = {
  title: LocalizedText;
  description: LocalizedText;
  columns: LocalizedText[];
  rows: Array<[string, string, string]>;
  note: LocalizedText;
};

export type ProjectLink = {
  label: LocalizedText;
  href: string;
};

export type ProjectCopy = {
  title: string;
  summary: string;
  problem: string;
  role: string;
  architecture: string;
  decisions: string[];
  results: string[];
  lessons: string;
};

export type Project = {
  slug: string;
  featured: boolean;
  category: string;
  stack: string[];
  year: string;
  status: LocalizedText;
  ownership: LocalizedText;
  evidenceSource: LocalizedText;
  impact: LocalizedList;
  highlights: LocalizedList;
  flow?: LocalizedList;
  metrics?: ProjectMetric[];
  experiment?: ProjectExperiment;
  links?: ProjectLink[];
  en: ProjectCopy;
  zh: ProjectCopy;
};

export type Experience = {
  company: string;
  role: LocalizedText;
  location: string;
  period: string;
  stack: string[];
  en: string[];
  zh: string[];
};

export type AcademicProfile = {
  education: {
    school: LocalizedText;
    degree: LocalizedText;
    graduation: LocalizedText;
    location: LocalizedText;
  };
  researchInterests: Array<{
    title: LocalizedText;
    description: LocalizedText;
  }>;
  coursework: Array<{
    title: LocalizedText;
    courses: LocalizedList;
  }>;
  language: {
    title: LocalizedText;
    description: LocalizedText;
  };
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
  avatar: "/profile/avatar.png",
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL ?? "https://zizuolee.com",
  headline: {
    en: "Fudan CS student building AI systems, full-stack products, trading infrastructure, and C++ quant engineering tools.",
    zh: "复旦计算机本科生，关注 AI 系统、全栈产品、交易基础设施与 C++ 量化工程。",
  } satisfies LocalizedText,
};

export const academicProfile: AcademicProfile = {
  education: {
    school: { en: "Fudan University", zh: "复旦大学" },
    degree: {
      en: "B.Sc. in Computer Science and Technology",
      zh: "计算机科学与技术本科",
    },
    graduation: { en: "Expected July 2027", zh: "预计 2027 年 7 月毕业" },
    location: { en: "Shanghai, China", zh: "中国上海" },
  },
  researchInterests: [
    {
      title: { en: "Agent Systems", zh: "智能体系统" },
      description: {
        en: "Inspectable planning, tool use, evaluation loops, and dependable multi-step execution.",
        zh: "关注可检查的规划、工具使用、评估闭环与可靠的多步骤执行。",
      },
    },
    {
      title: { en: "Memory & Retrieval", zh: "记忆与检索" },
      description: {
        en: "Long-term memory structures, retrieval policies, and controlled comparisons for LLM agents.",
        zh: "研究 LLM 智能体的长期记忆结构、检索策略与受控对比实验。",
      },
    },
    {
      title: { en: "Reliable AI Products", zh: "可靠 AI 产品" },
      description: {
        en: "Connecting model behavior with full-stack delivery, clear interfaces, and measurable product outcomes.",
        zh: "将模型行为与全栈交付、清晰交互和可衡量的产品结果连接起来。",
      },
    },
  ],
  coursework: [
    {
      title: { en: "AI & Graphics", zh: "AI 与图形学" },
      courses: {
        en: ["Artificial Intelligence", "Machine Learning", "Computer Graphics"],
        zh: ["人工智能", "机器学习", "计算机图形学"],
      },
    },
    {
      title: { en: "Systems", zh: "系统方向" },
      courses: {
        en: ["Computer Systems", "Computer Networks", "Compilers", "Databases"],
        zh: ["计算机系统", "计算机网络", "编译原理", "数据库"],
      },
    },
    {
      title: { en: "Software Foundations", zh: "软件基础" },
      courses: {
        en: ["Data Structures", "Algorithm Design", "OOP", "Software Engineering"],
        zh: ["数据结构", "算法设计", "面向对象程序设计", "软件工程"],
      },
    },
  ],
  language: {
    title: { en: "English & Cross-cultural Communication", zh: "英语与跨文化沟通" },
    description: {
      en: "Malaysian international student with IELTS 7.5 and experience working across English- and Chinese-speaking teams.",
      zh: "马来西亚国际学生，IELTS 7.5，具备中英文团队协作与跨文化沟通经验。",
    },
  },
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
    stack: ["Python", "FastAPI", "React", "LLM", "Image Generation"],
    year: "2026",
    status: { en: "Fudan course project", zh: "复旦课程项目" },
    ownership: {
      en: "Agent layer: parsing, planning, rules, LLM integration, and structured shot output.",
      zh: "负责 Agent 层：解析、规划、规则、LLM 集成与结构化分镜输出。",
    },
    evidenceSource: {
      en: "Public source code and technical design document.",
      zh: "公开源代码与技术设计文档。",
    },
    impact: {
      en: [
        "Built a runnable text-to-storyboard workflow with explicit modules and inspectable intermediate output.",
        "Kept local fallback behavior for development when external model credentials are unavailable.",
      ],
      zh: [
        "构建可运行的文本到分镜工作流，模块边界清晰且中间输出可检查。",
        "在外部模型凭证不可用时保留本地回退行为，便于开发与调试。",
      ],
    },
    highlights: {
      en: ["Structured shot planning", "Explicit agent rules", "End-to-end storyboard pipeline"],
      zh: ["结构化分镜规划", "显式 Agent 规则", "端到端分镜流水线"],
    },
    flow: {
      en: ["Story input", "Parser", "Planner + rules", "Prompt generation", "Image generation", "Storyboard merge"],
      zh: ["故事输入", "解析器", "规划器与规则", "提示词生成", "图像生成", "分镜合并"],
    },
    links: [
      {
        label: { en: "View source code", zh: "查看源代码" },
        href: "https://github.com/ZiZuoLee/AI-Director-Agent",
      },
    ],
    en: {
      title: "AI Director Agent",
      summary: "A Fudan course project that turns a story brief into planned shots, generated images, and a merged storyboard.",
      problem: "Text-to-image tools generate isolated assets, but a storyboard needs structured shot planning, consistent data flow, and a usable final composition.",
      role: "Owned the agent layer: input parsing, shot planning, rule design, LLM integration, and structured JSON output for downstream generation.",
      architecture: "A React/Gradio interface calls FastAPI. The agent layer parses and plans shots, the generation layer creates prompts and images, and the system layer orchestrates the pipeline and merges the storyboard.",
      decisions: [
        "Separated planning from generation so shot structure can be inspected before image creation.",
        "Used structured shot data as the contract between the agent and generation layers.",
        "Kept a deterministic local fallback to support development without external credentials.",
      ],
      results: [
        "Delivered a runnable system, UI, technical documentation, and course report.",
        "Created a modular pipeline that can be tested at the API and component boundaries.",
      ],
      lessons: "Agent systems become easier to debug when planning artifacts and module boundaries are explicit rather than hidden inside one model call.",
    },
    zh: {
      title: "AI Director Agent",
      summary: "复旦课程项目：将故事需求转化为结构化分镜、生成图像与最终故事板。",
      problem: "单一文生图工具只能生成孤立素材，而故事板需要结构化镜头规划、一致的数据流与可用的最终排版。",
      role: "负责 Agent 层，包括输入解析、分镜规划、规则设计、LLM 集成，以及面向下游生成模块的结构化 JSON 输出。",
      architecture: "React/Gradio 界面调用 FastAPI；Agent 层解析并规划分镜，生成层负责提示词与图像，系统层编排流水线并合并故事板。",
      decisions: [
        "将规划与生成拆分，使镜头结构能在图像生成前被检查。",
        "使用结构化分镜数据作为 Agent 层与生成层之间的契约。",
        "保留确定性的本地回退，支持无外部凭证的开发调试。",
      ],
      results: [
        "交付可运行系统、UI、技术文档与课程报告。",
        "形成可在 API 与模块边界进行测试的模块化流水线。",
      ],
      lessons: "当规划产物与模块边界显式呈现时，Agent 系统比隐藏在单次模型调用中更容易调试。",
    },
  },
  {
    slug: "llm-agent-memory-system",
    featured: true,
    category: "AI Systems",
    stack: ["Python", "LLM", "Retrieval", "Evaluation"],
    year: "2025",
    status: { en: "Research prototype", zh: "研究型原型" },
    ownership: {
      en: "Designed and implemented the memory modes, experiment workflow, prompt construction, and result analysis.",
      zh: "设计并实现记忆模式、实验流程、提示词构建与结果分析。",
    },
    evidenceSource: {
      en: "Public source code, architecture, and controlled experiment results.",
      zh: "公开源代码、系统架构与受控实验结果。",
    },
    impact: {
      en: [
        "Compared no-memory, sliding-context, retrieval, and hierarchical memory under the same multi-turn simulation setup.",
        "The controlled long-preference experiment gives the project reproducible evidence instead of an architecture-only claim.",
      ],
      zh: [
        "在相同多轮对话模拟设置下对比无记忆、滑动上下文、检索与分层记忆。",
        "受控的长期偏好实验为项目提供可复现实证，而不仅是架构描述。",
      ],
    },
    highlights: {
      en: ["Four memory modes", "Grounded evaluation signals", "Mode-isolated updates"],
      zh: ["四种记忆模式", "有依据的评估信号", "模式隔离更新"],
    },
    flow: {
      en: ["User query", "Memory mode", "Context / retrieval / profile", "Prompt builder", "LLM response", "Memory update"],
      zh: ["用户查询", "记忆模式", "上下文 / 检索 / 用户画像", "提示词构建", "LLM 响应", "记忆更新"],
    },
    experiment: {
      title: { en: "Long-preference experiment", zh: "长期偏好实验" },
      description: {
        en: "Controlled multi-turn simulation, repeated five times. Scores measure explicit preference recall and whether the generated summary mentions the earlier preference.",
        zh: "受控多轮对话模拟，共重复五次。分数衡量偏好回忆是否正确，以及生成摘要是否提及之前的偏好。",
      },
      columns: [
        { en: "Memory mode", zh: "记忆模式" },
        { en: "Preference recall", zh: "偏好回忆" },
        { en: "Summary mention", zh: "摘要提及" },
      ],
      rows: [
        ["No memory", "0.0", "0.4"],
        ["Context", "0.2", "0.6"],
        ["Retrieval", "1.0", "0.8"],
        ["Hierarchical", "1.0", "1.0"],
      ],
      note: {
        en: "These results describe a small controlled simulation and should not be generalized to open-ended production deployments.",
        zh: "结果来自小规模受控模拟，不应直接推广到开放式生产环境。",
      },
    },
    links: [
      {
        label: { en: "View source and results", zh: "查看源代码与结果" },
        href: "https://github.com/ZiZuoLee/llm-agent-memory",
      },
    ],
    en: {
      title: "LLM Agent Memory System",
      summary: "A research-oriented comparison of memory mechanisms for LLM agents in controlled multi-turn dialogue simulations.",
      problem: "Agents lose earlier preferences or overload prompts when conversation history is treated as one unstructured block.",
      role: "Designed the memory architecture, implemented four comparison modes, constructed the evaluation workflow, and analyzed the resulting recall signals.",
      architecture: "A mode selector routes each query through no memory, sliding context, retrieval, or hierarchical context/retrieval/profile memory before a shared prompt builder and LLM client.",
      decisions: [
        "Compared memory policies under one experiment harness instead of presenting a single design in isolation.",
        "Required explicit attribution to earlier user statements for a positive preference-recall judgment.",
        "Isolated memory updates by mode so one strategy cannot contaminate another strategy's result.",
      ],
      results: [
        "Retrieval reached 1.0 preference recall and 0.8 summary mention in the five-repeat long-preference simulation.",
        "Hierarchical memory reached 1.0 on both recorded signals in the same controlled setup.",
      ],
      lessons: "Memory quality depends on retrieval policy, schema, and evaluation design; storing more text is not equivalent to remembering better.",
    },
    zh: {
      title: "LLM Agent Memory System",
      summary: "面向受控多轮对话模拟的 LLM Agent 记忆机制研究与对比。",
      problem: "当对话历史被当作无结构文本整体处理时，Agent 容易遗忘早期偏好或使提示词过载。",
      role: "设计记忆架构，实现四种对比模式，构建评估流程并分析回忆指标。",
      architecture: "模式选择器将查询路由到无记忆、滑动上下文、检索或分层的上下文/检索/用户画像记忆，再进入共享提示词构建器与 LLM 客户端。",
      decisions: [
        "在同一实验框架下对比多种记忆策略，而不是孤立展示单一方案。",
        "只有明确引用早期用户陈述时，偏好回忆才判定为正确。",
        "按模式隔离记忆更新，避免不同策略之间相互污染。",
      ],
      results: [
        "在五次长期偏好模拟中，检索记忆的偏好回忆为 1.0，摘要提及为 0.8。",
        "在相同受控设置下，分层记忆在两个指标上均达到 1.0。",
      ],
      lessons: "记忆质量取决于检索策略、结构与评估设计；保存更多文本并不等于记得更好。",
    },
  },
  {
    slug: "resume-automation-platform",
    featured: true,
    category: "Full-stack AI",
    stack: ["React", "FastAPI", "LLM", "Selenium"],
    year: "2025",
    status: { en: "Internship work", zh: "实习项目" },
    ownership: {
      en: "Full-stack delivery across browser, web, desktop, automation, model-data pipelines, and analytics.",
      zh: "覆盖浏览器、Web、桌面端、自动化、模型数据流水线与分析的全栈交付。",
    },
    evidenceSource: {
      en: "Selected non-confidential outcomes reported in the public resume.",
      zh: "来自公开简历的非保密成果摘要。",
    },
    impact: {
      en: [
        "Built a 2,200+ labeled-pair pipeline across 9+ model variants, with approximately 87% reported matching accuracy.",
        "Automation reportedly processed 1,000+ resumes per day with a 95%+ success rate and reduced manual screening time by about 85%.",
      ],
      zh: [
        "构建包含 2,200+ 标注样本、覆盖 9+ 模型版本的数据流水线，公开简历记录匹配准确率约 87%。",
        "自动化流程公开记录日处理 1,000+ 份简历、成功率 95%+，并将人工筛选时间减少约 85%。",
      ],
    },
    highlights: {
      en: ["Multi-surface AI product", "Model-data pipeline", "Production automation"],
      zh: ["多端 AI 产品", "模型数据流水线", "生产级自动化"],
    },
    metrics: [
      { value: "2,200+", label: { en: "labeled pairs", zh: "标注样本" } },
      { value: "9+", label: { en: "model variants", zh: "模型版本" } },
      { value: "~87%", label: { en: "reported match accuracy", zh: "公开匹配准确率" } },
      { value: "1,000+", label: { en: "resumes/day reported", zh: "公开日处理简历" } },
    ],
    en: {
      title: "AI Resume Automation Platform",
      summary: "Full-stack AI and automation tooling for resume screening, matching, upload workflows, and recruiting analytics.",
      problem: "Recruiting teams spend substantial time screening, matching, and moving candidate data across disconnected platforms.",
      role: "Worked across Chrome extension, Flask/FastAPI web services, PyQt desktop tooling, Selenium automation, fine-tuning data preparation, and dashboards.",
      architecture: "Multiple client surfaces connected to backend APIs, asynchronous automation, model-assisted matching, and analytics over recruiting data.",
      decisions: [
        "Built around real recruiting workflows instead of an isolated model demonstration.",
        "Kept model outputs reviewable and combined them with automation rather than treating generation as the whole product.",
        "Used separate surfaces where browser, web, and desktop constraints required different interaction models.",
      ],
      results: [
        "Created a labeled-data and model-variant workflow with publicly reported matching accuracy around 87%.",
        "Supported high-volume resume processing while substantially reducing manual screening time, as reported in the public resume.",
      ],
      lessons: "AI product value comes from fitting model behavior into reliable operational workflows and measurable user outcomes.",
    },
    zh: {
      title: "AI 简历自动化平台",
      summary: "面向简历筛选、匹配、跨平台上传与招聘分析的全栈 AI 和自动化工具。",
      problem: "招聘团队需要在多个割裂的平台间重复筛选、匹配和迁移候选人数据，人工成本较高。",
      role: "工作覆盖 Chrome 扩展、Flask/FastAPI Web 服务、PyQt 桌面工具、Selenium 自动化、微调数据准备与分析看板。",
      architecture: "多个客户端连接后端 API、异步自动化、模型辅助匹配与招聘数据分析。",
      decisions: [
        "围绕真实招聘工作流构建，而不是孤立的模型演示。",
        "保持模型输出可检查，并将其嵌入自动化流程。",
        "根据浏览器、Web 与桌面端约束选择不同交互形态。",
      ],
      results: [
        "形成标注数据与多模型版本工作流，公开简历记录匹配准确率约 87%。",
        "公开简历记录系统支持高量简历处理，并显著减少人工筛选时间。",
      ],
      lessons: "AI 产品价值来自模型能力与可靠运营流程及可衡量结果的结合。",
    },
  },
  {
    slug: "trading-systems-frontend",
    featured: false,
    category: "Trading Systems",
    stack: ["React", "TypeScript", "Trading UI", "Web3"],
    year: "2025–2026",
    status: { en: "Internship work", zh: "实习项目" },
    ownership: {
      en: "Frontend product engineering across trading workflows, state-heavy interfaces, and instrumentation.",
      zh: "负责交易工作流、复杂状态界面与数据埋点相关的前端产品工程。",
    },
    evidenceSource: {
      en: "Non-confidential responsibilities summarized from the public resume.",
      zh: "基于公开简历总结的非保密职责。",
    },
    impact: {
      en: [
        "Contributed to cross-functional trading initiatives spanning spot, options, futures, RFQ, and unified order workflows.",
        "Worked on instrumentation and rendering reliability without publishing confidential product metrics.",
      ],
      zh: [
        "参与现货、期权、合约、RFQ 与统一订单流程等跨职能交易项目。",
        "参与行为埋点与渲染可靠性优化，不公开保密业务指标。",
      ],
    },
    highlights: {
      en: ["Trading workflows", "State-heavy interfaces", "Behavior instrumentation"],
      zh: ["交易工作流", "复杂状态界面", "用户行为埋点"],
    },
    en: {
      title: "Trading Systems Frontend",
      summary: "Frontend product engineering in a trading environment where clarity, state management, and reliability affect decisions.",
      problem: "Trading interfaces must present dense, rapidly changing information while keeping user actions predictable and understandable.",
      role: "Contributed to iterative frontend delivery with product, design, and backend partners across several unified trading workflows.",
      architecture: "The interface layer connects trading state, market data, reusable components, instrumentation, and responsive UI states.",
      decisions: [
        "Used clear component boundaries for complex state transitions.",
        "Prioritized predictable interaction and rendering behavior over decorative effects.",
        "Instrumented key user actions to support product analysis.",
      ],
      results: [
        "Built experience delivering within a high-precision financial product environment.",
        "Connected frontend product work with later C++ quant and infrastructure interests.",
      ],
      lessons: "In trading products, frontend clarity and performance are part of system reliability because ambiguity can affect user decisions.",
    },
    zh: {
      title: "交易系统前端",
      summary: "在交易产品环境中进行前端工程，重点关注清晰度、状态管理与可靠性。",
      problem: "交易界面需要呈现密集且快速变化的信息，同时保持用户操作可预测、可理解。",
      role: "与产品、设计和后端团队协作，参与多个统一交易工作流的迭代交付。",
      architecture: "界面层连接交易状态、市场数据、可复用组件、数据埋点与响应式 UI 状态。",
      decisions: [
        "为复杂状态转换建立清晰的组件边界。",
        "优先保证交互与渲染可预测，而不是堆叠装饰效果。",
        "为关键用户行为增加埋点，支持产品分析。",
      ],
      results: [
        "积累高精度金融产品环境下的工程交付经验。",
        "将前端产品工作与后续 C++ 量化和基础设施方向连接起来。",
      ],
      lessons: "在交易产品中，前端清晰度和性能属于系统可靠性的一部分，因为歧义可能影响用户决策。",
    },
  },
];

export const experiences: Experience[] = [
  {
    company: "Jiyou Fund",
    role: { en: "Quant Developer Intern · C++", zh: "量化开发实习生 · C++" },
    location: "Shanghai",
    period: "2026",
    stack: ["C++", "Quant Engineering", "Trading Infrastructure"],
    en: [
      "Working on C++-oriented quant development tasks across trading and infrastructure workflows.",
      "Building a bridge between systems programming, financial markets, and data-driven engineering.",
    ],
    zh: [
      "参与 C++ 量化开发相关工作，覆盖交易与基础设施工程场景。",
      "将系统编程、金融市场和数据驱动工程能力连接起来。",
    ],
  },
  {
    company: "ByteDance",
    role: { en: "DOU+ Full-stack Developer Intern", zh: "DOU+ 全栈开发实习生" },
    location: "Shanghai",
    period: "05/2026–06/2026",
    stack: ["React", "TypeScript", "Frontend Systems"],
    en: [
      "Contributed to UX and payment-flow features associated with a reported 30% increase in user payment rate.",
      "Standardized px/rem usage across the repository to improve frontend consistency and maintainability.",
    ],
    zh: [
      "参与用户体验与支付流程功能，公开简历记录相关功能上线后用户支付率提升约 30%。",
      "统一代码库中的 px/rem 使用，提升前端一致性与可维护性。",
    ],
  },
  {
    company: "Bybit",
    role: { en: "Unified Frontend Intern", zh: "统一交易前端实习生" },
    location: "Remote / Asia",
    period: "09/2025–03/2026",
    stack: ["React", "TypeScript", "Trading UI", "Web3"],
    en: [
      "Contributed to spot, options, futures, RFQ, and unified order/trading product workflows.",
      "Worked on user-behavior instrumentation and rendering reliability in state-heavy interfaces.",
    ],
    zh: [
      "参与现货、期权、合约、RFQ 与统一订单/交易产品工作流。",
      "在复杂状态界面中参与用户行为埋点与渲染可靠性优化。",
    ],
  },
  {
    company: "AnyHelper",
    role: { en: "AI Full-stack Developer Intern", zh: "AI 全栈开发实习生" },
    location: "Shanghai",
    period: "03/2025–10/2025",
    stack: ["LLM", "FastAPI", "React", "Automation"],
    en: [
      "Built browser, web, and desktop workflows for resume screening, matching, and multi-platform uploads.",
      "Developed model-data pipelines, production automation, and analytics using non-confidential outcomes reported in the public resume.",
    ],
    zh: [
      "构建浏览器、Web 与桌面端的简历筛选、匹配和跨平台上传工作流。",
      "参与模型数据流水线、生产自动化与分析，页面仅采用公开简历中的非保密成果。",
    ],
  },
];

export function localize(project: Project, locale: Locale) {
  return project[locale];
}
export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}

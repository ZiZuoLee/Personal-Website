import { existsSync } from "node:fs";
import { join } from "node:path";
import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/motion";
import { TrackedLink } from "@/components/tracked-link";
import {
  academicProfile,
  experiences,
  localize,
  profile,
  projects,
  skills,
  type Locale,
  type Project,
} from "@/lib/content";

const categoryAccents = {
  "AI Agents": {
    gradient: "from-cyan-300/30 via-sky-400/10 to-fuchsia-400/20",
    ring: "border-cyan-300/30",
    dot: "bg-cyan-300",
    label: "agent pipeline",
  },
  "AI Systems": {
    gradient: "from-violet-300/30 via-cyan-400/10 to-blue-400/20",
    ring: "border-violet-300/30",
    dot: "bg-violet-300",
    label: "memory evaluation",
  },
  "Full-stack AI": {
    gradient: "from-emerald-300/25 via-cyan-400/10 to-sky-400/20",
    ring: "border-emerald-300/30",
    dot: "bg-emerald-300",
    label: "product workflow",
  },
  "Trading Systems": {
    gradient: "from-amber-300/25 via-orange-400/10 to-cyan-400/20",
    ring: "border-amber-300/30",
    dot: "bg-amber-300",
    label: "market interface",
  },
} as const;

const copy = {
  en: {
    eyebrow: "Portfolio / AI Systems / Quant Engineering",
    title: "Building practical AI systems across product, trading, and infrastructure.",
    intro:
      "I am a Fudan Computer Science student focused on turning AI ideas into reliable systems: agent workflows, full-stack products, trading interfaces, and C++ quant engineering.",
    viewProjects: "View Projects",
    contact: "Contact Me",
    featured: "Featured Projects",
    featuredText:
      "Selected work with public code, controlled experiments, or clearly scoped production evidence.",
    experience: "Experience",
    experienceText:
      "Internship experience across AI product engineering, trading frontend, large-scale internet products, and C++ quant development.",
    skills: "Technical Focus",
    academics: "Academic Direction",
    academicsText:
      "Fudan coursework and research interests supporting graduate study in AI systems, agent memory, retrieval, and dependable product engineering.",
    resume: "Resume",
    resumeText:
      "Download the latest PDF resume or use the project case studies for deeper technical context.",
    proof: "Proof of Work",
    proofText:
      "Fast paths for recruiters and collaborators to inspect code, read case studies, download the resume, or make contact.",
    aboutPill: "Professional narrative",
    aboutTitle: "About",
    aboutText:
      "My strongest direction is AI systems engineering: combining model-facing work with product judgment, full-stack implementation, and systems thinking from trading and quant contexts.",
    aboutNarrative:
      "My work sits at the intersection of AI systems, product engineering, and financial technology. I care about reliable workflows more than isolated demos: how the model is evaluated, how the interface guides decisions, and how the system behaves when the task gets messy.",
    aboutBridge:
      "That is why this portfolio combines agent planning, memory evaluation, production AI product experience, trading interfaces, and C++ quant development. The through-line is practical systems judgment.",
  },
  zh: {
    eyebrow: "个人网站 / AI 系统 / 量化工程",
    title: "构建面向真实产品、交易与基础设施的 AI 系统。",
    intro:
      "我是复旦计算机本科生，关注如何把 AI 想法变成可靠系统：Agent 工作流、全栈产品、交易界面和 C++ 量化工程。",
    viewProjects: "查看项目",
    contact: "联系我",
    featured: "精选项目",
    featuredText: "精选具备公开代码、受控实验或清晰生产证据的项目。",
    experience: "实习经历",
    experienceText: "经历覆盖 AI 产品工程、交易前端、大规模互联网产品和 C++ 量化开发。",
    skills: "技术方向",
    academics: "学术方向",
    academicsText:
      "复旦课程与研究兴趣聚焦 AI 系统、Agent 记忆、检索和可靠产品工程，为研究生学习打下基础。",
    resume: "简历",
    resumeText: "下载最新 PDF 简历；项目案例页提供更完整的技术背景。",
    proof: "工作证明",
    proofText: "为招聘方和合作方提供查看代码、阅读案例、下载简历或直接联系的快速入口。",
    aboutPill: "职业叙事",
    aboutTitle: "关于我",
    aboutText:
      "我当前最清晰的方向是 AI 系统工程：结合模型相关能力、产品判断、全栈实现，以及交易和量化场景中的系统思维。",
    aboutNarrative:
      "我的经历交汇在 AI 系统、产品工程和金融科技之间。我更关注可靠工作流，而不是孤立 demo：如何评估模型、如何通过界面辅助决策，以及系统在复杂任务中如何保持可控。",
    aboutBridge:
      "因此这个作品集同时呈现 Agent 规划、记忆评估、生产环境 AI 产品、交易界面和 C++ 量化开发。它们共同指向实用的系统工程判断。",
  },
} as const;

export function HomePage({ locale }: { locale: Locale }) {
  const t = copy[locale];
  const prefix = locale === "en" ? "" : "/zh";

  return (
    <SiteContent>
      <section className="grid min-h-[calc(100vh-76px)] items-center gap-12 py-14 lg:grid-cols-[1.08fr_.92fr] lg:py-20">
        <Reveal>
          <p className="mb-5 text-xs font-medium uppercase tracking-[0.3em] text-cyan-200/80 sm:text-sm sm:tracking-[0.35em]">
            {t.eyebrow}
          </p>
          <h1 className="max-w-5xl text-4xl font-semibold tracking-tight text-white sm:text-6xl lg:text-7xl">
            {t.title}
          </h1>
          <p className="mt-7 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">{t.intro}</p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <TrackedLink className="btn-primary" href={`${prefix}/projects`} eventTarget="projects_hero">
              {t.viewProjects}
            </TrackedLink>
            <TrackedLink className="btn-secondary" href={`${prefix}/contact`} eventTarget="contact_hero">
              {t.contact}
            </TrackedLink>
          </div>
        </Reveal>

        <ProfileCard locale={locale} />
      </section>

      <SectionIntro title={t.featured} text={t.featuredText} />
      <ProjectGrid locale={locale} featuredOnly />

      <SectionIntro title={t.experience} text={t.experienceText} />
      <ExperienceList locale={locale} />

      <SectionIntro title={t.skills} text={profile.headline[locale]} />
      <SkillCloud />

      <SectionIntro title={t.academics} text={t.academicsText} />
      <AcademicTeaser locale={locale} />

      <SectionIntro title={t.proof} text={t.proofText} />
      <ProofOfWork locale={locale} />

      <ResumeBlock locale={locale} />
    </SiteContent>
  );
}

export function ProjectsPage({ locale }: { locale: Locale }) {
  return (
    <SiteContent>
      <PageHeader
        eyebrow={locale === "en" ? "Selected work" : "精选工作"}
        title={locale === "en" ? "Projects" : "项目"}
        text={
          locale === "en"
            ? "Case studies across AI agents, memory evaluation, full-stack AI products, and trading systems."
            : "覆盖 AI Agent、记忆评估、全栈 AI 产品和交易系统的项目案例。"
        }
      />
      <ProjectGrid locale={locale} />
    </SiteContent>
  );
}

export function ProjectPage({ locale, project }: { locale: Locale; project: Project }) {
  const p = localize(project, locale);
  const prefix = locale === "en" ? "" : "/zh";
  const projectIndex = projects.findIndex((item) => item.slug === project.slug);
  const previous = projectIndex > 0 ? projects[projectIndex - 1] : undefined;
  const next = projectIndex < projects.length - 1 ? projects[projectIndex + 1] : undefined;

  return (
    <SiteContent>
      <nav aria-label={locale === "en" ? "Breadcrumb" : "面包屑导航"} className="pt-12 text-sm text-slate-400">
        <Link className="hover:text-cyan-200" href={`${prefix}/projects`}>
          {locale === "en" ? "Projects" : "项目"}
        </Link>
        <span aria-hidden="true" className="mx-2">/</span>
        <span className="text-slate-200">{p.title}</span>
      </nav>

      <PageHeader eyebrow={project.status[locale]} title={p.title} text={p.summary} compact />

      <div className="mb-8 flex flex-wrap gap-2">
        {[project.category, project.year, ...project.stack].map((tag) => (
          <span className="tag" key={tag}>{tag}</span>
        ))}
      </div>

      <ProjectLinks project={project} locale={locale} />

      <ArchitectureFlow project={project} locale={locale} />

      <div className="my-8 grid gap-5 lg:grid-cols-2">
        <CaseCard title={locale === "en" ? "My Ownership" : "我的职责"} text={project.ownership[locale]} />
        <CaseCard title={locale === "en" ? "Evidence Source" : "证据来源"} text={project.evidenceSource[locale]} />
      </div>

      {project.metrics?.length ? <MetricGrid project={project} locale={locale} /> : null}
      {project.experiment ? <ExperimentTable project={project} locale={locale} /> : null}

      <div className="grid gap-5 lg:grid-cols-[.8fr_1.2fr]">
        <CaseCard title={locale === "en" ? "Problem" : "问题"} text={p.problem} />
        <CaseCard title={locale === "en" ? "My Role" : "我的角色"} text={p.role} />
        <CaseCard title={locale === "en" ? "Architecture" : "架构"} text={p.architecture} />
        <CaseList title={locale === "en" ? "Key Decisions" : "关键技术决策"} items={p.decisions} />
        <CaseList title={locale === "en" ? "Results" : "结果"} items={p.results} />
        <CaseCard title={locale === "en" ? "Lessons Learned" : "复盘"} text={p.lessons} />
      </div>

      <div className="my-12 grid gap-4 sm:grid-cols-2">
        {previous ? (
          <ProjectNavCard locale={locale} project={previous} direction="previous" />
        ) : <div />}
        {next ? <ProjectNavCard locale={locale} project={next} direction="next" /> : null}
      </div>

      <Reveal className="mb-20 rounded-[2rem] border border-cyan-300/20 bg-cyan-300/10 p-7 sm:p-9">
        <h2 className="text-2xl font-semibold text-white">
          {locale === "en" ? "Interested in the engineering behind this work?" : "想进一步了解项目工程细节？"}
        </h2>
        <p className="mt-3 max-w-2xl leading-7 text-slate-300">
          {locale === "en"
            ? "Explore the other case studies or contact me directly for a technical conversation."
            : "继续查看其他项目案例，或直接联系我交流技术细节。"}
        </p>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <TrackedLink className="btn-primary" href={`${prefix}/projects`} eventTarget="projects_case_study_end">
            {locale === "en" ? "All Projects" : "全部项目"}
          </TrackedLink>
          <TrackedLink className="btn-secondary" href={`${prefix}/contact`} eventTarget="contact_case_study_end">
            {locale === "en" ? "Contact Me" : "联系我"}
          </TrackedLink>
        </div>
      </Reveal>
    </SiteContent>
  );
}

export function ExperiencePage({ locale }: { locale: Locale }) {
  return (
    <SiteContent>
      <PageHeader
        eyebrow={locale === "en" ? "Professional timeline" : "职业时间线"}
        title={locale === "en" ? "Experience" : "实习经历"}
        text={
          locale === "en"
            ? "Product engineering, AI workflows, trading frontend, and C++ quant development across four internship environments."
            : "覆盖产品工程、AI 工作流、交易前端与 C++ 量化开发的四段实习经历。"
        }
      />
      <ExperienceList locale={locale} />
      <div className="h-20" />
    </SiteContent>
  );
}

export function AcademicsPage({ locale }: { locale: Locale }) {
  const prefix = locale === "en" ? "" : "/zh";
  const academicProjects = projects.filter((project) =>
    ["ai-director-agent", "llm-agent-memory-system"].includes(project.slug),
  );

  return (
    <SiteContent>
      <PageHeader
        eyebrow={locale === "en" ? "Graduate-study foundation" : "研究生学习基础"}
        title={locale === "en" ? "Academics" : "学术背景"}
        text={
          locale === "en"
            ? "Computer science foundations at Fudan, with a growing focus on agent systems, memory, retrieval, evaluation, and reliable AI products."
            : "在复旦建立计算机科学基础，并逐步聚焦 Agent 系统、记忆、检索、评估与可靠 AI 产品。"
        }
      />

      <Reveal className="card relative overflow-hidden p-7 sm:p-9">
        <div className="absolute -right-16 -top-16 size-52 rounded-full bg-cyan-300/10 blur-3xl" aria-hidden="true" />
        <div className="relative flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.25em] text-cyan-200/80">
              {academicProfile.education.school[locale]}
            </p>
            <h2 className="mt-4 text-3xl font-semibold text-white">{academicProfile.education.degree[locale]}</h2>
            <p className="mt-3 text-slate-300">{academicProfile.education.location[locale]}</p>
          </div>
          <span className="tag w-fit">{academicProfile.education.graduation[locale]}</span>
        </div>
      </Reveal>

      <SectionIntro
        title={locale === "en" ? "Research Interests" : "研究兴趣"}
        text={locale === "en" ? "The questions I want to explore more deeply in graduate study." : "希望在研究生阶段进一步探索的问题。"}
      />
      <div className="grid gap-5 md:grid-cols-3">
        {academicProfile.researchInterests.map((interest, index) => (
          <Reveal className="card" delay={index * 0.04} key={interest.title.en}>
            <h2 className="text-xl font-semibold text-white">{interest.title[locale]}</h2>
            <p className="mt-4 leading-7 text-slate-300">{interest.description[locale]}</p>
          </Reveal>
        ))}
      </div>

      <SectionIntro
        title={locale === "en" ? "Selected Coursework" : "核心课程"}
        text={locale === "en" ? "Grouped by the foundations they contribute to." : "按能力基础进行分组。"}
      />
      <div className="grid gap-5 md:grid-cols-3">
        {academicProfile.coursework.map((group, index) => (
          <Reveal className="card" delay={index * 0.04} key={group.title.en}>
            <h2 className="text-xl font-semibold text-cyan-100">{group.title[locale]}</h2>
            <ul className="mt-5 space-y-3 text-slate-300">
              {group.courses[locale].map((course) => (
                <li className="flex gap-3" key={course}>
                  <span className="mt-2 size-1.5 shrink-0 rounded-full bg-cyan-300" />
                  <span>{course}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>

      <SectionIntro
        title={locale === "en" ? "Academic Projects" : "学术项目"}
        text={locale === "en" ? "Course and research-oriented work with inspectable evidence." : "具备可检查证据的课程与研究型项目。"}
      />
      <div className="grid gap-5 md:grid-cols-2">
        {academicProjects.map((project) => {
          const localized = localize(project, locale);
          return (
            <Reveal className="card" key={project.slug}>
              <span className="tag">{project.status[locale]}</span>
              <h2 className="mt-5 text-2xl font-semibold text-white">{localized.title}</h2>
              <p className="mt-4 leading-7 text-slate-300">{localized.summary}</p>
              <Link className="mt-6 inline-flex font-semibold text-cyan-200 hover:text-cyan-100" href={`${prefix}/projects/${project.slug}`}>
                {locale === "en" ? "Read the case study →" : "阅读项目案例 →"}
              </Link>
            </Reveal>
          );
        })}
      </div>

      <SectionIntro title={academicProfile.language.title[locale]} text={academicProfile.language.description[locale]} />
      <Reveal className="mb-20 flex flex-wrap gap-3">
        <span className="tag">IELTS 7.5</span>
        <span className="tag">English</span>
        <span className="tag">中文</span>
        <span className="tag">Malaysia · China</span>
      </Reveal>
    </SiteContent>
  );
}

export function ResumePage({ locale }: { locale: Locale }) {
  return (
    <SiteContent>
      <PageHeader
        eyebrow={locale === "en" ? "Download" : "下载"}
        title={locale === "en" ? "Resume" : "简历"}
        text={
          locale === "en"
            ? "Download the PDF resume or use the project pages for deeper technical context."
            : "下载 PDF 简历；如需更完整的技术背景，可查看项目案例页。"
        }
      />
      <ResumeBlock locale={locale} />
    </SiteContent>
  );
}

export function AboutPage({ locale }: { locale: Locale }) {
  const t = copy[locale];
  const strengths =
    locale === "en"
      ? [
          ["AI Systems", "Agent planning, memory, retrieval, evaluation, and practical integration."],
          ["Product Engineering", "Frontend, full-stack delivery, responsive interfaces, and operational workflows."],
          ["Quant / Trading", "Trading product exposure and C++ quant development foundations."],
        ]
      : [
          ["AI 系统", "Agent 规划、记忆、检索、评估与实际产品集成。"],
          ["产品工程", "前端、全栈交付、响应式界面与运营工作流。"],
          ["量化 / 交易", "交易产品经验与 C++ 量化开发基础。"],
        ];

  return (
    <SiteContent>
      <PageHeader eyebrow={t.aboutPill} title={t.aboutTitle} text={t.aboutText} />
      <div className="grid gap-5 lg:grid-cols-[.72fr_1.28fr]">
        <Reveal className="card p-4 sm:p-5">
          <AvatarVisual locale={locale} className="aspect-[3/4] w-full" sizes="(max-width: 1024px) 100vw, 34vw" />
          <div className="px-2 pb-2 pt-5">
            <p className="text-lg font-semibold text-white">{profile.displayName}</p>
            <p className="mt-1 text-sm text-slate-400">{profile.location}</p>
          </div>
        </Reveal>

        <Reveal className="card relative overflow-hidden p-7 sm:p-9">
          <div className="absolute -right-20 -top-20 size-56 rounded-full bg-cyan-300/10 blur-3xl" aria-hidden="true" />
          <span className="tag">{t.aboutPill}</span>
          <h2 className="relative mt-6 max-w-2xl text-3xl font-semibold tracking-tight text-white">
            {locale === "en"
              ? "I build the connective tissue between models, products, and systems."
              : "我关注模型、产品与系统之间的连接层。"}
          </h2>
          <p className="relative mt-5 leading-8 text-slate-300">{t.aboutNarrative}</p>
          <p className="relative mt-4 leading-8 text-slate-300">{t.aboutBridge}</p>
          <div className="relative mt-7 flex flex-col gap-3 sm:flex-row">
            <TrackedLink className="btn-primary" href={locale === "en" ? "/academics" : "/zh/academics"} eventTarget="academics_about">
              {locale === "en" ? "Academic Background" : "学术背景"}
            </TrackedLink>
            <TrackedLink className="btn-secondary" href={locale === "en" ? "/contact" : "/zh/contact"} eventTarget="contact_about">
              {locale === "en" ? "Contact Me" : "联系我"}
            </TrackedLink>
          </div>
        </Reveal>
      </div>

      <div className="my-20 grid gap-5 lg:grid-cols-3">
        {strengths.map(([title, text], index) => (
          <Reveal className="card" delay={index * 0.04} key={title}>
            <h2 className="text-xl font-semibold text-white">{title}</h2>
            <p className="mt-3 leading-7 text-slate-300">{text}</p>
          </Reveal>
        ))}
      </div>
    </SiteContent>
  );
}

export function ContactPage({ locale }: { locale: Locale }) {
  return (
    <SiteContent>
      <PageHeader
        eyebrow={locale === "en" ? "Start a conversation" : "开始交流"}
        title={locale === "en" ? "Contact" : "联系"}
        text={
          locale === "en"
            ? "Email is the fastest way to reach me. GitHub is the best place to inspect my public engineering work."
            : "邮件是最快的联系方式；GitHub 更适合查看我的公开工程项目。"
        }
      />
      <div className="mb-20 grid gap-4 sm:grid-cols-3">
        <ContactCard label="Email" href={`mailto:${profile.email}`} value={profile.email} eventTarget="email_contact" />
        <ContactCard label="GitHub" href={profile.github} value="github.com/ZiZuoLee" eventTarget="github_contact" external />
        <ContactCard label="LinkedIn" href={profile.linkedin} value="linkedin.com/in/zizuolee" eventTarget="linkedin_contact" external />
      </div>
    </SiteContent>
  );
}

function SiteContent({ children }: { children: React.ReactNode }) {
  return <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">{children}</div>;
}

function PageHeader({
  eyebrow,
  title,
  text,
  compact = false,
}: {
  eyebrow: string;
  title: string;
  text: string;
  compact?: boolean;
}) {
  return (
    <Reveal className={compact ? "py-10 sm:py-12" : "py-16 sm:py-20"}>
      <p className="mb-4 text-xs font-medium uppercase tracking-[0.3em] text-cyan-200/80 sm:text-sm sm:tracking-[0.35em]">{eyebrow}</p>
      <h1 className="max-w-4xl text-4xl font-semibold tracking-tight text-white sm:text-6xl">{title}</h1>
      <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">{text}</p>
    </Reveal>
  );
}

function SectionIntro({ title, text }: { title: string; text: string }) {
  return (
    <Reveal className="mb-8 mt-20 max-w-3xl">
      <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">{title}</h2>
      <p className="mt-4 leading-8 text-slate-300">{text}</p>
    </Reveal>
  );
}

function ProjectGrid({ locale, featuredOnly = false }: { locale: Locale; featuredOnly?: boolean }) {
  const visible = featuredOnly ? projects.filter((project) => project.featured) : projects;
  const prefix = locale === "en" ? "" : "/zh";

  return (
    <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
      {visible.map((project, index) => {
        const p = localize(project, locale);
        const accent = getProjectAccent(project.category);
        return (
          <Reveal
            delay={index * 0.04}
            className="card group relative overflow-hidden hover:-translate-y-1 hover:border-cyan-300/30"
            key={project.slug}
          >
            <div className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${accent.gradient}`} />
            <ProjectPreview project={project} />
            <div className="mb-6 flex flex-wrap items-center justify-between gap-2">
              <span className="tag">{project.category}</span>
              <span className="rounded-full border border-emerald-300/20 bg-emerald-300/10 px-3 py-1 text-xs text-emerald-100">
                {project.status[locale]}
              </span>
            </div>
            <h3 className="text-2xl font-semibold text-white group-hover:text-cyan-100">{p.title}</h3>
            <p className="mt-4 leading-7 text-slate-300 xl:min-h-28">{p.summary}</p>
            <ul className="mt-5 space-y-2 text-sm text-slate-300">
              {project.highlights[locale].slice(0, 3).map((item) => (
                <li className="flex gap-2" key={item}>
                  <span className="mt-2 size-1.5 shrink-0 rounded-full bg-cyan-300" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6 flex flex-wrap gap-2">
              {project.stack.slice(0, 4).map((item) => <span className="tag-muted" key={item}>{item}</span>)}
            </div>
            <Link className="mt-7 inline-flex text-sm font-semibold text-cyan-200 hover:text-cyan-100" href={`${prefix}/projects/${project.slug}`}>
              {locale === "en" ? "Read case study →" : "查看案例 →"}
            </Link>
          </Reveal>
        );
      })}
    </div>
  );
}

function ExperienceList({ locale }: { locale: Locale }) {
  return (
    <div className="space-y-5">
      {experiences.map((experience, index) => (
        <Reveal className="card" delay={index * 0.04} key={experience.company}>
          <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
            <div>
              <p className="text-sm text-cyan-200">{experience.period}</p>
              <h3 className="mt-2 text-2xl font-semibold text-white">{experience.role[locale]}</h3>
              <p className="mt-1 text-slate-400">{experience.company} · {experience.location}</p>
            </div>
            <div className="flex max-w-2xl flex-wrap gap-2">
              {experience.stack.map((item) => <span className="tag-muted" key={item}>{item}</span>)}
            </div>
          </div>
          <ul className="mt-6 space-y-3 text-slate-300">
            {experience[locale].map((bullet) => (
              <li className="flex gap-3" key={bullet}>
                <span className="mt-2 size-1.5 shrink-0 rounded-full bg-cyan-300" />
                <span>{bullet}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      ))}
    </div>
  );
}

function SkillCloud() {
  return (
    <Reveal className="flex flex-wrap gap-3">
      {skills.map((skill) => <span className="tag" key={skill}>{skill}</span>)}
    </Reveal>
  );
}

function ProfileCard({ locale }: { locale: Locale }) {
  const focus =
    locale === "en"
      ? ["Agent planning, memory, and evaluation", "C++ quant and trading infrastructure", "Full-stack product engineering"]
      : ["Agent 规划、记忆与评估", "C++ 量化与交易基础设施", "全栈产品工程"];

  return (
    <Reveal className="relative">
      <div className="absolute -inset-6 rounded-[3rem] bg-cyan-400/10 blur-3xl" aria-hidden="true" />
      <div className="card relative overflow-hidden p-5 sm:p-6">
        <div className="absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-cyan-200/70 to-transparent" />
        <div className="grid gap-6 sm:grid-cols-[9.5rem_1fr] sm:items-center lg:grid-cols-1 xl:grid-cols-[9.5rem_1fr]">
          <AvatarVisual locale={locale} priority className="aspect-[3/4] w-full max-w-[12rem] justify-self-center sm:max-w-none" sizes="(max-width: 640px) 48vw, (max-width: 1024px) 152px, 152px" />
          <div>
            <p className="text-sm text-cyan-200/80">{locale === "en" ? "Current direction" : "当前方向"}</p>
            <p className="mt-2 text-2xl font-semibold text-white">AI Systems Engineer</p>
            <p className="mt-3 text-sm leading-6 text-slate-300">{profile.headline[locale]}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              <span className="tag">{locale === "en" ? "Class of 2027" : "2027 届"}</span>
              <span className="tag-muted">{profile.location}</span>
            </div>
          </div>
        </div>
        <div className="mt-6 grid gap-3">
          {focus.map((item) => (
            <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[.04] p-4" key={item}>
              <span className="size-2 rounded-full bg-cyan-300 shadow-[0_0_18px_rgba(103,232,249,.9)]" />
              <span className="text-sm text-slate-200">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </Reveal>
  );
}

function AvatarVisual({
  locale,
  priority = false,
  className,
  sizes,
}: {
  locale: Locale;
  priority?: boolean;
  className: string;
  sizes: string;
}) {
  const avatarPath = join(process.cwd(), "public", "profile", "avatar.png");
  const hasAvatar = existsSync(avatarPath);

  if (!hasAvatar) {
    return (
      <div className={`${className} grid place-items-center overflow-hidden rounded-3xl border border-cyan-300/30 bg-[radial-gradient(circle_at_30%_20%,rgba(103,232,249,.32),transparent_36%),linear-gradient(135deg,rgba(14,165,233,.2),rgba(168,85,247,.16))] shadow-[0_0_40px_rgba(34,211,238,.22)]`}>
        <span className="text-4xl font-semibold tracking-tight text-cyan-100">ZZ</span>
      </div>
    );
  }

  return (
    <div className={`${className} relative overflow-hidden rounded-3xl border border-cyan-300/30 bg-slate-900 shadow-[0_0_40px_rgba(34,211,238,.22)]`}>
      <Image
        src={profile.avatar}
        alt={locale === "en" ? "Professional portrait of Zi Zuo Lee" : "吕子卓的职业肖像"}
        fill
        priority={priority}
        sizes={sizes}
        className="object-cover object-[50%_28%]"
      />
    </div>
  );
}

function ProjectPreview({ project }: { project: Project }) {
  const accent = getProjectAccent(project.category);
  return (
    <div className={`mb-6 overflow-hidden rounded-3xl border ${accent.ring} bg-gradient-to-br ${accent.gradient} p-4`} aria-label={`${project.category} visual preview`}>
      <div className="rounded-2xl border border-white/10 bg-slate-950/65 p-4">
        <div className="mb-4 flex items-center justify-between">
          <span className="text-xs uppercase tracking-[0.25em] text-slate-400">{accent.label}</span>
          <span className={`size-2 rounded-full ${accent.dot} shadow-[0_0_18px_currentColor]`} />
        </div>
        <div className="flex items-center gap-2" aria-hidden="true">
          {Array.from({ length: 5 }).map((_, index) => (
            <div className={`h-10 min-w-0 flex-1 rounded-xl border ${index === 2 ? "border-cyan-300/30 bg-cyan-300/10" : "border-white/10 bg-white/[.05]"}`} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
}

function getProjectAccent(category: string) {
  return categoryAccents[category as keyof typeof categoryAccents] ?? categoryAccents["AI Systems"];
}

function ArchitectureFlow({ project, locale }: { project: Project; locale: Locale }) {
  const flow = project.flow?.[locale];
  if (!flow?.length) return null;
  return (
    <Reveal className="card mb-8 overflow-hidden">
      <h2 className="text-xl font-semibold text-cyan-100">{locale === "en" ? "System Flow" : "系统流程"}</h2>
      <div className="mt-6 flex flex-col gap-2 lg:flex-row lg:items-center">
        {flow.map((step, index) => (
          <div className="contents" key={step}>
            <div className="flex-1 rounded-2xl border border-white/10 bg-white/[.04] px-4 py-4 text-center text-sm text-slate-200">{step}</div>
            {index < flow.length - 1 ? (
              <span className="self-center text-cyan-300" aria-hidden="true">→</span>
            ) : null}
          </div>
        ))}
      </div>
    </Reveal>
  );
}

function MetricGrid({ project, locale }: { project: Project; locale: Locale }) {
  return (
    <div className="mb-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {project.metrics?.map((metric, index) => (
        <Reveal className="card" delay={index * 0.04} key={`${metric.value}-${metric.label.en}`}>
          <p className="text-3xl font-semibold text-cyan-100">{metric.value}</p>
          <p className="mt-2 text-sm leading-6 text-slate-300">{metric.label[locale]}</p>
          {metric.note ? <p className="mt-2 text-xs text-slate-400">{metric.note[locale]}</p> : null}
        </Reveal>
      ))}
    </div>
  );
}

function ExperimentTable({ project, locale }: { project: Project; locale: Locale }) {
  const experiment = project.experiment;
  if (!experiment) return null;
  return (
    <Reveal className="card mb-8 overflow-hidden">
      <h2 className="text-2xl font-semibold text-white">{experiment.title[locale]}</h2>
      <p className="mt-3 max-w-3xl leading-7 text-slate-300">{experiment.description[locale]}</p>
      <div className="mt-6 overflow-x-auto rounded-2xl border border-white/10">
        <table className="w-full min-w-[34rem] border-collapse text-left text-sm">
          <thead className="bg-white/[.06] text-cyan-100">
            <tr>
              {experiment.columns.map((column) => <th className="px-5 py-4 font-semibold" key={column.en}>{column[locale]}</th>)}
            </tr>
          </thead>
          <tbody className="divide-y divide-white/10 text-slate-300">
            {experiment.rows.map(([mode, recall, summary]) => (
              <tr key={mode}>
                <th className="px-5 py-4 font-medium text-white" scope="row">{mode}</th>
                <td className="px-5 py-4 font-mono">{recall}</td>
                <td className="px-5 py-4 font-mono">{summary}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mt-4 text-sm leading-6 text-slate-400">{experiment.note[locale]}</p>
    </Reveal>
  );
}

function AcademicTeaser({ locale }: { locale: Locale }) {
  const prefix = locale === "en" ? "" : "/zh";
  return (
    <Reveal className="card flex flex-col gap-6 p-7 sm:flex-row sm:items-center sm:justify-between sm:p-8">
      <div>
        <p className="text-sm uppercase tracking-[0.25em] text-cyan-200/80">{academicProfile.education.school[locale]}</p>
        <h3 className="mt-3 text-2xl font-semibold text-white">{academicProfile.education.degree[locale]}</h3>
        <p className="mt-2 text-slate-300">{academicProfile.education.graduation[locale]}</p>
      </div>
      <TrackedLink className="btn-secondary shrink-0" href={`${prefix}/academics`} eventTarget="academics_home">
        {locale === "en" ? "View Academics" : "查看学术背景"}
      </TrackedLink>
    </Reveal>
  );
}

function ProofOfWork({ locale }: { locale: Locale }) {
  const prefix = locale === "en" ? "" : "/zh";
  const resumeHref = locale === "en" ? profile.resumeEn : profile.resumeZh;
  const items = [
    {
      label: "GitHub",
      text: locale === "en" ? "Inspect public source code and technical artifacts." : "查看公开源代码与技术产物。",
      href: profile.github,
      eventTarget: "github_proof",
      external: true,
    },
    {
      label: locale === "en" ? "Case Studies" : "项目案例",
      text: locale === "en" ? "Read evidence-backed project breakdowns." : "阅读具备证据的项目拆解。",
      href: `${prefix}/projects`,
      eventTarget: "projects_proof",
      external: false,
    },
    {
      label: locale === "en" ? "Resume" : "简历",
      text: locale === "en" ? "Download the latest PDF resume." : "下载最新 PDF 简历。",
      href: resumeHref,
      eventTarget: locale === "en" ? "resume_en_proof" : "resume_zh_proof",
      external: false,
    },
    {
      label: locale === "en" ? "Contact" : "联系",
      text: locale === "en" ? "Reach me directly by email." : "通过邮件直接联系我。",
      href: `mailto:${profile.email}`,
      eventTarget: "email_proof",
      external: false,
    },
  ];

  return (
    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
      {items.map((item, index) => (
        <Reveal className="card hover:border-cyan-300/40" delay={index * 0.04} key={item.label}>
          <TrackedLink href={item.href} eventTarget={item.eventTarget} external={item.external} className="block">
            <p className="text-sm uppercase tracking-[0.25em] text-cyan-200/80">{item.label}</p>
            <p className="mt-4 leading-7 text-slate-300">{item.text}</p>
          </TrackedLink>
        </Reveal>
      ))}
    </div>
  );
}

function ProjectLinks({ project, locale }: { project: Project; locale: Locale }) {
  if (!project.links?.length) return null;
  return (
    <div className="mb-8 flex flex-wrap gap-3">
      {project.links.map((link) => (
        <TrackedLink className="btn-secondary" href={link.href} eventTarget={`project_source_${project.slug}`} external key={link.href}>
          {link.label[locale]} ↗
        </TrackedLink>
      ))}
    </div>
  );
}

function ResumeBlock({ locale }: { locale: Locale }) {
  const t = copy[locale];
  return (
    <Reveal className="my-20 rounded-[2rem] border border-cyan-300/20 bg-cyan-300/10 p-6 sm:p-8">
      <h2 className="text-3xl font-semibold text-white">{t.resume}</h2>
      <p className="mt-3 max-w-2xl leading-8 text-slate-300">{t.resumeText}</p>
      <div className="mt-7 flex flex-col gap-3 sm:flex-row">
        <TrackedLink className="btn-primary" href={profile.resumeEn} eventTarget="resume_en_block">English CV</TrackedLink>
        <TrackedLink className="btn-secondary" href={profile.resumeZh} eventTarget="resume_zh_block">中文简历</TrackedLink>
      </div>
    </Reveal>
  );
}

function CaseCard({ title, text }: { title: string; text: string }) {
  return (
    <Reveal className="card">
      <h2 className="text-xl font-semibold text-cyan-100">{title}</h2>
      <p className="mt-4 leading-8 text-slate-300">{text}</p>
    </Reveal>
  );
}

function CaseList({ title, items }: { title: string; items: string[] }) {
  return (
    <Reveal className="card">
      <h2 className="text-xl font-semibold text-cyan-100">{title}</h2>
      <ul className="mt-4 space-y-3 text-slate-300">
        {items.map((item) => (
          <li className="flex gap-3" key={item}>
            <span className="mt-2 size-1.5 shrink-0 rounded-full bg-cyan-300" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </Reveal>
  );
}

function ProjectNavCard({ locale, project, direction }: { locale: Locale; project: Project; direction: "previous" | "next" }) {
  const prefix = locale === "en" ? "" : "/zh";
  return (
    <Link className={`card block hover:border-cyan-300/40 ${direction === "next" ? "sm:text-right" : ""}`} href={`${prefix}/projects/${project.slug}`}>
      <p className="text-sm uppercase tracking-[0.2em] text-cyan-200/80">
        {direction === "previous" ? (locale === "en" ? "← Previous" : "← 上一个") : locale === "en" ? "Next →" : "下一个 →"}
      </p>
      <p className="mt-3 text-lg font-semibold text-white">{project[locale].title}</p>
    </Link>
  );
}

function ContactCard({
  label,
  href,
  value,
  eventTarget,
  external = false,
}: {
  label: string;
  href: string;
  value: string;
  eventTarget: string;
  external?: boolean;
}) {
  return (
    <TrackedLink className="card block hover:border-cyan-300/40" href={href} eventTarget={eventTarget} external={external}>
      <p className="text-sm uppercase tracking-[0.25em] text-cyan-200/80">{label}</p>
      <p className="mt-4 break-words text-lg font-semibold text-white">{value}</p>
    </TrackedLink>
  );
}

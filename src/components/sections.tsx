import Link from "next/link";
import { Reveal } from "@/components/motion";
import {
  experiences,
  localize,
  profile,
  projects,
  skills,
  type Locale,
  type Project,
} from "@/lib/content";

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
      "Selected work that best represents my engineering direction: AI systems, production product work, and trading infrastructure.",
    experience: "Experience",
    experienceText:
      "Internship experience across AI product engineering, trading frontend, large-scale internet products, and C++ quant development.",
    skills: "Technical Focus",
    resume: "Resume",
    resumeText: "Download the latest PDF resume. Replace these PDFs when your CV is updated.",
    aboutTitle: "About",
    aboutText:
      "My strongest direction is AI systems engineering: combining model-facing work with product judgment, frontend/backend implementation, and systems thinking from trading and quant contexts.",
  },
  zh: {
    eyebrow: "个人网站 / AI Systems / 量化工程",
    title: "构建面向真实产品、交易与基础设施的 AI 系统。",
    intro:
      "我是复旦计算机本科生，关注如何把 AI 想法变成可靠系统：Agent 工作流、全栈产品、交易界面和 C++ 量化工程。",
    viewProjects: "查看项目",
    contact: "联系我",
    featured: "精选项目",
    featuredText:
      "这些项目最能代表我的工程方向：AI systems、生产环境产品工程和交易基础设施。",
    experience: "实习经历",
    experienceText:
      "经历覆盖 AI 产品工程、交易前端、大规模互联网产品和 C++ 量化开发。",
    skills: "技术方向",
    resume: "简历",
    resumeText: "下载最新 PDF 简历。之后更新简历时只需要替换 public/resume 下的 PDF。",
    aboutTitle: "关于我",
    aboutText:
      "我当前最清晰的方向是 AI systems engineering：把模型相关能力、产品判断、前后端实现，以及交易/量化场景中的系统思维结合起来。",
  },
} as const;

export function HomePage({ locale }: { locale: Locale }) {
  const t = copy[locale];
  const prefix = locale === "en" ? "" : "/zh";

  return (
    <SiteContent>
      <section className="grid min-h-[calc(100vh-96px)] items-center gap-12 py-16 lg:grid-cols-[1.08fr_.92fr] lg:py-24">
        <Reveal>
          <p className="mb-5 text-sm font-medium uppercase tracking-[0.35em] text-cyan-200/80">
            {t.eyebrow}
          </p>
          <h1 className="max-w-5xl text-4xl font-semibold tracking-tight text-white sm:text-6xl lg:text-7xl">
            {t.title}
          </h1>
          <p className="mt-7 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
            {t.intro}
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Link className="btn-primary" href={`${prefix}/projects`}>
              {t.viewProjects}
            </Link>
            <Link className="btn-secondary" href={`${prefix}/contact`}>
              {t.contact}
            </Link>
          </div>
        </Reveal>

        <Reveal delay={0.12} className="relative">
          <div className="rounded-[2rem] border border-white/10 bg-white/[.06] p-5 shadow-2xl shadow-cyan-950/40 backdrop-blur">
            <div className="rounded-[1.5rem] border border-cyan-300/20 bg-slate-950/80 p-5">
              <div className="mb-6 flex items-center justify-between gap-4">
                <div>
                  <p className="text-sm text-slate-400">Current signal</p>
                  <p className="text-lg font-semibold text-cyan-100">
                    AI Systems Engineer
                  </p>
                </div>
                <span className="rounded-full bg-emerald-300/10 px-3 py-1 text-xs text-emerald-200">
                  Open to opportunities
                </span>
              </div>
              <div className="space-y-4">
                {[
                  "LLM agent workflow design",
                  "Full-stack AI product delivery",
                  "Trading systems and C++ quant development",
                  "Responsive, production-ready frontend engineering",
                ].map((item) => (
                  <div
                    className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[.04] p-4"
                    key={item}
                  >
                    <span className="size-2 rounded-full bg-cyan-300 shadow-[0_0_18px_rgba(103,232,249,.9)]" />
                    <span className="text-sm text-slate-200">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      <SectionIntro title={t.featured} text={t.featuredText} />
      <ProjectGrid locale={locale} featuredOnly />

      <SectionIntro title={t.experience} text={t.experienceText} />
      <ExperienceList locale={locale} />

      <SectionIntro
        title={t.skills}
        text={locale === "en" ? profile.headline : profile.headlineZh}
      />
      <SkillCloud />

      <ResumeBlock locale={locale} />
    </SiteContent>
  );
}

export function ProjectsPage({ locale }: { locale: Locale }) {
  return (
    <SiteContent>
      <PageHeader
        title={locale === "en" ? "Projects" : "项目"}
        text={
          locale === "en"
            ? "Case studies across AI agents, full-stack AI products, trading systems, and quant-oriented engineering."
            : "覆盖 AI Agent、全栈 AI 产品、交易系统和量化工程方向的项目案例。"
        }
      />
      <ProjectGrid locale={locale} />
    </SiteContent>
  );
}

export function ProjectPage({
  locale,
  project,
}: {
  locale: Locale;
  project: Project;
}) {
  const p = localize(project, locale);
  return (
    <SiteContent>
      <PageHeader title={p.title} text={p.summary} />
      <div className="mb-10 flex flex-wrap gap-2">
        {[project.category, project.year, ...project.stack].map((tag) => (
          <span className="tag" key={tag}>
            {tag}
          </span>
        ))}
      </div>
      <div className="grid gap-5 lg:grid-cols-[.8fr_1.2fr]">
        <CaseCard title={locale === "en" ? "Problem" : "问题"} text={p.problem} />
        <CaseCard title={locale === "en" ? "My Role" : "我的职责"} text={p.role} />
        <CaseCard
          title={locale === "en" ? "Architecture" : "架构"}
          text={p.architecture}
        />
        <CaseList
          title={locale === "en" ? "Key Decisions" : "关键技术决策"}
          items={p.decisions}
        />
        <CaseList title={locale === "en" ? "Results" : "结果"} items={p.results} />
        <CaseCard
          title={locale === "en" ? "Lessons Learned" : "复盘"}
          text={p.lessons}
        />
      </div>
    </SiteContent>
  );
}

export function ExperiencePage({ locale }: { locale: Locale }) {
  return (
    <SiteContent>
      <PageHeader
        title={locale === "en" ? "Experience" : "实习经历"}
        text={
          locale === "en"
            ? "A timeline of product engineering, AI workflow, trading frontend, and quant development experience."
            : "产品工程、AI 工作流、交易前端和量化开发经历时间线。"
        }
      />
      <ExperienceList locale={locale} />
    </SiteContent>
  );
}

export function ResumePage({ locale }: { locale: Locale }) {
  return (
    <SiteContent>
      <PageHeader
        title={locale === "en" ? "Resume" : "简历"}
        text={
          locale === "en"
            ? "Download the PDF resume or use the project pages for deeper technical context."
            : "下载 PDF 简历；如需更完整技术细节，可查看项目案例页面。"
        }
      />
      <ResumeBlock locale={locale} />
    </SiteContent>
  );
}

export function AboutPage({ locale }: { locale: Locale }) {
  const t = copy[locale];
  return (
    <SiteContent>
      <PageHeader title={t.aboutTitle} text={t.aboutText} />
      <div className="grid gap-5 lg:grid-cols-3">
        {[
          [
            "AI Systems",
            "Agent workflows, memory, evaluation, and practical product integration.",
          ],
          [
            "Product Engineering",
            "Frontend, full-stack delivery, responsive interfaces, and user workflows.",
          ],
          [
            "Quant / Trading",
            "Trading product exposure and C++ quant development foundations.",
          ],
        ].map(([title, text]) => (
          <Reveal className="card" key={title}>
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
        title={locale === "en" ? "Contact" : "联系"}
        text={
          locale === "en"
            ? "The fastest way to reach me is email. GitHub is the best place to inspect my engineering work."
            : "最快联系方式是邮件；GitHub 更适合查看我的工程项目。"
        }
      />
      <div className="grid gap-4 sm:grid-cols-3">
        <ContactCard label="Email" href={`mailto:${profile.email}`} value={profile.email} />
        <ContactCard label="GitHub" href={profile.github} value="github.com/ZiZuoLee" />
        <ContactCard label="LinkedIn" href={profile.linkedin} value="LinkedIn profile" />
      </div>
    </SiteContent>
  );
}

function SiteContent({ children }: { children: React.ReactNode }) {
  return <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">{children}</div>;
}

function PageHeader({ title, text }: { title: string; text: string }) {
  return (
    <Reveal className="py-16 sm:py-20">
      <p className="mb-4 text-sm font-medium uppercase tracking-[0.35em] text-cyan-200/80">
        Portfolio
      </p>
      <h1 className="max-w-4xl text-4xl font-semibold tracking-tight text-white sm:text-6xl">
        {title}
      </h1>
      <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">{text}</p>
    </Reveal>
  );
}

function SectionIntro({ title, text }: { title: string; text: string }) {
  return (
    <Reveal className="mb-8 mt-20 max-w-3xl">
      <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
        {title}
      </h2>
      <p className="mt-4 leading-8 text-slate-300">{text}</p>
    </Reveal>
  );
}

function ProjectGrid({
  locale,
  featuredOnly = false,
}: {
  locale: Locale;
  featuredOnly?: boolean;
}) {
  const visible = featuredOnly
    ? projects.filter((project) => project.featured)
    : projects;
  const prefix = locale === "en" ? "" : "/zh";

  return (
    <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
      {visible.map((project, index) => {
        const p = localize(project, locale);
        return (
          <Reveal delay={index * 0.04} className="card group" key={project.slug}>
            <div className="mb-6 flex items-center justify-between">
              <span className="tag">{project.category}</span>
              <span className="text-sm text-slate-500">{project.year}</span>
            </div>
            <h3 className="text-2xl font-semibold text-white group-hover:text-cyan-100">
              {p.title}
            </h3>
            <p className="mt-4 min-h-24 leading-7 text-slate-300">{p.summary}</p>
            <div className="mt-6 flex flex-wrap gap-2">
              {project.stack.slice(0, 4).map((item) => (
                <span className="tag-muted" key={item}>
                  {item}
                </span>
              ))}
            </div>
            <Link
              className="mt-7 inline-flex text-sm font-semibold text-cyan-200 hover:text-cyan-100"
              href={`${prefix}/projects/${project.slug}`}
            >
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
              <h3 className="mt-2 text-2xl font-semibold text-white">
                {experience.role}
              </h3>
              <p className="mt-1 text-slate-400">
                {experience.company} · {experience.location}
              </p>
            </div>
            <div className="flex max-w-2xl flex-wrap gap-2">
              {experience.stack.map((item) => (
                <span className="tag-muted" key={item}>
                  {item}
                </span>
              ))}
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
      {skills.map((skill) => (
        <span className="tag" key={skill}>
          {skill}
        </span>
      ))}
    </Reveal>
  );
}

function ResumeBlock({ locale }: { locale: Locale }) {
  const t = copy[locale];
  return (
    <Reveal className="my-20 rounded-[2rem] border border-cyan-300/20 bg-cyan-300/10 p-6 sm:p-8">
      <h2 className="text-3xl font-semibold text-white">{t.resume}</h2>
      <p className="mt-3 max-w-2xl leading-8 text-slate-300">{t.resumeText}</p>
      <div className="mt-7 flex flex-col gap-3 sm:flex-row">
        <a className="btn-primary" href={profile.resumeEn}>
          English CV
        </a>
        <a className="btn-secondary" href={profile.resumeZh}>
          中文简历
        </a>
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

function ContactCard({
  label,
  href,
  value,
}: {
  label: string;
  href: string;
  value: string;
}) {
  return (
    <a className="card block hover:border-cyan-300/40" href={href}>
      <p className="text-sm uppercase tracking-[0.25em] text-cyan-200/80">
        {label}
      </p>
      <p className="mt-4 break-words text-lg font-semibold text-white">{value}</p>
    </a>
  );
}

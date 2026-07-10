import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SiteShell } from "@/components/shell";
import { ProjectPage } from "@/components/sections";
import { getProject, projects } from "@/lib/content";
import { projectMetadata } from "@/lib/seo";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const project = getProject((await params).slug);
  return project ? projectMetadata(project, "zh") : {};
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const project = getProject((await params).slug);
  if (!project) notFound();
  return <SiteShell locale="zh" path={`/projects/${project.slug}`}><ProjectPage locale="zh" project={project} /></SiteShell>;
}

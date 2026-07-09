import { notFound } from "next/navigation";
import { SiteShell } from "@/components/shell";
import { ProjectPage } from "@/components/sections";
import { getProject, projects } from "@/lib/content";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    notFound();
  }

  return (
    <SiteShell locale="en">
      <ProjectPage locale="en" project={project} />
    </SiteShell>
  );
}

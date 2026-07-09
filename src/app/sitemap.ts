import type { MetadataRoute } from "next";
import { profile, projects } from "@/lib/content";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = profile.siteUrl.replace(/\/$/, "");
  const staticRoutes = [
    "",
    "/projects",
    "/experience",
    "/resume",
    "/about",
    "/contact",
    "/zh",
    "/zh/projects",
    "/zh/experience",
    "/zh/resume",
    "/zh/about",
    "/zh/contact",
  ];

  const projectRoutes = projects.flatMap((project) => [
    `/projects/${project.slug}`,
    `/zh/projects/${project.slug}`,
  ]);

  return [...staticRoutes, ...projectRoutes].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: route === "" || route === "/zh" ? 1 : 0.7,
  }));
}

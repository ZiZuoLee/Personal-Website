import { SiteShell } from "@/components/shell";
import { AboutPage } from "@/components/sections";

export default function Page() {
  return (
    <SiteShell locale="en">
      <AboutPage locale="en" />
    </SiteShell>
  );
}

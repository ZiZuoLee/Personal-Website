import { SiteShell } from "@/components/shell";
import { HomePage } from "@/components/sections";

export default function Home() {
  return (
    <SiteShell locale="en">
      <HomePage locale="en" />
    </SiteShell>
  );
}

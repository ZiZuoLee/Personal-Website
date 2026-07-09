import { SiteShell } from "@/components/shell";
import { HomePage } from "@/components/sections";

export default function Page() {
  return (
    <SiteShell locale="zh">
      <HomePage locale="zh" />
    </SiteShell>
  );
}

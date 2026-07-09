import { SiteShell } from "@/components/shell";
import { ContactPage } from "@/components/sections";

export default function Page() {
  return (
    <SiteShell locale="en">
      <ContactPage locale="en" />
    </SiteShell>
  );
}

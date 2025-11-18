import LorePageContent from "@/components/page-content/LorePageContent";
import { createRouteMetadata } from "@/lib/seo";

export const metadata = createRouteMetadata("lore");

export default function LorePage() {
  return <LorePageContent />;
}

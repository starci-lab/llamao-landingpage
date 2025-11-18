import ChillmaoPageContent from "@/components/page-content/ChillmaoPageContent";
import { createRouteMetadata } from "@/lib/seo";

export const metadata = createRouteMetadata("chillmao");

export default function ChillmaoPage() {
  return <ChillmaoPageContent />;
}

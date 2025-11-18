import HomePageContent from "@/components/page-content/HomePageContent";
import { createRouteMetadata } from "@/lib/seo";

export const metadata = createRouteMetadata("home");

export default function Home() {
  return <HomePageContent />;
}

import AboutPageContent from "@/components/page-content/AboutPageContent";
import { createRouteMetadata } from "@/lib/seo";

export const metadata = createRouteMetadata("about");

export default function AboutPage() {
  return <AboutPageContent />;
}

import TestPageContent from "@/components/page-content/TestPageContent";
import { createRouteMetadata } from "@/lib/seo";

export const metadata = createRouteMetadata("test");

export default function TestPage() {
  return <TestPageContent />;
}

import RewardPoolsPageContent from "@/components/page-content/RewardPoolsPageContent";
import { createRouteMetadata } from "@/lib/seo";

export const metadata = createRouteMetadata("rewardPools");

export default function RewardPoolsPage() {
  return <RewardPoolsPageContent />;
}

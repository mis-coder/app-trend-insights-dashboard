import Description from "@/components/Dashboard/description";
import FeaturedApps from "@/components/Dashboard/featured-apps";
import MarketShareChart from "@/components/Dashboard/market-share";
import Summary from "@/components/Dashboard/summary";

export default async function Home() {
  return (
    <main className="h-full w-screen bg-silver-light p-2">
      <Description />
      <Summary />
      <MarketShareChart />
      <FeaturedApps />
    </main>
  );
}

import Description from "@/components/Dashboard/description";
import FeaturedApps from "@/components/Dashboard/featured-apps";
import FeaturedCategories from "@/components/Dashboard/featured-categories";
import MarketShareChart from "@/components/Dashboard/market-share";
import Summary from "@/components/Dashboard/summary";

export default async function Home() {
  return (
    <main className="h-full w-screen bg-silver-light p-4">
      <Description />
      <Summary />
      <div className="w-full flex flex-col-reverse md:flex-row lg:flex-row gap-1 md:gap-4 lg:gap-4">
        <div className="h-auto w-full md:w-8/12 lg:w-8/12">
          <MarketShareChart />
          <FeaturedCategories />
        </div>
        <FeaturedApps />
      </div>
    </main>
  );
}

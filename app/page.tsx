import Description from "@/components/Dashboard/description";
import Summary from "@/components/Dashboard/summary";

export default async function Home() {
  return (
    <main className="h-full w-screen bg-silver-light p-2">
      <Description />
      <Summary />
    </main>
  );
}

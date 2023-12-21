import Dashboard from "@/components/dashboard";
import { promises as fs } from "fs";

export default async function Home() {
  const file = await fs.readFile(process.cwd() + "/data/appInfo.json", "utf-8");
  const data = JSON.parse(file);

  return (
    <main>
      <Dashboard data={data} />
    </main>
  );
}

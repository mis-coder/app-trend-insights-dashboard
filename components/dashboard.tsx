"use client";

import {
  BarElement,
  CategoryScale,
  Chart,
  Legend,
  LinearScale,
  Tooltip,
} from "chart.js";
import MarketShareChart from "./charts/market-share";

Chart.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

interface IDashboardProps {}

const Dashboard: React.FC<IDashboardProps> = ({}) => {
  return (
    <div className="h-screen w-screen bg-black flex justify-center flex-wrap gap-10">
      <MarketShareChart />
      {/* <AppPerformanceChart />
      <UserSentimentChart />
      <RiskAssesmentChart />
      <TableView /> */}
    </div>
  );
};

export default Dashboard;

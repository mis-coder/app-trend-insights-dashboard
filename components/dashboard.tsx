"use client";

import { AppInfoItem } from "@/types";
import {
  BarElement,
  CategoryScale,
  Chart,
  Legend,
  LinearScale,
  Tooltip,
} from "chart.js";
import TableView from "./UI/table";
import AppPerformanceChart from "./charts/app-performance";
import MarketShareChart from "./charts/market-share";
import RiskAssesmentChart from "./charts/risk-assesment";
import UserSentimentChart from "./charts/user-sentiment";

Chart.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

interface IDashboardProps {
  data: AppInfoItem[];
}

const Dashboard: React.FC<IDashboardProps> = ({ data }) => {
  // console.log("data: ", data);
  return (
    <div className="h-screen w-screen bg-black flex justify-center flex-wrap gap-10">
      <MarketShareChart />
      <AppPerformanceChart />
      <UserSentimentChart />
      <RiskAssesmentChart />
      <TableView />
    </div>
  );
};

export default Dashboard;

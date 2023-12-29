"use client";

import {
  BarElement,
  CategoryScale,
  Chart,
  Legend,
  LinearScale,
  Tooltip,
} from "chart.js";
import ContentRatingChart from "./charts/content-rating";
import MarketShareChart from "./charts/market-share";

Chart.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

interface IDashboardProps {}

const Dashboard: React.FC<IDashboardProps> = ({}) => {
  return (
    <div className="h-full w-full">
      <MarketShareChart />
      <ContentRatingChart />
    </div>
  );
};

export default Dashboard;

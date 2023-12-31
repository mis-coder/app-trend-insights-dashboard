"use client";

import {
  BarElement,
  CategoryScale,
  Chart,
  Legend,
  LinearScale,
  Tooltip,
} from "chart.js";

Chart.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

interface IDashboardProps {}

const Dashboard: React.FC<IDashboardProps> = ({}) => {
  return <div className="h-full w-full">Dashboard</div>;
};

export default Dashboard;

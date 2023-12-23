import { formatBigNumber } from "@/lib/utils";
import {
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Colors,
  Legend,
  LinearScale,
  Title,
  Tooltip,
} from "chart.js";
import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  Colors,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

interface MarketShareChartProps {}

const MarketShareChart: React.FC<MarketShareChartProps> = () => {
  const [data, setData] = useState<Record<string, number>[]>([]);

  const getMarketShareByCategory = async () => {
    const res = await fetch("/api/market-share-by-category", {
      method: "GET",
    });

    const data = await res.json();
    setData(data);
  };

  useEffect(() => {
    getMarketShareByCategory();
  }, []);

  const options = {
    scales: {
      y: {
        ticks: {
          callback: function (value, index, ticks) {
            return formatBigNumber(value, 0);
          },
        },
      },
    },
    responsive: true,
    plugins: {
      colors: {
        enabled: true,
      },
      legend: {
        display: false,
        position: "top" as const,
      },
      title: {
        display: true,
        text: "Market Share by App Category",
      },
    },
  };

  const chartData = {
    datasets: [
      {
        label: "Total Installs",
        data,
      },
    ],
  };

  return (
    <div className="text-white h-full w-full">
      <Bar data={chartData} options={options} />
    </div>
  );
};

export default MarketShareChart;

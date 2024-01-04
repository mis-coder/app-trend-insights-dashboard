"use client";
import { IMarketShareItem } from "@/types";
import {
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Colors,
  LinearScale,
  Tooltip,
} from "chart.js";
import { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Colors);

const MarketShareChart = () => {
  const [data, setData] = useState<IMarketShareItem[]>([]);

  const getMarketShareData = async () => {
    const res = await fetch("/api/apps/market-share", {
      method: "GET",
    });
    const { data } = await res.json();
    console.log("data: ", data);
    setData(data);
  };

  useEffect(() => {
    getMarketShareData();
  }, []);

  return (
    <div className="h-auto w-full  bg-white rounded-lg p-4 pb-8 shadow-outline my-4">
      <h1 className="text-green font-bold text-xl">
        Market Share by App Category
      </h1>
      <div className="p-4">
        <Bar
          data={{
            datasets: [
              {
                label: "App Count",
                data,
                parsing: {
                  xAxisKey: "app_count",
                  yAxisKey: "category",
                },
                backgroundColor: "#4bc0c0",
                borderRadius: 3,
              },
            ],
          }}
          options={{
            maintainAspectRatio: true,
            responsive: true,
            indexAxis: "y",
            scales: {
              y: {
                grid: {
                  display: false,
                },
              },
              x: {
                border: {
                  dash: [6, 5],
                },
              },
            },
          }}
        />
      </div>
    </div>
  );
};

export default MarketShareChart;

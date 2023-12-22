import { generateRandomColors } from "@/lib/utils";
import { ArcElement, Chart as ChartJS, Legend, Tooltip } from "chart.js";
import React, { useEffect, useState } from "react";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

interface MarketShareChartProps {}

const MarketShareChart: React.FC<MarketShareChartProps> = () => {
  const [labels, setLabels] = useState<string[]>([]);
  const [data, setData] = useState<number[]>([]);

  const getMarketShareByCategory = async () => {
    const res = await fetch("/api/market-share-by-category", {
      method: "GET",
    });

    const data = await res.json();

    setLabels(Object.keys(data));
    setData(Object.values(data));
  };

  useEffect(() => {
    getMarketShareByCategory();
  }, []);

  return (
    <div className="text-white h-full w-full">
      <Pie
        data={{
          labels,
          datasets: [
            {
              label: "Total Installs",
              data,
              backgroundColor: generateRandomColors(data.length),
              borderWidth: 1,
            },
          ],
        }}
      />
    </div>
  );
};

export default MarketShareChart;

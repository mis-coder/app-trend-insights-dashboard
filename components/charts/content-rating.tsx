import { CategoryNumberMap } from "@/types";
import { useEffect, useState } from "react";

import {
  ArcElement,
  Chart as ChartJS,
  Colors,
  Legend,
  Title,
  Tooltip,
} from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Legend, Title, Tooltip, Colors);

interface ContentRatingChartProps {}
const ContentRatingChart: React.FC<ContentRatingChartProps> = () => {
  const [data, setData] = useState<CategoryNumberMap>();

  const getContentRating = async () => {
    const res = await fetch("/api/content-rating", {
      method: "GET",
    });

    const data = await res.json();
    setData(data);
  };

  useEffect(() => {
    getContentRating();
  }, []);

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "right" as const,
      },
      title: {
        display: true,
        text: "Content Rating",
      },
      colors: {
        forceOverride: true,
      },
    },
  };

  const chartData = {
    labels: [...Object.keys(data ?? [])],
    datasets: [
      {
        label: "No. of reviews",
        data: [...Object.values(data ?? [])],
      },
    ],
  };

  return (
    <div className="h-screen w-screen">
      <Pie data={chartData} options={options} />
    </div>
  );
};

export default ContentRatingChart;

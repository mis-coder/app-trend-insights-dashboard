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

  const chartData = {
    labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
    datasets: [
      {
        label: "# of Votes",
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="h-screen w-screen">
      <Pie
        data={{
          labels: [...Object.keys(data ?? [])],
          datasets: [
            {
              label: "No. of reviews",
              data: [...Object.values(data ?? [])],
            },
          ],
        }}
        options={{
          plugins: {
            legend: {
              position: "right",
            },
            title:{
              display:true,
              text: 'Content Rating'
            }
          },
        }}
      />
    </div>
  );
};

export default ContentRatingChart;

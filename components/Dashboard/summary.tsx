"use client";
import { Overview } from "@/types";
import { useEffect, useState } from "react";
import SummaryCard from "../UI/summary-card";

const Summary = () => {
  const [data, setData] = useState<Record<Overview, number>>({
    total_app_count: 0,
    total_installs: 0,
    average_reviews: 0,
    average_rating: 0.0,
  });

  const getSummary = async () => {
    const res = await fetch("/api/apps/overview", {
      method: "GET",
    });
    const data = await res.json();
    setData({ ...data });
  };

  useEffect(() => {
    getSummary();
  }, []);

  return (
    <div className="h-auto w-full mt-4 flex flex-wrap md:flex-nowrap lg:flex-nowrap md:flex-row lg:flex-row items-center gap-2 justify-around">
      <SummaryCard
        title="Total Apps Count"
        value={data[Overview.TOTAL_APP_COUNT]}
        bgColor="#36a2eb"
      />
      <SummaryCard
        title="Total Installs"
        value={data[Overview.TOTAL_INSTALLS]}
        bgColor="#ffcd56"
      />
      <SummaryCard
        title="Average Reviews"
        value={data[Overview.AVERAGE_REVIEW]}
        bgColor="#4bc0c0"
      />
      <SummaryCard
        title="Average Rating"
        value={data[Overview.AVERAGE_RATING]}
        bgColor="#9966ff"
      />
    </div>
  );
};

export default Summary;

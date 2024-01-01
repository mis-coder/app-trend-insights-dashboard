import React from "react";

interface SummaryCardProps {
  title: string;
  value: number;
  bgColor?: string;
}

const SummaryCard: React.FC<SummaryCardProps> = ({
  title,
  value,
  bgColor = "white",
}) => {
  return (
    <div
      className="h-32 w-1/3 md:w-1/4 lg:w-1/4 text-white rounded-lg p-4 pb-8 shadow-outline flex-auto"
      style={{ backgroundColor: bgColor }}
    >
      <p className="text-sm">{title}</p>
      <h1 className="text-3xl md:text-5xl lg:text-5xl mt-2 font-bold">{value}</h1>
    </div>
  );
};

export default SummaryCard;

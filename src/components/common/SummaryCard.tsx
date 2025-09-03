import React from "react";

interface ISummaryCardProps {
  title: string;
  value: string;
  color?: "green" | "pink";
}

const SummaryCard: React.FC<ISummaryCardProps> = ({
  title,
  value,
  color = "green",
}) => {
  const colors: Record<string, string> = {
    green: "bg-[#38A38A] text-white",
    pink: "bg-[#FF7D9D] text-white",
  };

  return (
    <div className={`${colors[color]} px-6 py-4 rounded-md text-center`}>
      <p className="text-sm">{title}</p>
      <p className="text-lg font-semibold">{value}</p>
    </div>
  );
};

export default SummaryCard;

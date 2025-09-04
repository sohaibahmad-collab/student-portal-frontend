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
    green: "bg-[#4AAA9A] text-white",
    pink: "bg-[#FF6897] text-white",
  };

  return (
    <div className={`${colors[color]} px-6 py-4  text-center h-[99px] w-[146px] rounded-[6px]`}>
      <p className="text-[16px] font-poppins">{title}</p>
      <p className="text-[24px] font-poppins">{value}</p>
    </div>
  );
};

export default SummaryCard;

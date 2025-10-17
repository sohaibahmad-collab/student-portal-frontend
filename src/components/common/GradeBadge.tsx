import React from "react";

interface IGradeBadgeProps {
  grade: string;
}

const GradeBadge: React.FC<IGradeBadgeProps> = ({ grade }) => {
  const getBadgeStyles = (grade: string): string => {
    switch (grade) {
      case "A+":
        return "flex items-center justify-center bg-[#686563] font-poppins font-medium text-base leading-[100%] tracking-[0%] text-[#C0C0C0] text-center";
      case "B+":
        return "flex items-center justify-center bg-[#FFF7F5] font-poppins font-medium text-base leading-[100%] tracking-[0%] text-[#FFB59D] text-center"
      case "A-":
        return "flex items-center justify-center bg-[#686563] font-poppins font-medium text-base leading-[100%] tracking-[0%] text-[#C0C0C0] text-center";
      case "B-":
        return "flex items-center justify-center bg-[#FFF7F5] font-poppins font-medium text-base leading-[100%] tracking-[0%] text-[#FFB59D] text-center"
      case "F":
        return "flex items-center justify-center bg-[#FF689780] font-poppins font-medium text-base leading-[100%] tracking-[0%] text-[#FF6897] text-center";
      default:
        return "bg-gray-200 text-gray-700";
    }
  };

  return (
    <div className={`px-3 py-1 w-[110px] h-[38px] rounded text-sm ${getBadgeStyles(grade)} rounded-lg`}>
      {grade}
    </div>
  );
};

export default GradeBadge;

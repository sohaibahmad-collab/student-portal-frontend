import React from "react";

interface IGradeBadgeProps {
  grade: string;
}

const GradeBadge: React.FC<IGradeBadgeProps> = ({ grade }) => {
  const getBadgeStyles = (grade: string): string => {
    switch (grade) {
      case "A":
        return "bg-green-200 text-green-700";
      case "B+":
        return "flex items-center justify-center bg-[#FFF7F5] font-poppins font-medium text-base leading-[100%] tracking-[0%] text-[#FFB59D] text-center"
      case "B":
        return "bg-blue-200 text-blue-700";
      case "C":
        return "bg-yellow-200 text-yellow-700";
      case "D":
        return "bg-orange-200 text-orange-700";
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

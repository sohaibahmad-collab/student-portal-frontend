import React from "react";

interface IGradeBadgeProps {
  grade: string;
}

const GradeBadge: React.FC<IGradeBadgeProps> = ({ grade }) => {
  const getBadgeStyles = (grade: string): string => {
    switch (grade) {
      case "A+":
      case "A":
        return "bg-green-200 text-green-700";
      case "B+":
      case "B":
        return "bg-blue-200 text-blue-700";
      case "C":
        return "bg-yellow-200 text-yellow-700";
      case "D":
        return "bg-orange-200 text-orange-700";
      case "F":
        return "bg-pink-200 text-pink-700";
      default:
        return "bg-gray-200 text-gray-700";
    }
  };

  return (
    <span className={`px-3 py-1 rounded text-sm ${getBadgeStyles(grade)}`}>
      {grade}
    </span>
  );
};

export default GradeBadge;

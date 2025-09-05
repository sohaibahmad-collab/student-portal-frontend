import React from "react";
import { MoreVertical, Edit, Trash } from "lucide-react";

interface IButtonProps {
  label: string;
  icon?: String;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "danger";
  disabled?: boolean;
}

const Button: React.FC<IButtonProps> = ({
  label,
  icon,
  onClick,
  variant = "primary",
  disabled = false,
}) => {
  const variantStyles: Record<string, string> = {
    primary: "bg-[#38A38A] text-white hover:bg-[#2e8670]",
    secondary:
      "border border-[#EFF2F7] bg-white  font-poppins font-medium text-sm leading-[100%] tracking-[0%] text-[#343744] hover:bg-gray-100",
    danger: "bg-[#FF7D9D] text-white hover:bg-[#e66784]",
  };

  if (icon) {
    return (
      <button
        onClick={onClick}
        className={`flex items-center gap-2 px-4 py-2 hover:bg-gray-100 w-full text-sm ${
          label === "Delete" ? "text-red-500" : ""
        }`}
      >
        {label === "Edit" ? <Edit size={16} /> : null}
        {label === "Delete" ? <Trash size={16} /> : null}
        {label === "" ? <MoreVertical size={18} /> : null}
        {label}
      </button>
    );
  }

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`rounded-md font-medium transition px-6 py-2 text-sm
        ${variantStyles[variant]}
        ${disabled ? "opacity-50 cursor-not-allowed" : ""}`}
    >
      {label}
    </button>
  );
};

export default Button;

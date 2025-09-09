import React from "react";
import type  { LucideIcon } from "lucide-react";

interface IButtonProps {
  type?: "button" | "submit" | "reset";
  label: string;
  Icon?: LucideIcon;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "danger";
  disabled?: boolean;
}

const Button: React.FC<IButtonProps> = ({
  label,
  Icon,
  type,
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

  if (Icon) {
    return (
      <button
        onClick={onClick}
        className="cursor-pointer flex items-center gap-2 px-4 py-2 hover:bg-gray-100 w-full text-sm"
      > 
        <Icon size={16} />
        {label}
      </button>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`rounded-md font-medium transition px-6 py-2 text-sm cursor-pointer
        ${variantStyles[variant]}
        ${disabled ? "opacity-50 cursor-not-allowed" : ""}`}
    >
      {label}
    </button>
  );
};

export default Button;

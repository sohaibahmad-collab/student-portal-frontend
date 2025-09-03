import React from "react";

interface IButtonProps {
  label: string;
  icon?: React.ReactNode; 
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
    secondary: "bg-white border text-gray-700 hover:bg-gray-100",
    danger: "bg-[#FF7D9D] text-white hover:bg-[#e66784]",
  };

  
  if (icon) {
    return (
      <button
        onClick={onClick}
        disabled={disabled}
        className={`flex items-center gap-2 rounded-md font-medium transition px-4 py-2 text-sm
          ${variantStyles[variant]}
          ${disabled ? "opacity-50 cursor-not-allowed" : ""}`}
      >
        {icon}
      </button>
      
    );
  }


  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`rounded-md font-medium transition px-6 py-2 text-sm
        ${variantStyles[variant]}
        ${label === "Login" ? "w-full" : ""}
        ${label === "Sign Up" ? "w-full" : ""}
        ${disabled ? "opacity-50 cursor-not-allowed" : ""}`}
    >
      {label}
    </button>
  );
};

export default Button;

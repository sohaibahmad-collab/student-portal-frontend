import React from "react";
import type  { LucideIcon } from "lucide-react";

interface IButtonProps {
  type?: "button" | "submit" | "reset";
  image?:string
  label: string;
  Icon?: LucideIcon;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "danger" | "dirtygreen";
  disabled?: boolean;
}

const Button: React.FC<IButtonProps> = ({
  label,
  Icon,
  image,
  type,
  onClick,
  variant = "primary",
  disabled = false,
}) => {
  const variantStyles: Record<string, string> = {
    primary: "bg-[#4AAA9ACC] px-10 border border-black text-white hover:bg-[#2e8670] font-noto font-normal text-base leading-6 tracking-[0%] text-center",
    secondary:
      "border border-[#EFF2F7] bg-white  font-poppins font-medium text-sm leading-[100%] tracking-[0%] text-[#343744] hover:bg-gray-100",
    danger: "bg-[#FF7D9D] text-white hover:bg-[#e66784]",
    dirtygreen:"bg-white border border-black text-black hover:bg-[#2e8670] font-noto font-normal text-base leading-6 tracking-[0%] text-center"
  };

  if (Icon) {
    return (
      <button
        onClick={onClick}
        className="cursor-pointer flex items-center gap-2 px-4 py-2 hover:bg-[#F1F2F6]   w-full text-[#131635] font-poppins  text-base leading-[100%] tracking-[0%]"
      > 
        <Icon size={16} />
        {label}
      </button>
    );
  }


  if (image) {
    return (
      <button
        onClick={onClick}
        className="cursor-pointer flex items-center gap-2 px-4 py-2 hover:bg-[#F1F2F6]   w-full text-[#131635] font-poppins  text-base leading-[100%] tracking-[0%]"
      > 
       <img src={image} alt={"icon"} className="w-[14px] h-[14px] mt-1" />
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

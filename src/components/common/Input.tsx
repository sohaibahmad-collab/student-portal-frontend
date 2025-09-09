import type { LucideIcon } from "lucide-react";
import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";
interface IInputProps {
  label: string;
  error?: string;
  type?: string;
  value?: string;
  placeholder?: string;
  Icon?: LucideIcon;
  onChange?: (value: string) => void;
}

export default function Input({
  label,
  error,
  Icon,
  type = "text",
  value,
  placeholder,
  onChange,
}: IInputProps) {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div>
      <label className="block mb-1 font-[Noto Sans] font-semibold text-xs leading-[18px] tracking-normal text-[#666666]">
        {label}
      </label>
      <div
        className={`flex items-center h-10 border rounded-lg p-4 gap-2 opacity-100 ${
          error ? "border-2 border-[#EB5757]" : "border-[#CCCCCC]"
        }`}
      >
        {Icon && <Icon size={18} className="text-gray-400 mr-2" />}
        <input
          type={type==='password'?(showPassword ? "text" : "password"):type}
          value={value}
          placeholder={placeholder}
          onChange={(e) => onChange && onChange(e.target.value)}
          className="w-full focus:outline-none text-[#343744] font-[Noto Sans] font-normal text-base leading-6 tracking-normal "
        />
        {type === "password" ? (
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="mt-4 -translate-y-1/2 text-gray-500 hover:text-gray-700"
          >
            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
          </button>
        ) : null}
        {error && (
          <img src="/warningicon.png" alt="error" className="w-5 h-5" />
        )}
      </div>
      {error && (
        <p className="font-noto  text-[12px] leading-[18px] tracking-normal text-[#EB5757] mt-1">
          {error}
        </p>
      )}
    </div>
  );
}


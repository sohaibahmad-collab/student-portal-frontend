import type { LucideIcon } from "lucide-react";

interface IInputProps {
  label: string;
  type?: string;
  value?: string;
  placeholder?: string;
  icon?: LucideIcon;
  onChange?: (value: string) => void;
}

export default function Input({
  label,
  type = "text",
  value,
  placeholder,
  icon: Icon,
  onChange,
}: IInputProps) {
  return (
    <div>
      <label className="block text-sm font-medium mb-1">{label}</label>
      <div className="flex items-center border rounded-lg px-3 py-2 focus-within:ring-2 focus-within:ring-[#38A38A]">
        {Icon && <Icon size={18} className="text-gray-400 mr-2" />}
        <input
          type={type}
          value={value}
          placeholder={placeholder}
          onChange={(e) => onChange && onChange(e.target.value)}
          className="w-full focus:outline-none text-sm"
        />
      </div>
    </div>
  );
}

import type { LucideIcon } from "lucide-react";
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
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
}

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

interface IDropdownProps {
  label: string;
  value: string;
  options: string[];
  placeholder?: string;
  error?:string
  onChange: (value: string) => void;
}

export default function Dropdown({
  label,
  error,
  value,
  options,
  placeholder = "Select",
  onChange,
}: IDropdownProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className="mb-4 w-full">
          <label className="block mb-1 font-[Noto Sans] font-semibold text-xs leading-[18px] tracking-normal text-[#666666]">{label}</label>

      <div className="relative">
        <div
          className="flex items-center justify-between w-full h-10 border border-[#CCCCCC] rounded-lg px-4 py-2 text-sm cursor-pointer bg-white"
          onClick={() => setOpen(!open)}
        >
          <span>{value || placeholder}</span>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setOpen(!open);
            }}
            className="ml-2 focus:outline-none"
          >
            {open ? (
              <ChevronUp size={18} className="text-gray-500" />
            ) : (
              <ChevronDown size={18} className="text-gray-500" />
            )}
          </button>
        </div>

        {open && (
          <div className=" mt-0 border border-[#CCCCCC] rounded-lg bg-white shadow-lg z-10">
            {options.map((option, idx) => (
              <div
                key={idx}
                className="px-4 py-2 cursor-pointer  hover:bg-[#4AAA9ACC] hover:text-white"
                onClick={() => {
                  onChange(option);
                  setOpen(false);
                }}
              >
                {option}
              </div>
            ))}
          </div>
        )}
      </div>
        <p className="font-noto  text-[12px] leading-[18px] tracking-normal text-[#EB5757] mt-1">
          {error}
        </p>
    </div>
  );
}

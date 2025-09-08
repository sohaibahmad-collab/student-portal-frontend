import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

interface IDropdownProps {
  label: string;
  value: string;
  options: string[];
  placeholder?: string;
  onChange: (value: string) => void;
}

export default function Dropdown({
  label,
  value,
  options,
  placeholder = "Select",
  onChange,
}: IDropdownProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className="mb-4 w-full">
      <label className="block text-sm font-medium mb-2">{label}</label>

      <div className="relative">
        <div
          className="flex items-center justify-between w-full border rounded-md px-4 py-2 text-sm cursor-pointer bg-white"
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
          <div className=" mt-2 border rounded-md bg-white shadow-lg z-10">
            {options.map((option, idx) => (
              <div
                key={idx}
                className="px-4 py-2 cursor-pointer hover:bg-gray-100"
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
    </div>
  );
}

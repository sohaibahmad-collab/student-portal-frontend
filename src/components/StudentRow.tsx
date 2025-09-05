import { useState } from "react";
import GradeBadge from "@src/components/common/GradeBadge";
import Button from "@src/components/common/Button";
import type { IStudententry } from "@src/types/studentEntry";
import { MoreVertical, Edit, Trash } from "lucide-react";


const StudentRow: React.FC<IStudententry> = ({ student }: IStudententry) => {
  const [openDropdown, setOpenDropdown] = useState(false);

  return (
    <tr className="border-b-2 border-b-[#F6F6F6] transition">
      <td className="py-3 px-4 text-[#343744] text-[16px] font-poppins font-medium text-base leading-[100%] tracking-[0%]">{student.name}</td>
      <td className="py-3 px-4 text-[#343744] text-[16px] font-poppins font-medium text-base leading-[100%] tracking-[0%]">{student.marks}</td>
      <td className="py-3 px-4 text-[#343744] text-[16px] font-poppins font-medium text-base leading-[100%] tracking-[0%]">{student.subject}</td>
      <td className="py-3 px-4 text-[#343744] text-[16px] font-poppins font-medium text-base leading-[100%] tracking-[0%]">
        <GradeBadge grade={student.grade} />
      </td>
      <td className="text-[#343744] text-[16px] font-poppins font-medium text-base leading-[100%] tracking-[0%]">
        {student.date}
        <p className="text-xs text-gray-500">at {student.time}</p>
      </td>
      <td className="py-3 px-4 relative">
        <Button
          label=""
          Icon={MoreVertical}
          variant="secondary"
          onClick={() => setOpenDropdown(!openDropdown)}
        />
        {openDropdown && (
          <div className="absolute right-0 top-0 mt-0 w-32 bg-white border rounded shadow-lg z-300">
            <Button Icon={Edit} label="Edit" />
            <Button Icon={Trash} label="Delete" />
          </div>
        )}
      </td>
    </tr>
  );
};

export default StudentRow;

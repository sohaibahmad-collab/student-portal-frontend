import GradeBadge from "@src/components/common/GradeBadge";
import Button from "@src/components/common/Button";
import type { IStudententry } from "@src/types/studentEntry";
import { MoreVertical} from "lucide-react";
import { useStudents } from "@src/hooks/useStudents";
import { useNavigate } from "react-router-dom";
import { useDropdown } from "@src/context/DropdownContext";
import Subtract from "@src/assets/Subtract.png"
import Trash from "@src/assets/Trash.png"


const StudentRow: React.FC<IStudententry> = ({_id,grade,date,time,name,marks,subject}:IStudententry) => {
  const {deleteStudent}=useStudents()
  const navigate = useNavigate();
  const { openRow, setOpenRow } = useDropdown();


  return (
    <tr className="border-b-2 border-b-[#F6F6F6] transition">
      <td className="py-3 px-4 text-[#343744] text-[16px] font-poppins font-medium text-base leading-[100%] tracking-[0%]">{name}</td>
      <td className="py-3 px-4 text-[#343744] text-[16px] font-poppins font-medium text-base leading-[100%] tracking-[0%]">{marks}</td>
      <td className="py-3 px-4 text-[#343744] text-[16px] font-poppins font-medium text-base leading-[100%] tracking-[0%]">{subject}</td>
      <td className="py-3 px-4 text-[#343744] text-[16px] font-poppins font-medium text-base leading-[100%] tracking-[0%]">
        <GradeBadge grade={grade} />
      </td>
      <td className="text-[#343744] text-[16px] font-poppins font-medium text-base leading-[100%] tracking-[0%]">
        {date}
        <p className="text-xs text-gray-500">at {time}</p>
      </td>
      <td className="py-3 px-4 relative">
        <Button
          label=""
          Icon={MoreVertical}
          variant="secondary"
          onClick={() => setOpenRow(_id)}
        />
        {openRow===_id && (
          <div className="absolute right-0 top-0 mt-0 w-32 bg-white  z-300">
            <Button image={Subtract} label="Edit" onClick={()=>navigate(`/edit-student/${_id}`)} />
            <Button image={Trash} label="Delete" onClick={()=>deleteStudent(_id)}/>
            
          </div>
        )}
      </td>
    </tr>
  );
};

export default StudentRow;

import { useState } from "react";
import { MoreVertical, Edit, Trash } from "lucide-react";
import GradeBadge from "@src/components/common/GradeBadge";
import Button from "@src/components/common/Button";
interface IStudent {
  id: number;
  name: string;
  marks: number;
  subject: string;
  grade: string;
  date: string;
  time: string;
}

interface IStudentRowProps {
  student: IStudent;
}

const StudentRow: React.FC<IStudentRowProps> = ({ student }) => {
  const [openDropdown, setOpenDropdown] = useState(false);

  return (
    <tr className="border-b hover:bg-gray-50 transition">
      <td className="py-3 px-4">{student.name}</td>
      <td className="py-3 px-4">{student.marks}</td>
      <td className="py-3 px-4">{student.subject}</td>
      <td className="py-3 px-4">
        <GradeBadge grade={student.grade} />
      </td>
      <td className="py-3 px-4">
        {student.date}
        <p className="text-xs text-gray-500">at {student.time}</p>
      </td>
      <td className="py-3 px-4 relative">
        <Button label="" icon={<MoreVertical size={16}/>} variant="secondary" onClick={() => setOpenDropdown(!openDropdown)} />
        {openDropdown && (
          <div className="absolute right-0 mt-2 w-32 bg-white border rounded shadow-lg z-50">
            <Button label="Edit" icon={<Edit size={16} />} variant="secondary" />
            <Button label="Delete" icon={<Trash size={16} />} variant="danger" />
          </div>
        )}
      </td>
    </tr>
  );
};

export default StudentRow;

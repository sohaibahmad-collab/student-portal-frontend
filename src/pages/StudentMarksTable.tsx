import Button from "@src/components/common/Button";
import SummaryCard from "@src/components/common/SummaryCard";
import StudentRow from "@src/components/StudentRow";
import { useNavigate } from "react-router-dom";
import type { IStudententry } from "@src/types/studentEntry";
export default function StudentMarksTable() {
  const navigate = useNavigate();

  const students:IStudententry[] = [
    {
      id: "1",
      name: "Ali Tahir",
      marks: 80,
      subject: "English",
      grade: "B+",
      date: "Jan 29, 2022",
      time: "08.00 PM",
    },
    {
      id: "2",
      name: "Ameer Hamza",
      marks: 33,
      subject: "Math",
      grade: "F",
      date: "Jan 29, 2022",
      time: "08.00 PM",
    },
  ];

  return (
    <div className="min-h-screen w-full bg-white ">
      <h1 className="font-poppins font-medium text-2xl leading-[100%] tracking-[0%] text-black mb-8 ml-16 mt-9 ">
        Student Portal
      </h1>
      <div className="absolute w-full h-[2px] top-[80px] bg-[background:#E8ECF5] "></div>
      <div className="mx-14">
      <div className="flex justify-between mb-3 ">
        <label className="py-4 px-3 ml-0 font-poppins font-medium text-lg leading-[100%] tracking-[0%] text-[#2E3136]">
          Students summary
        </label>
        <Button
          label="+Add Data"
          variant="secondary"
          onClick={() => navigate("/add-student")}
        />
      </div>
      </div>
      <div className="mx-14">
      <div className="w-full flex justify-between flex-row flex-wrap mb-6">
        <SummaryCard title="Top Grade" value="A+" color="green" />
        <SummaryCard title="Most Passed" value="English" color="green" />
        <SummaryCard title="Lowest Grade" value="F" color="pink" />
        <SummaryCard title="Most Failed" value="Math" color="pink" />
      </div>
      </div>

      <div className="bg-white  rounded-md overflow-hidden">
        <div className="mx-14">
        <table className="w-full text-left ">
          <thead className="border-b bg-white">
            <tr className="border-b-2 border-b-[#F6F6F6]">
              <th className="py-3 px-4 text-[#343744] text-[16px] font-poppins font-medium text-base leading-[100%] tracking-[0%]">
                Name
              </th>
              <th className="py-3 px-4 text-[#343744] text-[16px] font-poppins font-medium text-base leading-[100%] tracking-[0%]">
                Marks
              </th>
              <th className="py-3 px-4 text-[#343744] text-[16px] font-poppins font-medium text-base leading-[100%] tracking-[0%]">
                Subject
              </th>
              <th className="py-3 px-4 pl-10  text-[#343744] text-[16px] font-poppins font-medium text-base leading-[100%] tracking-[0%]">
                Grade
              </th>
              <th className="py-3 px-4 text-[#343744] text-[16px] font-poppins font-medium text-base leading-[100%] tracking-[0%]">
                Date
              </th>
              <th className="py-3 px-4 text-[#343744] text-[16px] font-poppins font-medium text-base leading-[100%] tracking-[0%]">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {students.map((s) => (
              <StudentRow key={s.id} {...s} />
            ))}
          </tbody>
        </table>
        </div>
      </div>
    </div>
  );
}

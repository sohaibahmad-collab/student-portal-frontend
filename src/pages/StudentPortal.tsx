import Button from "@src/components/common/Button";
import SummaryCard from "@src/components/common/SummaryCard";
import StudentRow from "@src/components/StudentRow";
import { useNavigate } from "react-router-dom";

export default function StudentPortal() {
  const navigate = useNavigate();

  const students = [
    {
      id: 1,
      name: "Ali Tahir",
      marks: 80,
      subject: "English",
      grade: "B+",
      date: "Jan 29, 2022",
      time: "08.00 PM",
    },
    {
      id: 2,
      name: "Ameer Hamza",
      marks: 33,
      subject: "Math",
      grade: "F",
      date: "Jan 29, 2022",
      time: "08.00 PM",
    },
  ];

  return (
    <div className="min-h-screen w-full bg-white p-6">
      <h1 className="text-xl font-semibold mb-6">Student Portal</h1>
      <hr className="mb-3" />
      <div className="flex justify-between mb-3">
        <label className="py-4 px-3 ml-0 ">Students summary</label>
        <Button
          label="+Add Data"
          variant="secondary"
          onClick={() => navigate("/add-student")}
        />
      </div>

      <div className="flex items-center justify-around mb-6 ">
        <div className="flex gap-4">
          <SummaryCard title="Top Grade" value="A+" color="green" />
          <SummaryCard title="Most Passed" value="English" color="green" />
          <SummaryCard title="Lowest Grade" value="F" color="pink" />
          <SummaryCard title="Most Failed" value="Math" color="pink" />
        </div>
      </div>

      <div className="bg-white border rounded-md overflow-hidden">
        <table className="w-full text-left">
          <thead className="border-b bg-gray-50">
            <tr>
              <th className="py-3 px-4 text-sm font-medium">Name</th>
              <th className="py-3 px-4 text-sm font-medium">Marks</th>
              <th className="py-3 px-4 text-sm font-medium">Subject</th>
              <th className="py-3 px-4 text-sm font-medium">Grade</th>
              <th className="py-3 px-4 text-sm font-medium">Date</th>
              <th className="py-3 px-4 text-sm font-medium">Action</th>
            </tr>
          </thead>
          <tbody>
            {students.map((s) => (
              <StudentRow key={s.id} student={s} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

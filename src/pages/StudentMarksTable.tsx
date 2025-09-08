import Button from "@src/components/common/Button";
import { useEffect, useState } from "react";
import SummaryCard from "@src/components/common/SummaryCard";
import StudentRow from "@src/components/StudentRow";
import { useNavigate } from "react-router-dom";
import { useStudents } from "@src/hooks/useStudents";
export default function StudentMarksTable() {
  const { items, fetchStudents } = useStudents();
  const grades = ["A+", "A-", "B+", "B-", "F"];
  const gradeRank = (grade: string) => grades.indexOf(grade);
  const [topGrade, setTopGrade] = useState("");
  const [lowestGrade, setLowestGrade] = useState("");
  const [mostPassed, setMostPassed] = useState("");
  const [mostFailed, setMostFailed] = useState("");

  useEffect(() => {
    fetchStudents();
  }, []);

  useEffect(() => {
    if (items.length === 0) return;

    const topGradeItem = items.reduce((prev, curr) =>
      gradeRank(curr.grade) < gradeRank(prev.grade) ? curr : prev
    ).grade;

    const lowestGradeItem = items.reduce((prev, curr) =>
      gradeRank(curr.grade) > gradeRank(prev.grade) ? curr : prev
    ).grade;

    const mostPassedSubject = items.reduce((prev, curr) =>
      curr.marks > prev.marks ? curr : prev
    ).subject;

    const mostFailedSubject = items.reduce((prev, curr) =>
      curr.marks < prev.marks ? curr : prev
    ).subject;

    setTopGrade(topGradeItem);
    setLowestGrade(lowestGradeItem);
    setMostPassed(mostPassedSubject);
    setMostFailed(mostFailedSubject);
  }, [items]);
  const navigate = useNavigate();

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
          <SummaryCard title="Top Grade" value={topGrade} color="green" />
          <SummaryCard title="Most Passed" value={mostPassed} color="green" />
          <SummaryCard title="Lowest Grade" value={lowestGrade} color="pink" />
          <SummaryCard title="Most Failed" value={mostFailed} color="pink" />
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
              {items.map((s) => (
                <StudentRow key={s._id} {...s} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

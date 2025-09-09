import { useEffect, useState } from "react";
import { useStudents } from "./useStudents";

const grades = ["A+", "A-", "B+", "B-", "F"];
const gradeRank = (grade: string) => grades.indexOf(grade);

export function useStudentStats() {
  const {items} =useStudents()
  const [topGrade, setTopGrade] = useState("");
  const [lowestGrade, setLowestGrade] = useState("");
  const [mostPassed, setMostPassed] = useState("");
  const [mostFailed, setMostFailed] = useState("");

  useEffect(() => {
    if (items.length === 0) {
      setTopGrade("");
      setLowestGrade("");
      setMostPassed("");
      setMostFailed("");
      return;
    }

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

  return { topGrade, lowestGrade, mostPassed, mostFailed };
}

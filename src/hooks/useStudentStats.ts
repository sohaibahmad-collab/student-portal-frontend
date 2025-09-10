import { useEffect, useState } from "react";
import { grades } from "@src/constants/academic";
import {useSelector } from "react-redux";
import type { RootState } from "@src/redux/store";

const gradeRank = (grade: string) => grades.indexOf(grade);

export function useStudentStats() {
  const { items} = useSelector(
    (state: RootState) => state.studentsSlice
  );
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

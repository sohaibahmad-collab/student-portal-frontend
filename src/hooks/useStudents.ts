import { useDispatch, useSelector } from "react-redux";

import {
  fetchStudentsRequest,
  addStudentsRequest,
  updateStudentsRequest,
  deleteStudentsRequest,
} from "@src/redux/slices/studentEntrySlice";
import type { IStudententry } from "@src/types/studentEntry";
import type { RootState } from "@src/redux/rootReducer";

export const useStudents = () => {
  const dispatch = useDispatch();
  const { loading, error, items } = useSelector((state: RootState) => state.studentsSlice);
  console.log('items',items)
  const fetchStudents = () => {
    dispatch(fetchStudentsRequest());
  };

  const addStudent = (
    student: Omit<IStudententry, "_id" | "date" | "time">
  ) => {
    const now = new Date();

    dispatch(
      addStudentsRequest({
        ...student,
        date: now.toISOString().split("T")[0],
        time: now.toLocaleTimeString(),
      })
    );
  };

  const updateStudent = (id: string, updated: Partial<IStudententry>) => {
    const now = new Date();

    dispatch(
      updateStudentsRequest({
        id,
        updated: {
          ...updated,
          date: now.toISOString().split("T")[0],
          time: now.toLocaleTimeString(),
        },
      })
    );
  };
  const deleteStudent = (id: string) => {
    dispatch(deleteStudentsRequest(id));
  };

  return {
    fetchStudents,
    addStudent,
    updateStudent,
    deleteStudent,
    loading,
    error,
    items
  };
};

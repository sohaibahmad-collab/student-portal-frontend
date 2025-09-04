import StudentMarksTable from "@src/pages/StudentMarksTable";
import Login from "@src/pages/Login";
import SignUp from "@src/pages/Signup";
import AddStudentData from "@src/pages/AddStudentData";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/portal" element={<StudentMarksTable />} />
        <Route path="/add-student" element={<AddStudentData />} />
      </Routes>
    </>
  );
}

export default App;

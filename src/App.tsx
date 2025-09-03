import StudentPortal from "@src/pages/StudentPortal";
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
        <Route path="/portal" element={<StudentPortal />} />
        <Route path="/add-student" element={<AddStudentData />} />
      </Routes>
    </>
  );
}

export default App;

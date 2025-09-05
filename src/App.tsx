import StudentMarksTable from "@src/pages/StudentMarksTable";
import Login from "@src/pages/Login";
import SignUp from "@src/pages/Signup";
import AddStudentData from "@src/pages/AddStudentData";
import { Routes, Route } from "react-router-dom";
import ToastContainar from "@src/components/common/ToastContainer";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/portal" element={<StudentMarksTable />} />
        <Route path="/add-student" element={<AddStudentData />} />
      </Routes>
      <ToastContainar/>
      
    </>
  );
}

export default App;

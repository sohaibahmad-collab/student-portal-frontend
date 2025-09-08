import StudentMarksTable from "@src/pages/StudentMarksTable";
import Login from "@src/pages/Login";
import SignUp from "@src/pages/Signup";
import AddStudentData from "@src/pages/AddStudentData";
import { Routes, Route } from "react-router-dom";
import ToastContainar from "@src/components/common/ToastContainer";
import EditStudentData from "@src/pages/EditStudentData";
import { useAuth } from "@src/hooks/useAuth";
import { Navigate } from "react-router-dom";

function App() {
  const { isAuthenticated } = useAuth();
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route
          path="/portal"
          element={
            isAuthenticated ? (
              <StudentMarksTable />
            ) : (
              <Navigate to="/" replace />
            )
          }
        />
        <Route
          path="/add-student"
          element={
            isAuthenticated ? <AddStudentData /> : <Navigate to="/" replace />
          }
        />
        <Route
          path="/edit-student/:id"
          element={
            isAuthenticated ? <EditStudentData /> : <Navigate to="/" replace />
          }
        />
      </Routes>
      <ToastContainar />
    </>
  );
}

export default App;

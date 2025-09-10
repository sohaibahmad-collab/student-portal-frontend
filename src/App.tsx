import StudentMarksTable from "@src/pages/StudentMarksTable";
import Login from "@src/pages/Login";
import SignUp from "@src/pages/Signup";
import AddStudentData from "@src/pages/AddStudentData";
import { Routes, Route } from "react-router-dom";
import ToastContainar from "@src/components/common/ToastContainer";
import EditStudentData from "@src/pages/EditStudentData";
import { DropdownProvider } from "@src/context/DropdownContext";
import PrivateRoute from "@src/components/common/PrivateRoute"; 

function App() {
  return (
    <>
     
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route
          path="/portal"
          element={
            <PrivateRoute>
              <DropdownProvider>
                <StudentMarksTable />
              </DropdownProvider>
            </PrivateRoute>
          }
        />
        <Route
          path="/add-student"
          element={
            <PrivateRoute>
              <AddStudentData />
            </PrivateRoute>
          }
        />
        <Route
          path="/edit-student/:id"
          element={
            <PrivateRoute>
              <EditStudentData />
            </PrivateRoute>
          }
        />
      </Routes>
      <ToastContainar />
     
    </>
  );
}

export default App;

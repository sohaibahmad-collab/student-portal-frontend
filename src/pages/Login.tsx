import Button from "@src/components/common/Button";
import Input from "@src/components/common/Input";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  return (
    <div className="h-screen w-full bg-[url('/background.jpg')] bg-cover bg-center">
      <div className="flex items-center justify-center min-h-screen ">
        <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-center mb-6 text-[#38A38A]">
            Student Portal Login
          </h2>

          <form className="space-y-5">
            <Input
              label="Email"
              placeholder="Enter your email"
              type="email"
              
            />
            <Input
              label="Password"
              placeholder="Enter your password"
              type="password"
             
            />

            <Button
              variant="primary"
              label="Login"
              onClick={() => navigate("/portal")}
            />
          </form>

          <p className="text-sm text-gray-600 mt-6 text-center">
            Don’t have an account?{" "}
            <a href="/signup" className="text-[#FF7D9D] font-medium">
              Sign Up
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

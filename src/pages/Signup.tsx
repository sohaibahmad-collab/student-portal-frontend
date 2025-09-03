import { User, Mail, Lock } from "lucide-react";
import { Link } from "react-router-dom";
import Button from "@src/components/common/Button";
import Input from "@src/components/common/Input";

export default function SignUp() {
  return (
    <div className="h-screen w-full bg-[url('/background.jpg')] bg-cover bg-center">
      <div className="flex items-center justify-center min-h-screen">
        <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-center mb-6 text-[#38A38A]">
            Create Account
          </h2>

          <form className="space-y-5">
            <Input
              label="Full Name"
              placeholder="Enter your name"
              type="text"
              icon={User}
            />

            <Input
              label="Email"
              placeholder="Enter your email"
              type="email"
              icon={Mail}
            />

            <Input
              label="Password"
              placeholder="Enter your password"
              type="password"
              icon={Lock}
            />

            <Input
              label="Confirm Password"
              placeholder="Confirm your password"
              type="password"
              icon={Lock}
            />

            <Button label="Sign Up" variant="primary" />
          </form>

          <p className="text-sm text-gray-600 mt-6 text-center">
            Already have an account?{" "}
            <Link to="/" className="text-[#FF7D9D] font-medium">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

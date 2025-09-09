import { useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Button from "@src/components/common/Button";
import Input from "@src/components/common/Input";
import { useNavigate } from "react-router-dom";
import { Mail, Lock } from "lucide-react";
import { useAuth } from "@src/hooks/useAuth";



const loginSchema = yup.object().shape({
  email: yup.string().email("Invalid email").required("Email is required"),
  password: yup.string().required("Password is required"),
});


interface IFormValues {
  email: string;
  password: string;
}

export default function Login() {
  const { login, loading, error, isAuthenticated,checkAuthFromToken } = useAuth();
  const navigate = useNavigate();

 
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormValues>({
    resolver: yupResolver(loginSchema),
    defaultValues: { email: "", password: "" },
  });

 
  const onSubmit = (data: IFormValues) => {
    login(data.email, data.password);
  };
  
  useEffect(() => {
    checkAuthFromToken(); 
  }, []);

 
  useEffect(() => {
    if (isAuthenticated) navigate("/portal");
  }, [isAuthenticated, navigate]);

  return (
    <div className="h-screen w-full bg-[url('/background.jpg')] bg-cover bg-center">
      <div className="flex items-center justify-center min-h-screen">
        <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-center mb-6 text-[#38A38A]">
            Student Portal Login
          </h2>

          <form className="space-y-5" onSubmit={handleSubmit(onSubmit)}>
          
            <Controller
              name="email"
              control={control}
              render={({ field }) => (
                <Input
                  {...field}
                  label="Email"
                  placeholder="Enter your email"
                  type="email"
                  Icon={Mail}
                  error={errors.email?.message}
                />
              )}
            />

         
            <Controller
              name="password"
              control={control}
              render={({ field }) => (
                <Input
                  {...field}
                  label="Password"
                  placeholder="Enter your password"
                  type="password"
                  Icon={Lock}
                  error={errors.password?.message}
                />
              )}
            />

            
            {error && <p className="text-red-500 text-sm">{error}</p>}

            <div className="flex justify-center">
              <Button
                type="submit"
                variant="primary"
                label={loading ? "Logging in..." : "Login"}
                disabled={loading}
              />
            </div>
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

import { Link } from "react-router-dom";
import Button from "@src/components/common/Button";
import Input from "@src/components/common/Input";
import { Mail, Lock, User } from "lucide-react";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { signUpSchema, type SignUpFormData } from "@src/schema/signUpFormSchema";
import { useAuth } from "@src/hooks/useAuth";

export default function SignUp() {
   const {register}=useAuth()
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpFormData>({
    resolver: yupResolver(signUpSchema),
    mode:"onChange"
  });

  const onSubmit = (data: SignUpFormData) => {
     const {name,email,password} =data
     register(name,email,password)
  };

  return (
    <div className="h-screen w-full bg-[url('/background.jpg')] bg-cover bg-center">
      <div className="flex items-center justify-center min-h-screen">
        <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-center mb-6 text-[#38A38A]">
            Create Account
          </h2>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
           
            <div className="relative">
              <Controller
                name="name"
                control={control}
                render={({ field }) => (
                  <Input
                    Icon={User}
                    label="Full Name"
                    placeholder="Enter your name"
                    type="text"
                    value={field.value}
                    onChange={(val) => field.onChange(val)} 
                  />
                )}
              />
              {errors.name && (
                <p  className="text-red-500 text-sm mt-1 absolute top-14">{errors.name.message}</p>
              )}
            </div>

           
            <div>
              <Controller
                name="email"
                control={control}
                render={({ field }) => (
                  <Input
                    Icon={Mail}
                    label="Email"
                    placeholder="Enter your email"
                    type="email"
                    value={field.value}
                    onChange={(val) => field.onChange(val)}
                  />
                )}
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
              )}
            </div>

           
            <div>
              <Controller
                name="password"
                control={control}
                render={({ field }) => (
                  <Input
                    Icon={Lock}
                    label="Password"
                    placeholder="Enter your password"
                    type="password"
                    value={field.value}
                    onChange={(val) => field.onChange(val)}
                  />
                )}
              />
              {errors.password && (
                <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>
              )}
            </div>

           
            <div>
              <Controller
                name="confirmPassword"
                control={control}
                render={({ field }) => (
                  <Input
                    Icon={Lock}
                    label="Confirm Password"
                    placeholder="Confirm your password"
                    type="password"
                    value={field.value}
                    onChange={(val) => field.onChange(val)}
                  />
                )}
              />
              {errors.confirmPassword && (
                <p className="text-red-500 text-sm mt-1">{errors.confirmPassword.message}</p>
              )}
            </div>

            <div className="flex justify-center">
              <Button label="Sign Up" variant="primary" type="submit" />
            </div>
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

import { useState } from "react";
import { ArrowRight, Eye, EyeOff, Lock, Mail } from "lucide-react";
import { Link, useNavigate } from "react-router";

import Input from "@/components/ui/Input";
import Label from "@/components/ui/Label";
import devAtlas from "../../../assets/devAtlas-icon.svg";
import AuthLeftScreen from "../../../commonui/AuthLeftScreen";
import { Github } from "@/assets/icons/Icons";
import type { LoginPayload } from "../types/auth.types";
import { loginSchema, type LoginFormValues } from "../schemas/login.schema";
import { toast } from "sonner";
import { handleApiError } from "@/api/handleApiError";
import { loginApi } from "../auth.api";
import { AUTH_MESSAGES } from "@/constants/messages";
import { GENERIC_MESSAGE } from "@/constants/generic.constant";
import { ROUTE } from "@/constants/routes.constant";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [loginDetails , setLoginDetails] = useState<LoginPayload>({
    email: "",
    password: ""
  });
   const [errors, setErrors] = useState<
      Partial<Record<keyof LoginFormValues, string>>
    >({});
    const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const userLoginDetails = (fieldName: keyof LoginPayload,value: string) => {
    setLoginDetails((prev) => ({
      ...prev,
      [fieldName]:  value
    }))
  }

  const handleLoginDetails = async(e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const result = loginSchema.safeParse(loginDetails);
      if(!result.success){
        const fieldErrors = result.error.flatten().fieldErrors;
        setErrors({
          email: fieldErrors.email?.[0],
          password : fieldErrors.password?.[0]
        });
        return;
      }
      setErrors({});
      setIsLoading(true);
      const loginPayload = {
        email: result.data.email,
        password: result.data.password
      }
      const response = await loginApi(loginPayload);
      console.log(response);
      toast.success(AUTH_MESSAGES.LOGIN_SUCCESS);
      navigate(ROUTE.HOME);
    } catch (error) {
      console.log(error)
      toast.error(handleApiError(error,AUTH_MESSAGES.LOGIN_FAILED));
    }finally{
      setIsLoading(false);
    }
  }

  return (
    <main className="min-h-screen overflow-hidden bg-[#070B12] text-[#FAFAFA]">
      <div
        className="
          mx-auto
          flex
          min-h-screen
          w-full
          max-w-[1720px]
          items-center
          px-6
          sm:px-8
          lg:px-10
          xl:px-14
          2xl:px-16
        "
      >
        {/* ================= LEFT SECTION ================= */}
        <AuthLeftScreen />

        {/* ================= RIGHT LOGIN SECTION ================= */}
        <section
          className="
            flex
            w-full
            shrink-0
            items-center
            justify-center
            lg:w-125
            xl:w-130
          "
        >
          <div
            className="
              w-full
              rounded-2xl
              border
              border-[#FFFFFF12]
              bg-[#0D1118]
              p-7
              shadow-[0_25px_80px_rgba(0,0,0,0.4)]
              xl:p-8
            "
          >
            <div className="mb-7 flex items-center gap-2 lg:hidden">
              <img src={devAtlas} alt="DevAtlas" className="h-8 w-8" />

              <span className="text-xl font-semibold">DevAtlas</span>
            </div>
            <div className="mb-7 text-center">
              <h2
                className="
                  text-[30px]
                  font-semibold
                  tracking-[-1px]
                "
              >
                Welcome Back
              </h2>

              <p className="mt-2 text-[14px] text-[#9F9FA9]">
                Continue your learning workspace.
              </p>
            </div>

            <form className="space-y-4" onSubmit={handleLoginDetails}>
              <div className="space-y-1.5">
                <Label
                  htmlFor="email"
                  className="
                    block
                    text-[13px]
                    font-medium
                    text-[#FAFAFA]
                  "
                >
                  Email
                </Label>

                <div className="relative">
                  <Mail
                    size={17}
                    className="
                      absolute
                      left-3.5
                      top-1/2
                      -translate-y-1/2
                      text-[#71717A]
                    "
                  />

                  <Input
                    id="email"
                    type="email"
                    placeholder="john@example.com"
                    value={loginDetails.email}
                    onChange={(e) => userLoginDetails(GENERIC_MESSAGE.EMAIL,e.target.value)}
                    className="
                      h-10
                      w-full
                      rounded-lg
                      border
                      border-[#303642]
                      bg-[#11161E]
                      pl-10
                      pr-3
                      text-[13px]
                      text-[#FAFAFA]
                      outline-none
                      placeholder:text-[#71717A]
                      transition
                      focus:border-[#155DFC]
                      focus:ring-2
                      focus:ring-[#155DFC]/20
                    "
                  />
                </div>
                {errors.email && (
                  <p className="text-xs text-red-400">{errors.email}</p>
                )}
              </div>
              <div className="space-y-1.5">
                <Label
                  htmlFor="password"
                  className="
                    block
                    text-[13px]
                    font-medium
                    text-[#FAFAFA]
                  "
                >
                  Password
                </Label>

                <div className="relative">
                  <Lock
                    size={17}
                    className="
                      absolute
                      left-3.5
                      top-1/2
                      -translate-y-1/2
                      text-[#71717A]
                    "
                  />

                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
                    value={loginDetails.password} 
                   onChange={(e) => userLoginDetails(GENERIC_MESSAGE.PASSWORD,e.target.value)}
                    className="
                      h-10
                      w-full
                      rounded-lg
                      border
                      border-[#303642]
                      bg-[#11161E]
                      pl-10
                      pr-10
                      text-[13px]
                      text-[#FAFAFA]
                      outline-none
                      placeholder:text-[#71717A]
                      transition
                      focus:border-[#155DFC]
                      focus:ring-2
                      focus:ring-[#155DFC]/20
                    "
                  />

                  <button
                    type="button"
                    onClick={() => setShowPassword((prev) => !prev)}
                    className="
                      absolute
                      right-3.5
                      top-1/2
                      -translate-y-1/2
                      cursor-pointer
                      text-[#71717A]
                      transition
                      hover:text-[#FAFAFA]
                    "
                  >
                    {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                  </button>
                </div>
                {errors.password && (
                  <p className="text-xs text-red-400">{errors.password}</p>
                )}
              </div>
              <div className="flex items-center justify-between pt-1">
                <label
                  htmlFor="remember"
                  className="
                    flex
                    cursor-pointer
                    items-center
                    gap-2
                    text-[11px]
                    text-[#9F9FA9]
                  "
                >
                  <Input
                    id="remember"
                    type="checkbox"
                    className="
                      h-4
                      w-4
                      cursor-pointer
                      appearance-none
                      rounded
                      border
                      border-[#3A3F49]
                      bg-transparent
                      checked:border-[#155DFC]
                      checked:bg-[#155DFC]
                    "
                  />
                  Remember me
                </label>

                <Link
                  to={ROUTE.RESET_PASSWORD}
                  className="
                    cursor-pointer
                    text-[11px]
                    font-medium
                    text-[#3B82F6]
                    transition
                    hover:text-[#60A5FA]
                  "
                >
                  Forgot password?
                </Link>
              </div>
              <button
                type="submit"
                disabled={isLoading}
                className="
                  group
                  flex
                  h-10
                  w-full
                  cursor-pointer
                  items-center
                  justify-center
                  gap-2
                  rounded-lg
                  bg-[#155DFC]
                  text-[13px]
                  font-medium
                  text-white
                  shadow-[0_8px_25px_rgba(21,93,252,0.2)]
                  transition
                  hover:bg-[#2563EB]
                  hover:shadow-[0_10px_30px_rgba(21,93,252,0.3)]
                  active:scale-[0.99]
                "
              >
                {isLoading ? "Verifying Details...." : "Login"}
                <ArrowRight
                  size={16}
                  className="
                    transition-transform
                    group-hover:translate-x-1
                  "
                />
              </button>
            </form>
            <div className="my-6 flex items-center gap-4">
              <div className="h-px flex-1 bg-[#27272A]" />

              <span
                className="
                  text-[10px]
                  font-medium
                  text-[#52525B]
                "
              >
                OR CONTINUE WITH
              </span>

              <div className="h-px flex-1 bg-[#27272A]" />
            </div>
            <div className="grid grid-cols-2 gap-3">
              <button
                type="button"
                className="
                  flex
                  h-10
                  cursor-pointer
                  items-center
                  justify-center
                  gap-2
                  rounded-lg
                  border
                  border-[#303642]
                  bg-[#11161E]
                  text-[13px]
                  font-medium
                  text-[#FAFAFA]
                  transition
                  hover:border-[#4B5563]
                  hover:bg-[#171C25]
                "
              >
                <Github />
                GitHub
              </button>
              <button
                type="button"
                className="
                  flex
                  h-10
                  cursor-pointer
                  items-center
                  justify-center
                  gap-2
                  rounded-lg
                  border
                  border-[#303642]
                  bg-[#11161E]
                  text-[13px]
                  font-medium
                  text-[#FAFAFA]
                  transition
                  hover:border-[#4B5563]
                  hover:bg-[#171C25]
                "
              >
                <span className="text-[15px] font-bold">G</span>
                Google
              </button>
            </div>
            <p className="mt-6 text-center text-[12px] text-[#71717A]">
              Don't have an account?{" "}
              <Link
                to={ROUTE.SIGNUP}
                className="
                  cursor-pointer
                  font-medium
                  text-[#3B82F6]
                  transition
                  hover:text-[#60A5FA]
                "
              >
                Sign up
              </Link>
            </p>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Login;

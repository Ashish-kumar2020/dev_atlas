import { useState } from "react";
import { ArrowRight, Eye, EyeOff, Lock, Mail } from "lucide-react";
import { Link } from "react-router";

import Input from "@/components/ui/Input";
import Label from "@/components/ui/Label";
import devAtlas from "../../../assets/devAtlas-icon.svg";
import AuthLeftScreen from "../../../common-components/AuthLeftScreen";
import { Github } from "@/assets/icons/Icons";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

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

            <form className="space-y-4">
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
                  to="/reset-password"
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
                Login
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
                to="/"
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

import Input from "@/components/ui/Input";
import Label from "@/components/ui/Label";
import devAtlas from "../../../assets/devAtlas-icon.svg";
import { Eye } from "lucide-react";

const Login = () => {
  return (
    <div className="flex min-h-screen items-center justify-center">
      {/* Login  Card */}
      <div className="w-full max-w-115 rounded-[12px] border border-[#FFFFFF1A] bg-[#18181B] p-6">
        {/* Logo & Heading */}
        <div className="mb-6">
          {/* Logo */}
          <div className="mb-4 flex h-9 justify-center items-center gap-2 ">
            <img src={devAtlas} alt="DevAtlas" className="h-6 w-6" />

            <span className="text-[20px] font-semibold leading-7 tracking-[-0.45px] text-[#FAFAFA]">
              DevAtlas
            </span>
          </div>

          {/* Heading */}
          <div className="flex flex-col items-center">
            <h1 className="text-[24px] font-semibold leading-8 tracking-[0.6px] text-[#FAFAFA]">
              Welcome Back
            </h1>

            <p className="mt-2 text-[14px] font-normal leading-5 text-[#9F9FA9]">
              Continue your learning workspace.
            </p>
          </div>
        </div>

        {/* Form */}
        <form className="space-y-4">
          {/* Email */}
          <div className="space-y-2">
            <Label
              htmlFor="email"
              className="block text-[14px] font-medium leading-3.5 text-[#FAFAFA]"
            >
              Email
            </Label>

            <Input
              id="email"
              type="email"
              placeholder="john@example.com"
              className="h-9 w-full rounded-[8px] border border-[#3A3A3A] bg-[#191919] px-3.25 text-[14px] font-normal leading-[100%] tracking-normal text-[#9F9FA9] outline-none placeholder:text-[#9F9FA9]"
            />
          </div>

          {/* Password */}
          <div className="space-y-2">
            <Label
              htmlFor="password"
              className="block text-[14px] font-medium leading-3.5 text-[#FAFAFA]"
            >
              Password
            </Label>

            <Input
              id="password"
              type="password"
              placeholder="Enter your password"
              icon={<Eye size={16} />}
              className="h-9 w-full rounded-[8px] border border-[#3A3A3A] bg-[#191919] px-3.25 pr-10 text-[14px] font-normal leading-[100%] tracking-normal text-[#9F9FA9] outline-none placeholder:text-[#9F9FA9]"
            />
          </div>

          {/* Terms */}
          <div className="flex items-start gap-2 pt-1 justify-between">
            <div className="flex gap-3">
              <Input
                id="terms"
                type="checkbox"
                className="mt-0.5 h-4 w-4 shrink-0 appearance-none border border-white/15 bg-white/2 shadow-[0_1px_2px_rgba(0,0,0,0.05)] checked:border-[#155DFC] checked:bg-[#155DFC]"
              />

              <p className="text-[14px] font-normal leading-5 text-[#9F9FA9]">
                Remember me{" "}
              </p>
            </div>
            <div className="leading-5">
              <button
                type="button"
                className="text-[14px] font-medium text-[#155DFC]"
              >
                Forgot password?
              </button>
            </div>
          </div>

          {/* Login  */}
          <button
            type="submit"
            className="h-9 w-full rounded-[6px] bg-[#155DFC] px-4 text-[14px] font-medium text-black"
          >
            Login
          </button>
        </form>

        {/* Login */}
        <div className="mt-5">
          <div className="flex items-center gap-2">
            <div className="h-px flex-1 bg-[#27272A]" />

            <span className="text-[14px] text-[#71717A]">
              Don't have an account?
            </span>

            <div className="h-px flex-1 bg-[#27272A]" />
          </div>

          <div className="mt-3 text-center">
            <button
              type="button"
              className="text-[14px] font-medium text-[#155DFC]"
            >
              Sign up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

import Input from "@/components/ui/Input";
import Label from "@/components/ui/Label";
import devAtlas from "../../../assets/devAtlas-icon.svg";
import { Eye } from "lucide-react";

const Signup = () => {
  return (
    <div className="flex min-h-screen items-center justify-center">
      {/* Signup Card */}
      <div className="w-full max-w-115 rounded-[12px] border border-[#FFFFFF1A] bg-[#18181B] p-6">
        {/* Logo & Heading */}
        <div className="mb-6">
          {/* Logo */}
          <div className="mb-4 flex h-9 items-center gap-2">
            <img src={devAtlas} alt="DevAtlas" className="h-6 w-6" />

            <span className="text-[20px] font-semibold leading-7 tracking-[-0.45px] text-[#FAFAFA]">
              DevAtlas
            </span>
          </div>

          {/* Heading */}
          <div>
            <h1 className="text-[24px] font-semibold leading-8 tracking-[0.6px] text-[#FAFAFA]">
              Create your developer workspace
            </h1>

            <p className="mt-1 text-[14px] font-normal leading-5 text-[#9F9FA9]">
              Build a personal operating system for learning.
            </p>
          </div>
        </div>

        {/* Form */}
        <form className="space-y-4">
          {/* Username */}
          <div className="space-y-2">
            <Label
              htmlFor="username"
              className="block text-[14px] font-medium leading-3.5 text-[#FAFAFA]"
            >
              Username
            </Label>

            <Input
              id="username"
              type="text"
              placeholder="john.dev"
              className="h-9 w-full rounded-[8px] border border-[#3A3A3A] bg-[#191919] px-3.25 text-[14px] font-normal leading-[100%] tracking-normal text-[#9F9FA9] outline-none placeholder:text-[#9F9FA9]"
            />
          </div>

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

          {/* Confirm Password */}
          <div className="space-y-2">
            <Label
              htmlFor="confirmPassword"
              className="block text-[14px] font-medium leading-3.5 text-[#FAFAFA]"
            >
              Confirm password
            </Label>

            <Input
              id="confirmPassword"
              type="password"
              placeholder="Enter your password"
              icon={<Eye size={16} />}
              className="h-9 w-full rounded-[8px] border border-[#3A3A3A] bg-[#191919] px-3.25 pr-10 text-[14px] font-normal leading-[100%] tracking-normal text-[#9F9FA9] outline-none placeholder:text-[#9F9FA9]"
            />
          </div>

          {/* Terms */}
          <div className="flex items-start gap-2 pt-1">
            <Input
              id="terms"
              type="checkbox"
              className="mt-0.5 h-4 w-4 shrink-0 appearance-none border border-white/15 bg-white/2 shadow-[0_1px_2px_rgba(0,0,0,0.05)] checked:border-[#155DFC] checked:bg-[#155DFC]"
            />

            <p className="text-[12px] font-normal leading-5 text-[#9F9FA9]">
              I agree to the{" "}
              <span className="text-[#FAFAFA]">Terms of Service</span> and{" "}
              <span className="text-[#FAFAFA]">Privacy Policy</span>.
            </p>
          </div>

          {/* Create Account */}
          <button
            type="submit"
            className="h-9 w-full rounded-[6px] bg-[#155DFC] px-4 text-[14px] font-medium text-black"
          >
            Create account
          </button>
        </form>

        {/* Login */}
        <div className="mt-5">
          <div className="flex items-center gap-2">
            <div className="h-px flex-1 bg-[#27272A]" />

            <span className="text-[10px] text-[#71717A]">
              Already have an account?
            </span>

            <div className="h-px flex-1 bg-[#27272A]" />
          </div>

          <div className="mt-3 text-center">
            <button
              type="button"
              className="text-[12px] font-medium text-[#155DFC]"
            >
              Log in
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;

import Input from "@/components/ui/Input";
import Label from "@/components/ui/Label";
import { Eye } from "lucide-react";
import protectIcon from "../../../assets/protect-icon.png";

const UpdatePassword = () => {
  return (
    <div className="flex min-h-screen items-center justify-center">
      {/* Signup Card */}
      <div className="w-full max-w-115 rounded-[12px] border border-[#FFFFFF1A] bg-[#18181B] p-6">
        {/* Logo & Heading */}
        <div className="mb-6">
          {/* Logo */}
          <div className="mb-4 flex h-9 items-center gap-2">
            <img
              src={protectIcon}
              alt="Protect-Icon-Update-Screen"
              className="h-4 w-4"
            />

            <span className="text-[14px] font-semibold leading-7 tracking-[-0.45px] text-[#9F9FA9]">
              Security settings
            </span>
          </div>

          {/* Heading */}
          <div>
            <h1 className="text-[24px] font-semibold leading-8 tracking-[0.6px] text-[#FAFAFA]">
              Update password
            </h1>

            <p className="mt-1 text-[14px] font-normal leading-5 text-[#9F9FA9]">
              Keep your account protected.
            </p>
          </div>
        </div>

        {/* Form */}
        <form className="space-y-4">
          <div className="space-y-2">
            <Label
              htmlFor="currpassword"
              className="block text-[14px] font-medium leading-3.5 text-[#FAFAFA]"
            >
              Current Password
            </Label>

            <Input
              id="currpassword"
              type="password"
              placeholder="Enter your current password"
              icon={<Eye size={16} />}
              className="h-9 w-full rounded-[8px] border border-[#3A3A3A] bg-[#191919] px-3.25 text-[14px] font-normal leading-[100%] tracking-normal text-[#9F9FA9] outline-none placeholder:text-[#9F9FA9]"
            />
          </div>

          {/* New  Password */}
          <div className="space-y-2">
            <Label
              htmlFor="newpassword"
              className="block text-[14px] font-medium leading-3.5 text-[#FAFAFA]"
            >
              New password
            </Label>

            <Input
              id="newpassword"
              type="password"
              placeholder="Enter your password"
              icon={<Eye size={16} />}
              className="h-9 w-full rounded-[8px] border border-[#3A3A3A] bg-[#191919] px-3.25 pr-10 text-[14px] font-normal leading-[100%] tracking-normal text-[#9F9FA9] outline-none placeholder:text-[#9F9FA9]"
            />
          </div>

          {/* Confirm Password */}
          <div className="space-y-2">
            <Label
              htmlFor="confirmnewPassword"
              className="block text-[14px] font-medium leading-3.5 text-[#FAFAFA]"
            >
              Confirm new password
            </Label>

            <Input
              id="confirmPassword"
              type="password"
              placeholder="Enter your password"
              icon={<Eye size={16} />}
              className="h-9 w-full rounded-[8px] border border-[#3A3A3A] bg-[#191919] px-3.25 pr-10 text-[14px] font-normal leading-[100%] tracking-normal text-[#9F9FA9] outline-none placeholder:text-[#9F9FA9]"
            />
          </div>

          {/* Create Account */}
          <div className="flex justify-between">
            <span className="text-[14px] font-medium text-[#71717A]">
              Cancel
            </span>
            <button
              type="submit"
              className="h-9 w-40 rounded-[6px] bg-[#155DFC] px-4 text-[14px] font-medium text-black"
            >
              Update password
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdatePassword;

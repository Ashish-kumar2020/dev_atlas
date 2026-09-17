import Input from "@/components/ui/Input";
import Label from "@/components/ui/Label";

const PasswordReset = () => {
  return (
    <div className="flex min-h-screen items-center justify-center">
      {/* Signup Card */}
      <div className="w-full max-w-115 rounded-[12px] border border-[#FFFFFF1A] bg-[#18181B] p-6">
        {/* Logo & Heading */}
        <div className="mb-6">
          {/* Heading */}
          <div>
            <h1 className="text-[24px] font-semibold leading-8 tracking-[0.6px] text-[#FAFAFA]">
              Reset your password
            </h1>

            <p className="mt-1 text-[14px] font-normal leading-5 text-[#9F9FA9]">
              Enter the email or mobile number linked to your account.
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

          {/* Create Account */}
          <button
            type="submit"
            className="h-9 w-full rounded-[6px] bg-[#155DFC] px-4 text-[14px] font-medium text-black"
          >
            Send OTP
          </button>
        </form>

        {/* Login */}
        <div className="mt-5">
          <div className="mt-3 text-center">
            <button
              type="button"
              className="text-[14px] font-medium text-[#71717A] cursor-pointer"
            >
              Return to login
            </button>
            <div className="h-px flex-1 bg-[#27272A] mt-4" />
          </div>
        </div>
        <div className="flex items-center justify-center mt-2 gap-2">
          <span className="text-[12px] text-[#71717A]">
            Your account stays secure throughout recovery.
          </span>
        </div>
      </div>
    </div>
  );
};

export default PasswordReset;

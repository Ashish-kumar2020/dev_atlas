import devAtlas from "../../../assets/devAtlas-icon.svg";
import protectIcon from "../../../assets/protect-icon.png";

const AccountVerify = () => {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="w-full max-w-115 rounded-[12px] border border-[#FFFFFF1A] bg-[#18181B] p-6">
        <div className="mb-6">
          <div className="mb-4 flex h-9 justify-center items-center gap-2 ">
            <img src={devAtlas} alt="DevAtlas" className="h-6 w-6" />

            <span className="text-[20px] font-semibold leading-7 tracking-[-0.45px] text-[#FAFAFA]">
              DevAtlas
            </span>
          </div>

          <div className="flex flex-col items-center">
            <h1 className="text-[24px] font-semibold leading-8 tracking-[0.6px] text-[#FAFAFA]">
              Verify your account
            </h1>

            <p className="mt-2 text-[14px] font-normal leading-5 text-[#9F9FA9]">
              We sent a 6-digit code to john@email.com
            </p>
          </div>
        </div>

        <form className="space-y-4">
          <div className="flex w-102.5 h-12 gap-2 justify-center">
            {Array.from({ length: 6 }).map((_, index) => (
              <input
                key={index}
                type="text"
                maxLength={1}
                className="w-12 h-12 rounded-lg border border-[#27272A] bg-transparent px-3 py-3.5 text-center text-base font-medium text-white outline-none
                  shadow-[0_1px_2px_rgba(0,0,0,0.05)] focus:border-[#155DFC] focus:shadow-[0_0_0_2px_rgba(21,93,252,0.30)]"
              />
            ))}
          </div>

          <div className="flex items-start gap-2 pt-1 justify-between">
            <div className="flex gap-3">
              <p className="text-[14px] font-normal leading-5 text-[#9F9FA9]">
                Code expires in <span className="text-white">00:42</span>
              </p>
            </div>
            <div className="leading-5">
              <button
                type="button"
                className="text-[14px] font-medium text-[#71717A]"
              >
                Resend Code
              </button>
            </div>
          </div>

          <button
            type="submit"
            className="h-9 w-full rounded-[6px] bg-[#155DFC] px-4 text-[14px] font-medium text-black"
          >
            Verify Code
          </button>
        </form>

        <div className="mt-5">
          <div className="flex items-center gap-2">
            <div className="h-px flex-1 bg-[#27272A]" />

            <span className="text-[14px] text-[#71717A] font-medium">
              Change email or mobile
            </span>

            <div className="h-px flex-1 bg-[#27272A]" />
          </div>

          <div className="mt-3 flex gap-2">
            <img src={protectIcon} alt="Protection-icon" className="w-4 h-4" />
            <span className="text-[14px] text-[#71717A] leading-4.5">
              Verification protects your learning workspace.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountVerify;

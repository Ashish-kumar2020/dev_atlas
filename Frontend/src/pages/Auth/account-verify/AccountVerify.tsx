import { useRef, useState } from "react";
import {
  ArrowRight,
  BarChart3,
  BookOpen,
  Mail,
  ShieldCheck,
  Zap,
} from "lucide-react";

import devAtlas from "../../../assets/devAtlas-icon.svg";

const AccountVerify = () => {
  const [otp, setOtp] = useState<string[]>(["", "", "", "", "", ""]);

  const inputRefs = useRef<Array<HTMLInputElement | null>>([]);

  const handleChange = (value: string, index: number) => {
    // Only allow numbers
    const digit = value.replace(/\D/g, "").slice(-1);

    const newOtp = [...otp];
    newOtp[index] = digit;

    setOtp(newOtp);

    // Move to next input
    if (digit && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    index: number,
  ) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault();

    const pastedValue = e.clipboardData
      .getData("text")
      .replace(/\D/g, "")
      .slice(0, 6);

    if (!pastedValue) return;

    const newOtp = Array(6).fill("");

    pastedValue.split("").forEach((digit, index) => {
      newOtp[index] = digit;
    });

    setOtp(newOtp);

    const nextIndex = Math.min(pastedValue.length, 5);

    inputRefs.current[nextIndex]?.focus();
  };

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

        <section
          className="
            relative
            hidden
            min-h-170
            flex-1
            overflow-hidden
            lg:block
          "
        >
          {/* Background Glow */}

          <div
            className="
              pointer-events-none
              absolute
              left-[8%]
              top-[18%]
              h-140
              w-140
              rounded-full
              bg-[#155DFC]/10
              blur-[150px]
            "
          />

          {/* Decorative Circles */}

          <div
            className="
              pointer-events-none
              absolute
              -right-37.5
              -top-47.5
              h-130
              w-130
              rounded-full
              border
              border-[#155DFC]/20
            "
          />

          <div
            className="
              pointer-events-none
              absolute
              -right-22.5
              -top-32.5
              h-97.5
              w-97.5
              rounded-full
              border
              border-[#155DFC]/10
            "
          />

          {/* Content */}

          <div
            className="
              relative
              z-10
              flex
              min-h-170
              flex-col
              px-2
              py-8
              xl:px-4
            "
          >
            {/* =================================================
                LOGO
            ================================================= */}

            <div className="flex items-center gap-3">
              <img src={devAtlas} alt="DevAtlas" className="h-9 w-9" />

              <span className="text-[22px] font-semibold tracking-[-0.5px]">
                DevAtlas
              </span>
            </div>

            {/* =================================================
                HERO
            ================================================= */}

            <div className="mt-10 max-w-150">
              <p
                className="
                  mb-3
                  text-xs
                  font-medium
                  uppercase
                  tracking-[3px]
                  text-[#155DFC]
                "
              >
                Your developer workspace
              </p>

              <h1
                className="
                  text-[44px]
                  font-semibold
                  leading-[1.08]
                  tracking-[-1.8px]
                  xl:text-[48px]
                  2xl:text-[52px]
                "
              >
                Your knowledge.
                <br />
                <span className="text-[#155DFC]">A better</span> tomorrow.
              </h1>

              <p
                className="
                  mt-5
                  max-w-135
                  text-[15px]
                  leading-6
                  text-[#9F9FA9]
                  xl:text-[16px]
                  xl:leading-7
                "
              >
                Organize your learning, track your progress, and build a
                personal knowledge base — all in one place.
              </p>
            </div>

            {/* =================================================
                FEATURES
            ================================================= */}

            <div className="mt-6 space-y-3">
              {/* Organize */}

              <div className="flex items-center gap-3">
                <div
                  className="
                    flex
                    h-10
                    w-10
                    shrink-0
                    items-center
                    justify-center
                    rounded-xl
                    border
                    border-[#FFFFFF0D]
                    bg-[#111827]
                  "
                >
                  <BookOpen size={18} className="text-[#3B82F6]" />
                </div>

                <div>
                  <h3 className="text-[14px] font-medium">Organize</h3>

                  <p className="mt-0.5 text-xs text-[#71717A]">
                    Keep your notes structured
                  </p>
                </div>
              </div>

              {/* Track Progress */}

              <div className="flex items-center gap-3">
                <div
                  className="
                    flex
                    h-10
                    w-10
                    shrink-0
                    items-center
                    justify-center
                    rounded-xl
                    border
                    border-[#FFFFFF0D]
                    bg-[#111827]
                  "
                >
                  <BarChart3 size={18} className="text-[#3B82F6]" />
                </div>

                <div>
                  <h3 className="text-[14px] font-medium">Track Progress</h3>

                  <p className="mt-0.5 text-xs text-[#71717A]">
                    See how far you've come
                  </p>
                </div>
              </div>

              {/* Learn Better */}

              <div className="flex items-center gap-3">
                <div
                  className="
                    flex
                    h-10
                    w-10
                    shrink-0
                    items-center
                    justify-center
                    rounded-xl
                    border
                    border-[#FFFFFF0D]
                    bg-[#111827]
                  "
                >
                  <Zap size={18} className="text-[#3B82F6]" />
                </div>

                <div>
                  <h3 className="text-[14px] font-medium">Learn Better</h3>

                  <p className="mt-0.5 text-xs text-[#71717A]">
                    Build consistent learning habits
                  </p>
                </div>
              </div>
            </div>

            {/* =================================================
                CODE WORKSPACE
            ================================================= */}

            <div
              className="
                relative
                mt-7
                h-47.5
                w-full
                max-w-135
                shrink-0
              "
            >
              {/* Glow */}

              <div
                className="
                  pointer-events-none
                  absolute
                  left-16
                  top-6
                  h-40
                  w-96
                  rounded-full
                  bg-[#155DFC]/10
                  blur-[80px]
                "
              />

              {/* Annotation */}

              <div
                className="
                  absolute
                  right-2
                  top-0
                  z-20
                  -rotate-6
                  text-xs
                  leading-4
                  text-[#3B82F6]
                "
              >
                Build your own
                <br />
                documentation
              </div>

              {/* Back Layer */}

              <div
                className="
                  absolute
                  bottom-1
                  left-16
                  h-37.5
                  w-117.5
                  rotate-[-7deg]
                  rounded-xl
                  border
                  border-[#155DFC]/20
                  bg-[#155DFC]/5
                "
              />

              {/* Editor */}

              <div
                className="
                  absolute
                  bottom-6
                  left-6
                  z-10
                  h-38.75
                  w-117.5
                  -rotate-3
                  overflow-hidden
                  rounded-xl
                  border
                  border-[#263A5B]
                  bg-[#0D1522]
                  shadow-[0_25px_60px_rgba(0,0,0,0.45)]
                "
              >
                {/* Browser Header */}

                <div
                  className="
                    flex
                    h-8
                    items-center
                    gap-1.5
                    border-b
                    border-[#FFFFFF0D]
                    px-3
                  "
                >
                  <div className="h-2.5 w-2.5 rounded-full bg-[#EF4444]" />
                  <div className="h-2.5 w-2.5 rounded-full bg-[#F59E0B]" />
                  <div className="h-2.5 w-2.5 rounded-full bg-[#22C55E]" />
                </div>

                <div className="flex h-31.75">
                  {/* Sidebar */}

                  <div
                    className="
                      w-23.75
                      shrink-0
                      border-r
                      border-[#FFFFFF0D]
                      p-2
                    "
                  >
                    <div
                      className="
                        rounded-md
                        bg-[#155DFC]/20
                        px-2.5
                        py-1.5
                        text-[10px]
                        text-[#60A5FA]
                      "
                    >
                      Notes
                    </div>

                    <div className="mt-1 px-2.5 py-1.5 text-[10px] text-[#71717A]">
                      Topics
                    </div>

                    <div className="px-2.5 py-1.5 text-[10px] text-[#71717A]">
                      Subjects
                    </div>

                    <div className="px-2.5 py-1.5 text-[10px] text-[#71717A]">
                      Progress
                    </div>
                  </div>

                  {/* Code */}

                  <div
                    className="
                      flex-1
                      p-4
                      font-mono
                      text-[10px]
                      leading-5
                    "
                  >
                    <div>
                      <span className="text-[#52525B]">01</span>{" "}
                      <span className="text-[#60A5FA]">const</span>{" "}
                      <span className="text-[#FAFAFA]">verify</span>{" "}
                      <span className="text-[#71717A]">=</span>{" "}
                      <span className="text-[#C084FC]">()</span>{" "}
                      <span className="text-[#60A5FA]">=&gt;</span> {"{"}
                    </div>

                    <div>
                      <span className="text-[#52525B]">02</span> {"  "}
                      <span className="text-[#60A5FA]">stayCurious</span>
                      ();
                    </div>

                    <div>
                      <span className="text-[#52525B]">03</span> {"  "}
                      <span className="text-[#60A5FA]">keepLearning</span>
                      ();
                    </div>

                    <div>
                      <span className="text-[#52525B]">04</span> {"  "}
                      <span className="text-[#60A5FA]">build</span>
                      ();
                    </div>

                    <div>
                      <span className="text-[#52525B]">05</span> {"}"}
                    </div>

                    <div className="mt-1 text-[#3F3F46]">
                      // You're almost there
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            RIGHT SECTION
        ====================================================== */}

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
          {/* Verification Card */}

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
            {/* =================================================
                LOGO
            ================================================= */}

            <div className="mb-7 flex items-center justify-center gap-2">
              <img src={devAtlas} alt="DevAtlas" className="h-8 w-8" />

              <span className="text-[20px] font-semibold">DevAtlas</span>
            </div>

            {/* =================================================
                HEADER
            ================================================= */}

            <div className="mb-8 text-center">
              <p
                className="
                  mb-2.5
                  text-[11px]
                  font-medium
                  uppercase
                  tracking-[2px]
                  text-[#71717A]
                "
              >
                Account verification
              </p>

              <h1
                className="
                  text-[30px]
                  font-semibold
                  tracking-[-1px]
                "
              >
                Verify your account
              </h1>

              <p
                className="
                  mx-auto
                  mt-2
                  max-w-95
                  text-[14px]
                  leading-5
                  text-[#9F9FA9]
                "
              >
                We sent a 6-digit verification code to{" "}
                <span className="text-[#FAFAFA]">john@email.com</span>
              </p>
            </div>

            {/* =================================================
                OTP INPUTS
            ================================================= */}

            <form>
              <div className="flex justify-center gap-2.5">
                {otp.map((digit, index) => (
                  <input
                    key={index}
                    ref={(element) => {
                      inputRefs.current[index] = element;
                    }}
                    value={digit}
                    onChange={(e) => handleChange(e.target.value, index)}
                    onKeyDown={(e) => handleKeyDown(e, index)}
                    onPaste={handlePaste}
                    inputMode="numeric"
                    autoComplete={index === 0 ? "one-time-code" : "off"}
                    maxLength={1}
                    aria-label={`Verification digit ${index + 1}`}
                    className="
                      h-12
                      w-12
                      rounded-lg
                      border
                      border-[#303642]
                      bg-[#11161E]
                      text-center
                      text-lg
                      font-semibold
                      text-[#FAFAFA]
                      outline-none
                      transition
                      placeholder:text-[#71717A]
                      focus:border-[#155DFC]
                      focus:bg-[#121923]
                      focus:ring-2
                      focus:ring-[#155DFC]/20
                    "
                  />
                ))}
              </div>

              {/* =================================================
                  TIMER
              ================================================= */}

              <div className="mt-5 flex items-center justify-between">
                <p className="text-[13px] text-[#9F9FA9]">
                  Code expires in{" "}
                  <span className="font-medium text-[#FAFAFA]">00:42</span>
                </p>

                <button
                  type="button"
                  className="
                    text-[13px]
                    font-medium
                    text-[#3B82F6]
                    transition
                    hover:text-[#60A5FA]
                  "
                >
                  Resend code
                </button>
              </div>

              {/* =================================================
                  VERIFY BUTTON
              ================================================= */}

              <button
                type="submit"
                className="
                  group
                  mt-5
                  flex
                  h-11
                  w-full
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
                Verify Code
                <ArrowRight
                  size={16}
                  className="
                    transition-transform
                    group-hover:translate-x-1
                  "
                />
              </button>
            </form>

            {/* =================================================
                DIVIDER
            ================================================= */}

            <div className="my-6 flex items-center gap-4">
              <div className="h-px flex-1 bg-[#27272A]" />

              <span className="whitespace-nowrap text-[10px] font-medium text-[#52525B]">
                OR
              </span>

              <div className="h-px flex-1 bg-[#27272A]" />
            </div>

            {/* =================================================
                CHANGE CONTACT
            ================================================= */}

            <button
              type="button"
              className="
                flex
                h-11
                w-full
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
              <Mail size={16} className="text-[#9F9FA9]" />
              Change email or mobile
            </button>

            {/* =================================================
                SECURITY MESSAGE
            ================================================= */}

            <div
              className="
                mt-6
                flex
                items-center
                gap-3
                rounded-lg
                border
                border-[#FFFFFF08]
                bg-[#11161E]/50
                px-3
                py-3
              "
            >
              <ShieldCheck size={18} className="shrink-0 text-[#155DFC]" />

              <p className="text-[12px] leading-5 text-[#71717A]">
                Verification protects your learning workspace.
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default AccountVerify;

import { useState } from "react";
import {
  ArrowRight,
  BarChart3,
  BookOpen,
  Eye,
  EyeOff,
  Lock,
  ShieldCheck,
  Zap,
} from "lucide-react";

import Input from "@/components/ui/Input";
import Label from "@/components/ui/Label";
import devAtlas from "../../../assets/devAtlas-icon.svg";

const UpdatePassword = () => {
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);

  const [showNewPassword, setShowNewPassword] = useState(false);

  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

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

            <div className="flex items-center gap-3">
              <img src={devAtlas} alt="DevAtlas" className="h-9 w-9" />

              <span className="text-[22px] font-semibold tracking-[-0.5px]">
                DevAtlas
              </span>
            </div>

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
                Keep your account
                <br />
                secure
              </div>

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
                      <span className="text-[#FAFAFA]">secure</span>{" "}
                      <span className="text-[#71717A]">=</span>{" "}
                      <span className="text-[#C084FC]">()</span>{" "}
                      <span className="text-[#60A5FA]">=&gt;</span> {"{"}
                    </div>

                    <div>
                      <span className="text-[#52525B]">02</span> {"  "}
                      <span className="text-[#60A5FA]">protect</span>
                      ();
                    </div>

                    <div>
                      <span className="text-[#52525B]">03</span> {"  "}
                      <span className="text-[#60A5FA]">learn</span>
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
                      // Keep growing securely
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

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

            <div className="mb-7 flex items-center gap-2">
              <div
                className="
                  flex
                  h-8
                  w-8
                  items-center
                  justify-center
                  rounded-lg
                  border
                  border-[#155DFC]/20
                  bg-[#155DFC]/10
                "
              >
                <ShieldCheck size={16} className="text-[#3B82F6]" />
              </div>

              <div>
                <p className="text-[12px] font-medium text-[#FAFAFA]">
                  Security settings
                </p>

                <p className="text-[10px] text-[#71717A]">
                  Keep your account protected
                </p>
              </div>
            </div>

            <div className="mb-7">
              <h1
                className="
                  text-[30px]
                  font-semibold
                  tracking-[-1px]
                "
              >
                Update password
              </h1>

              <p
                className="
                  mt-2
                  text-[14px]
                  leading-5
                  text-[#9F9FA9]
                "
              >
                Choose a new password to keep your account secure.
              </p>
            </div>

            <form className="space-y-5">

              <div className="space-y-1.5">
                <Label
                  htmlFor="currpassword"
                  className="
                    block
                    text-[13px]
                    font-medium
                    text-[#FAFAFA]
                  "
                >
                  Current password
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
                    id="currpassword"
                    type={showCurrentPassword ? "text" : "password"}
                    placeholder="Enter your current password"
                    className="
                      h-11
                      w-full
                      rounded-lg
                      border
                      border-[#303642]
                      bg-[#11161E]
                      pl-10
                      pr-11
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
                    onClick={() => setShowCurrentPassword((prev) => !prev)}
                    className="
                      absolute
                      right-3.5
                      top-1/2
                      -translate-y-1/2
                      text-[#71717A]
                      transition
                      hover:text-[#FAFAFA]
                    "
                  >
                    {showCurrentPassword ? (
                      <EyeOff size={16} />
                    ) : (
                      <Eye size={16} />
                    )}
                  </button>
                </div>
              </div>


              <div className="space-y-1.5">
                <Label
                  htmlFor="newpassword"
                  className="
                    block
                    text-[13px]
                    font-medium
                    text-[#FAFAFA]
                  "
                >
                  New password
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
                    id="newpassword"
                    type={showNewPassword ? "text" : "password"}
                    placeholder="Enter your new password"
                    className="
                      h-11
                      w-full
                      rounded-lg
                      border
                      border-[#303642]
                      bg-[#11161E]
                      pl-10
                      pr-11
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
                    onClick={() => setShowNewPassword((prev) => !prev)}
                    className="
                      absolute
                      right-3.5
                      top-1/2
                      -translate-y-1/2
                      text-[#71717A]
                      transition
                      hover:text-[#FAFAFA]
                    "
                  >
                    {showNewPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                  </button>
                </div>

                <p className="text-[11px] leading-4 text-[#52525B]">
                  Use at least 8 characters with a mix of letters, numbers, and
                  symbols.
                </p>
              </div>

              <div className="space-y-1.5">
                <Label
                  htmlFor="confirmnewPassword"
                  className="
                    block
                    text-[13px]
                    font-medium
                    text-[#FAFAFA]
                  "
                >
                  Confirm new password
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
                    id="confirmnewPassword"
                    type={showConfirmPassword ? "text" : "password"}
                    placeholder="Confirm your new password"
                    className="
                      h-11
                      w-full
                      rounded-lg
                      border
                      border-[#303642]
                      bg-[#11161E]
                      pl-10
                      pr-11
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
                    onClick={() => setShowConfirmPassword((prev) => !prev)}
                    className="
                      absolute
                      right-3.5
                      top-1/2
                      -translate-y-1/2
                      text-[#71717A]
                      transition
                      hover:text-[#FAFAFA]
                    "
                  >
                    {showConfirmPassword ? (
                      <EyeOff size={16} />
                    ) : (
                      <Eye size={16} />
                    )}
                  </button>
                </div>
              </div>
              <div className="flex items-center justify-between pt-1">
                <button
                  type="button"
                  className="
                    text-[13px]
                    font-medium
                    text-[#71717A]
                    transition
                    hover:text-[#FAFAFA]
                  "
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  className="
                    group
                    flex
                    h-11
                    items-center
                    justify-center
                    gap-2
                    rounded-lg
                    bg-[#155DFC]
                    px-5
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
                  Update password
                  <ArrowRight
                    size={16}
                    className="
                      transition-transform
                      group-hover:translate-x-1
                    "
                  />
                </button>
              </div>
            </form>
            <div
              className="
                mt-7
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
                Your password is securely encrypted and never shared with
                anyone.
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default UpdatePassword;

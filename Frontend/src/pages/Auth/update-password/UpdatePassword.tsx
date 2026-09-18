import { useState } from "react";
import { ArrowRight, Eye, EyeOff, Lock, ShieldCheck } from "lucide-react";

import Input from "@/components/ui/Input";
import Label from "@/components/ui/Label";
import AuthLeftScreen from "@/common-components/AuthLeftScreen";

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
        <AuthLeftScreen />

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

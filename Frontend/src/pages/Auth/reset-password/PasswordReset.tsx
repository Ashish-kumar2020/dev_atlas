import { ArrowRight, Mail } from "lucide-react";

import Input from "@/components/ui/Input";
import Label from "@/components/ui/Label";
import devAtlas from "../../../assets/devAtlas-icon.svg";
import { Link } from "react-router";
import AuthLeftScreen from "@/common-components/AuthLeftScreen";

const PasswordReset = () => {
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
            lg:w-130
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
            <div className="mb-8 flex items-center justify-center gap-2">
              <img src={devAtlas} alt="DevAtlas" className="h-8 w-8" />

              <span className="text-[20px] font-semibold">DevAtlas</span>
            </div>

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
                Account recovery
              </p>

              <h1
                className="
                  text-[30px]
                  font-semibold
                  tracking-[-1px]
                "
              >
                Reset your password
              </h1>

              <p
                className="
                  mx-auto
                  mt-2
                  max-w-97.5
                  text-[14px]
                  leading-5
                  text-[#9F9FA9]
                "
              >
                Enter the email or mobile number linked to your account.
              </p>
            </div>

            <form className="space-y-5">
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
                  Email or mobile number
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
                    type="text"
                    placeholder="john@example.com"
                    className="
                      h-11
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

              <button
                type="submit"
                className="
                  group
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
                Send OTP
                <ArrowRight
                  size={16}
                  className="
                    transition-transform
                    group-hover:translate-x-1
                  "
                />
              </button>
            </form>

            <div className="my-7 flex items-center gap-4">
              <div className="h-px flex-1 bg-[#27272A]" />

              <span className="text-[10px] font-medium text-[#52525B]">
                REMEMBER YOUR PASSWORD?
              </span>

              <div className="h-px flex-1 bg-[#27272A]" />
            </div>
            <Link to="/login">
              <button
                type="button"
                className="flex h-11
                w-full
                items-center
                justify-center
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
                cursor-pointer
              "
              >
                Return to login
              </button>
            </Link>

            <div
              className="
                mt-6
                flex
                items-center
                justify-center
                gap-2
              "
            >
              <span className="text-[12px] text-[#71717A]">
                Your account stays secure throughout recovery.
              </span>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default PasswordReset;

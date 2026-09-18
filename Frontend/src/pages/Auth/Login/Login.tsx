import { useState } from "react";
import {
  ArrowRight,
  BarChart3,
  BookOpen,
  Eye,
  EyeOff,
  Lock,
  Mail,
  Zap,
} from "lucide-react";

import Input from "@/components/ui/Input";
import Label from "@/components/ui/Label";
import devAtlas from "../../../assets/devAtlas-icon.svg";
import { Link } from "react-router";

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

          <div className="relative z-10 flex min-h-170 flex-col px-2 py-8 xl:px-4">
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
                Build your own
                <br />
                documentation
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
                      <span className="text-[#FAFAFA]">learn</span>{" "}
                      <span className="text-[#71717A]">=</span>{" "}
                      <span className="text-[#C084FC]">()</span>{" "}
                      <span className="text-[#60A5FA]">=&gt;</span> {"{"}
                    </div>

                    <div>
                      <span className="text-[#52525B]">02</span> {"  "}
                      <span className="text-[#60A5FA]">learn</span>
                      ();
                    </div>

                    <div>
                      <span className="text-[#52525B]">03</span> {"  "}
                      <span className="text-[#60A5FA]">build</span>
                      ();
                    </div>

                    <div>
                      <span className="text-[#52525B]">04</span> {"  "}
                      <span className="text-[#60A5FA]">repeat</span>
                      ();
                    </div>

                    <div>
                      <span className="text-[#52525B]">05</span> {"}"}
                    </div>

                    <div className="mt-1 text-[#3F3F46]">
                      // Build a better you
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
            lg:w-120
            xl:w-125
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
            <div className="mb-7 flex items-center justify-center gap-2">
              <img src={devAtlas} alt="DevAtlas" className="h-8 w-8" />

              <span className="text-[20px] font-semibold">DevAtlas</span>
            </div>

            <div className="mb-7 text-center">
              <h1
                className="
                  text-[30px]
                  font-semibold
                  tracking-[-1px]
                "
              >
                Welcome Back
              </h1>

              <p className="mt-2 text-[14px] text-[#9F9FA9]">
                Continue your learning workspace.
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
                    aria-label={
                      showPassword ? "Hide password" : "Show password"
                    }
                    onClick={() => setShowPassword((prev) => !prev)}
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
                    {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <label
                  htmlFor="remember"
                  className="
                    flex
                    cursor-pointer
                    items-center
                    gap-2.5
                    text-[12px]
                    text-[#9F9FA9]
                  "
                >
                  <Input
                    id="remember"
                    type="checkbox"
                    className="
                      h-4
                      w-4
                      shrink-0
                      cursor-pointer
                      appearance-none
                      rounded-lg
                      border
                      border-[#3A3F49]
                      bg-transparent
                      checked:border-[#155DFC]
                      checked:bg-[#155DFC]
                    "
                  />
                  Remember me
                </label>
                <Link to="/reset-password">
                  <button
                    type="button"
                    className="
                    text-[12px]
                    font-medium
                    text-[#3B82F6]
                    transition
                    hover:text-[#60A5FA]
                    cursor-pointer
                  "
                  >
                    Forgot password?
                  </button>
                </Link>
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

              <span className="whitespace-nowrap text-[10px] font-medium text-[#52525B]">
                OR CONTINUE WITH
              </span>

              <div className="h-px flex-1 bg-[#27272A]" />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <button
                type="button"
                className="
                  flex
                  h-11
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
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56v-2.16c-3.2.7-3.87-1.35-3.87-1.35-.53-1.33-1.28-1.69-1.28-1.69-1.04-.71.08-.7.08-.7 1.15.08 1.75 1.18 1.75 1.18 1.03 1.75 2.7 1.24 3.36.95.1-.74.4-1.24.73-1.53-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.29 1.18-3.1-.12-.29-.51-1.47.11-3.06 0 0 .96-.31 3.15 1.18a10.9 10.9 0 0 1 5.74 0c2.19-1.49 3.15-1.18 3.15-1.18.62 1.59.23 2.77.11 3.06.73.81 1.18 1.84 1.18 3.1 0 4.42-2.7 5.39-5.27 5.68.41.35.78 1.04.78 2.1v3.11c0 .31.21.67.8.56A11.52 11.52 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
                </svg>
                GitHub
              </button>

              <button
                type="button"
                className="
                  flex
                  h-11
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

            <p className="mt-7 text-center text-[12px] text-[#71717A]">
              Don't have an account?{" "}
              <Link to="/">
                <button
                  type="button"
                  className="
                  font-medium
                  text-[#3B82F6]
                  transition
                  hover:text-[#60A5FA]
                  cursor-pointer
                "
                >
                  Sign up
                </button>
              </Link>
            </p>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Login;

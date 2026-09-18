import devAtlas from "@/assets/devAtlas-icon.svg";
import { BarChart3, BookOpen, Zap } from "lucide-react";

const AuthLeftScreen = () => {
  return (
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
      {/* Blue glow */}
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

      {/* Decorative circles */}
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
        {/* Logo */}
        <div className="flex items-center gap-3">
          <img src={devAtlas} alt="DevAtlas" className="h-9 w-9" />

          <span className="text-[22px] font-semibold tracking-[-0.5px]">
            DevAtlas
          </span>
        </div>

        {/* Hero */}
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
            Organize your learning, track your progress, and build a personal
            knowledge base — all in one place.
          </p>
        </div>

        {/* Features */}
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

        {/* Code Preview */}
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

          {/* Documentation text */}
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

          {/* Back card */}
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

          {/* Main code card */}
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
            {/* Browser header */}
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
                  <span className="text-[#FAFAFA]">learn</span>{" "}
                  <span className="text-[#71717A]">=</span>{" "}
                  <span className="text-[#C084FC]">()</span>{" "}
                  <span className="text-[#60A5FA]">=&gt;</span> {"{"}
                </div>

                <div>
                  <span className="text-[#52525B]">02</span>
                  {"  "}
                  <span className="text-[#60A5FA]">learn</span>
                  ();
                </div>

                <div>
                  <span className="text-[#52525B]">03</span>
                  {"  "}
                  <span className="text-[#60A5FA]">build</span>
                  ();
                </div>

                <div>
                  <span className="text-[#52525B]">04</span>
                  {"  "}
                  <span className="text-[#60A5FA]">repeat</span>
                  ();
                </div>

                <div>
                  <span className="text-[#52525B]">05</span>
                  {"}"}
                </div>

                <div className="mt-1 text-[#3F3F46]">// Build a better you</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AuthLeftScreen;

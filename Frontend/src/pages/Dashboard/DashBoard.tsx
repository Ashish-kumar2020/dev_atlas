import {
  ArrowRight,
  Check,
  ChevronRight,
  Code2,
  Flame,
  Layers3,
  Sparkles,
} from "lucide-react";

import { Link } from "react-router-dom";

import { Button } from "../../../@/components/ui/button";

const DashBoard = () => {
  return (
    <div className="space-y-8 p-6 lg:p-8">
      {/* =========================================================
          HEADER
      ========================================================= */}

      <header className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="mb-1 text-[12px] font-medium text-blue-400">
            Your workspace
          </p>

          <h1 className="text-[30px] font-semibold leading-tight text-slate-100">
            Good morning, Ashu
          </h1>

          <p className="mt-1.5 text-[13px] text-slate-500">
            Small steps today, a better developer tomorrow.
          </p>
        </div>

        <p className="text-[12px] text-slate-500">
          5 tasks to go · 6 cards to review
        </p>
      </header>

      {/* =========================================================
          CONTINUE LEARNING + METRICS
      ========================================================= */}

      <div className="grid gap-5 xl:grid-cols-[1.7fr_1fr]">
        {/* Continue Learning */}

        <section className="relative min-h-52 overflow-hidden rounded-lg border border-blue-500/25 bg-[#0D151F] p-6">
          <div
            className="
              pointer-events-none
              absolute
              -right-8
              -top-20
              size-48
              rounded-full
              bg-blue-500/10
              blur-3xl
            "
          />

          <div className="relative flex h-full items-center justify-between gap-5">
            <div className="flex h-full max-w-md flex-col items-start justify-center">
              <span className="text-[11px] font-semibold text-blue-400">
                CONTINUE LEARNING
              </span>

              <h2 className="mt-3 text-[22px] font-semibold text-slate-100">
                JavaScript
              </h2>

              <p className="mt-1 text-[13px] leading-relaxed text-slate-500">
                Language fundamentals, async and advanced patterns.
              </p>

              <div className="mt-5 flex w-full max-w-xs items-center gap-4">
                <Button
                  asChild
                  size="sm"
                  className="h-8 rounded-lg bg-blue-500 px-3 text-[11px] font-medium text-white hover:bg-blue-600"
                >
                  <Link
                    to="/subjects"
                    className="flex items-center gap-1 whitespace-nowrap"
                  >
                    <span>Continue</span>
                    <ArrowRight className="size-3.5 shrink-0" />
                  </Link>
                </Button>

                <div className="min-w-20 flex-1">
                  {/* Progress bar */}
                  <div className="h-1.5 w-full overflow-hidden rounded-full bg-slate-800">
                    <div className="h-full w-[82%] rounded-full bg-blue-500" />
                  </div>

                  <p className="mt-1.5 text-right text-[11px] text-slate-500">
                    82% complete
                  </p>
                </div>
              </div>
            </div>

            <div className="hidden size-28 shrink-0 items-center justify-center rounded-lg border border-blue-500/20 bg-blue-500/10 text-blue-500 sm:flex">
              <Code2 className="size-14" strokeWidth={1.35} />
            </div>
          </div>
        </section>

        {/* Metrics */}

        <section className="grid grid-cols-2 gap-3">
          <div className="flex min-h-24 flex-col justify-center rounded-md border border-white/8  bg-[#0D151F] px-4 py-3">
            <p className="text-[11px] text-slate-500">Learning progress</p>

            <p className="mt-1 text-[23px] font-semibold leading-none text-slate-100">
              0%
            </p>

            <p className="mt-2 text-[11px] text-slate-500">Cards reviewed</p>
          </div>

          <div className="flex min-h-24 flex-col justify-center rounded-md border border-white/8  bg-[#0D151F] px-4 py-3">
            <p className="text-[11px] text-slate-500">Current streak</p>

            <p className="mt-1 text-[23px] font-semibold leading-none text-slate-100">
              12 days
            </p>

            <p className="mt-2 text-[11px] text-slate-500">Keep showing up</p>
          </div>

          <div className="flex min-h-24 flex-col justify-center rounded-md border border-white/8  bg-[#0D151F] px-4 py-3">
            <p className="text-[11px] text-slate-500">Tasks today</p>

            <p className="mt-1 text-[23px] font-semibold leading-none text-slate-100">
              5
            </p>

            <p className="mt-2 text-[11px] text-slate-500">2 completed</p>
          </div>

          <div className="flex min-h-24 flex-col justify-center rounded-md border border-white/8  bg-[#0D151F] px-4 py-3">
            <p className="text-[11px] text-slate-500">Revision due</p>

            <p className="mt-1 text-[23px] font-semibold leading-none text-slate-100">
              6
            </p>

            <p className="mt-2 text-[11px] text-slate-500">Ready to review</p>
          </div>
        </section>
      </div>

      {/* =========================================================
          LEARNING PATH
      ========================================================= */}

      <section>
        <div className="mb-3 flex items-center justify-between">
          <h2 className="text-[15px] font-semibold text-slate-100">
            Your learning path
          </h2>

          <Link
            to="/subjects"
            className="inline-flex items-center gap-1 text-[12px] text-blue-400 hover:underline"
          >
            View all
            <ArrowRight className="size-3" />
          </Link>
        </div>

        <div className="grid gap-3 sm:grid-cols-3">
          {/* JavaScript */}

          <Link
            to="/subjects"
            className="group flex items-center gap-3 rounded-md border border-white/8  bg-[#0D151F] p-4 transition-colors hover:border-blue-500/40 hover:bg-white/2"
          >
            <span className="flex size-10 shrink-0 items-center justify-center rounded-md bg-amber-500/15 text-[13px] font-bold text-amber-400">
              JS
            </span>

            <span className="min-w-0 flex-1">
              <strong className="block truncate text-[13px] font-medium text-slate-200">
                JavaScript
              </strong>

              <span className="text-[11px] text-slate-500">82% complete</span>
            </span>

            <ChevronRight className="size-4 text-slate-600 transition-colors group-hover:text-blue-400" />
          </Link>

          {/* React */}

          <Link
            to="/subjects"
            className="group flex items-center gap-3 rounded-md border border-white/8  bg-[#0D151F] p-4 transition-colors hover:border-blue-500/40 hover:bg-white/2"
          >
            <span className="flex size-10 shrink-0 items-center justify-center rounded-md bg-cyan-500/15 text-[13px] font-bold text-cyan-400">
              ⚛
            </span>

            <span className="min-w-0 flex-1">
              <strong className="block truncate text-[13px] font-medium text-slate-200">
                React
              </strong>

              <span className="text-[11px] text-slate-500">71% complete</span>
            </span>

            <ChevronRight className="size-4 text-slate-600 transition-colors group-hover:text-blue-400" />
          </Link>

          {/* System Design */}

          <Link
            to="/subjects"
            className="group flex items-center gap-3 rounded-md border border-white/8  bg-[#0D151F] p-4 transition-colors hover:border-blue-500/40 hover:bg-white/2"
          >
            <span className="flex size-10 shrink-0 items-center justify-center rounded-md bg-blue-500/15 text-[13px] font-bold text-blue-400">
              SY
            </span>

            <span className="min-w-0 flex-1">
              <strong className="block truncate text-[13px] font-medium text-slate-200">
                System Design
              </strong>

              <span className="text-[11px] text-slate-500">54% complete</span>
            </span>

            <ChevronRight className="size-4 text-slate-600 transition-colors group-hover:text-blue-400" />
          </Link>
        </div>
      </section>

      {/* =========================================================
          TASKS + REVISION
      ========================================================= */}

      <div className="grid gap-8 lg:grid-cols-[1.35fr_1fr]">
        {/* LEFT */}

        <div className="space-y-8">
          {/* Today's Tasks */}

          <section>
            <div className="mb-3 flex items-center justify-between">
              <h2 className="text-[15px] font-semibold text-slate-100">
                Today’s tasks
              </h2>

              <Link
                to="/tasks"
                className="text-[12px] text-blue-400 hover:underline"
              >
                All tasks →
              </Link>
            </div>

            <ul className="divide-y divide-white/8 rounded-md border border-white/8  bg-[#0D151F] px-4">
              {/* Task 1 */}

              <li className="flex min-h-12 items-center gap-3 py-2">
                <span className="flex size-4 shrink-0 items-center justify-center rounded border border-slate-700" />

                <span className="min-w-0 flex-1 text-[13px] text-slate-300">
                  Write note on database sharding
                </span>

                <span className="hidden text-[11px] text-slate-500 sm:block">
                  Knowledge
                </span>
              </li>

              {/* Task 2 */}

              <li className="flex min-h-12 items-center gap-3 py-2">
                <span className="flex size-4 shrink-0 items-center justify-center rounded border border-slate-700" />

                <span className="min-w-0 flex-1 text-[13px] text-slate-300">
                  Add 10 flashcards for TypeScript
                </span>

                <span className="hidden text-[11px] text-slate-500 sm:block">
                  Revision
                </span>
              </li>

              {/* Task 3 */}

              <li className="flex min-h-12 items-center gap-3 py-2">
                <span className="flex size-4 shrink-0 items-center justify-center rounded border border-slate-700" />

                <span className="min-w-0 flex-1 text-[13px] text-slate-300">
                  Plan week 6 of roadmap
                </span>

                <span className="hidden text-[11px] text-slate-500 sm:block">
                  Learning
                </span>
              </li>

              {/* Task 4 */}

              <li className="flex min-h-12 items-center gap-3 py-2">
                <span className="flex size-4 shrink-0 items-center justify-center rounded border border-slate-700" />

                <span className="min-w-0 flex-1 text-[13px] text-slate-300">
                  System design mock interview
                </span>

                <span className="hidden text-[11px] text-slate-500 sm:block">
                  Practice
                </span>
              </li>

              {/* Completed Task */}

              <li className="flex min-h-12 items-center gap-3 py-2">
                <span className="flex size-4 shrink-0 items-center justify-center rounded border border-blue-500 bg-blue-500 text-white">
                  <Check className="size-3" strokeWidth={3} />
                </span>

                <span className="min-w-0 flex-1 text-[13px] text-slate-500 line-through">
                  Revise JavaScript closures
                </span>

                <span className="hidden text-[11px] text-slate-600 sm:block">
                  Revision
                </span>
              </li>
            </ul>
          </section>

          {/* Recent Notes */}

          <section>
            <div className="mb-3 flex items-center justify-between">
              <h2 className="text-[15px] font-semibold text-slate-100">
                Recent notes
              </h2>

              <Link
                to="/notes"
                className="text-[12px] text-blue-400 hover:underline"
              >
                All notes →
              </Link>
            </div>

            <ul className="divide-y divide-white/8 rounded-md border border-white/8  bg-[#0D151F] px-4">
              <li>
                <Link
                  to="/notes"
                  className="block py-3 transition-colors hover:text-blue-400"
                >
                  <div className="flex items-baseline justify-between gap-3">
                    <strong className="truncate text-[13px] font-medium text-slate-200">
                      JavaScript Event Loop
                    </strong>

                    <span className="shrink-0 text-[11px] text-slate-500">
                      2h ago
                    </span>
                  </div>

                  <p className="mt-1 line-clamp-1 text-[12px] text-slate-500">
                    Understanding microtasks, macrotasks and the event loop.
                  </p>
                </Link>
              </li>

              <li>
                <Link
                  to="/notes"
                  className="block py-3 transition-colors hover:text-blue-400"
                >
                  <div className="flex items-baseline justify-between gap-3">
                    <strong className="truncate text-[13px] font-medium text-slate-200">
                      React Rendering
                    </strong>

                    <span className="shrink-0 text-[11px] text-slate-500">
                      Yesterday
                    </span>
                  </div>

                  <p className="mt-1 line-clamp-1 text-[12px] text-slate-500">
                    Reconciliation, rendering and component lifecycle.
                  </p>
                </Link>
              </li>

              <li>
                <Link
                  to="/notes"
                  className="block py-3 transition-colors hover:text-blue-400"
                >
                  <div className="flex items-baseline justify-between gap-3">
                    <strong className="truncate text-[13px] font-medium text-slate-200">
                      Database Sharding
                    </strong>

                    <span className="shrink-0 text-[11px] text-slate-500">
                      2 days ago
                    </span>
                  </div>

                  <p className="mt-1 line-clamp-1 text-[12px] text-slate-500">
                    Horizontal scaling and distributing data across nodes.
                  </p>
                </Link>
              </li>

              <li>
                <Link
                  to="/notes"
                  className="block py-3 transition-colors hover:text-blue-400"
                >
                  <div className="flex items-baseline justify-between gap-3">
                    <strong className="truncate text-[13px] font-medium text-slate-200">
                      REST API Design
                    </strong>

                    <span className="shrink-0 text-[11px] text-slate-500">
                      3 days ago
                    </span>
                  </div>

                  <p className="mt-1 line-clamp-1 text-[12px] text-slate-500">
                    Resource modeling, pagination and API versioning.
                  </p>
                </Link>
              </li>
            </ul>
          </section>
        </div>

        {/* RIGHT */}

        <div className="space-y-8">
          {/* Revision */}

          <section>
            <div className="mb-3 flex items-center justify-between">
              <h2 className="text-[15px] font-semibold text-slate-100">
                Revision due
              </h2>

              <Link
                to="/revision"
                className="text-[12px] text-blue-400 hover:underline"
              >
                Review →
              </Link>
            </div>

            <div className="rounded-md border border-white/8  bg-[#0D151F] px-4">
              <div className="flex items-center gap-3 border-b border-white/8 py-3">
                <Layers3 className="size-4 shrink-0 text-blue-400" />

                <div>
                  <p className="text-[13px] text-slate-300">
                    What is a closure?
                  </p>

                  <p className="text-[11px] text-slate-500">JavaScript</p>
                </div>
              </div>

              <div className="flex items-center gap-3 border-b border-white/8 py-3">
                <Layers3 className="size-4 shrink-0 text-blue-400" />

                <div>
                  <p className="text-[13px] text-slate-300">
                    Microtask vs macrotask?
                  </p>

                  <p className="text-[11px] text-slate-500">JavaScript</p>
                </div>
              </div>

              <div className="flex items-center gap-3 border-b border-white/8 py-3">
                <Layers3 className="size-4 shrink-0 text-blue-400" />

                <div>
                  <p className="text-[13px] text-slate-300">
                    What does the CAP theorem state?
                  </p>

                  <p className="text-[11px] text-slate-500">System Design</p>
                </div>
              </div>

              <div className="flex items-center gap-3 py-3">
                <Layers3 className="size-4 shrink-0 text-blue-400" />

                <div>
                  <p className="text-[13px] text-slate-300">
                    What is a write-through cache?
                  </p>

                  <p className="text-[11px] text-slate-500">System Design</p>
                </div>
              </div>
            </div>
          </section>

          {/* Question of the Day */}

          <section>
            <div className="mb-3">
              <h2 className="text-[15px] font-semibold text-slate-100">
                Question of the day
              </h2>
            </div>

            <div className="rounded-md border border-white/8 bg-[#0D151F] p-5">
              <div className="flex items-center gap-2">
                <Flame className="size-4 text-amber-400" />

                <span className="text-[11px] font-semibold uppercase text-slate-500">
                  JavaScript
                </span>

                <span className="rounded bg-blue-500/10 px-2 py-0.5 text-[10px] font-medium text-blue-400">
                  Medium
                </span>
              </div>

              <p className="mt-3 text-[14px] leading-relaxed text-slate-300">
                What is the difference between debouncing and throttling in
                JavaScript?
              </p>

              <Button size="sm" className="mt-4">
                <Link to="/interview">
                  Answer
                  <ArrowRight className="size-3.5" />
                </Link>
              </Button>
            </div>
          </section>

          {/* Suggested Next */}

          <section>
            <div className="mb-3">
              <h2 className="text-[15px] font-semibold text-slate-100">
                Suggested next
              </h2>
            </div>

            <Button
              variant="outline"
              className="
                h-auto
                w-full
                justify-start
                whitespace-normal
                py-3
                text-left
                text-[12px]
              "
            >
              <Sparkles className="size-4 text-blue-400" />
              Summarize your latest notes
            </Button>
          </section>
        </div>
      </div>
    </div>
  );
};

export default DashBoard;

import {
  Activity,
  ArrowUpRight,
  Clock3,
} from "lucide-react";

const weeklyActivity = [
  { day: "Mon", minutes: 35 },
  { day: "Tue", minutes: 52 },
  { day: "Wed", minutes: 28 },
  { day: "Thu", minutes: 64 },
  { day: "Fri", minutes: 45 },
  { day: "Sat", minutes: 72 },
  { day: "Sun", minutes: 38 },
];

const learningAreas = [
  { name: "JavaScript", value: 82 },
  { name: "React", value: 68 },
  { name: "TypeScript", value: 61 },
  { name: "System Design", value: 45 },
  { name: "Node.js", value: 38 },
];

const Analytics = () => {
  return (
    <div className="space-y-12">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-semibold tracking-tight text-slate-100">
          Analytics
        </h1>

        <p className="mt-1.5 text-sm text-slate-500">
          A snapshot of your learning activity and progress.
        </p>
      </div>

      {/* Overview */}
      <section className="border-y border-white/6">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4">
          {/* Notes */}
          <div className="border-b border-white/6 py-5 lg:border-b-0 lg:border-r lg:pr-8">
            <p className="text-[11px] font-medium uppercase tracking-wide text-slate-600">
              Notes
            </p>

            <p className="mt-2 text-2xl font-semibold tracking-tight text-slate-100">
              48
            </p>

            <p className="mt-1 text-[11.5px] text-slate-600">
              In your knowledge base
            </p>
          </div>

          {/* Tasks */}
          <div className="border-b border-white/6 py-5 sm:pl-8 lg:border-b-0 lg:border-r lg:px-8">
            <p className="text-[11px] font-medium uppercase tracking-wide text-slate-600">
              Tasks completed
            </p>

            <div className="mt-2 flex items-baseline gap-2">
              <p className="text-2xl font-semibold tracking-tight text-slate-100">
                12
              </p>

              <span className="text-[11px] text-slate-600">
                / 18
              </span>
            </div>

            <p className="mt-1 text-[11.5px] text-slate-600">
              Completed tasks
            </p>
          </div>

          {/* Cards */}
          <div className="border-b border-white/6 py-5 sm:pr-8 lg:border-b-0 lg:border-r lg:px-8">
            <p className="text-[11px] font-medium uppercase tracking-wide text-slate-600">
              Cards reviewed
            </p>

            <div className="mt-2 flex items-baseline gap-2">
              <p className="text-2xl font-semibold tracking-tight text-slate-100">
                42
              </p>

              <span className="text-[11px] text-slate-600">
                / 60
              </span>
            </div>

            <p className="mt-1 text-[11.5px] text-slate-600">
              Across your decks
            </p>
          </div>

          {/* Questions */}
          <div className="py-5 sm:pl-8 lg:pl-8">
            <p className="text-[11px] font-medium uppercase tracking-wide text-slate-600">
              Questions
            </p>

            <p className="mt-2 text-2xl font-semibold tracking-tight text-slate-100">
              126
            </p>

            <p className="mt-1 text-[11.5px] text-slate-600">
              Ready to practise
            </p>
          </div>
        </div>
      </section>

      {/* Study Activity */}
      <section>
        <div className="mb-5 flex items-end justify-between">
          <div>
            <h2 className="text-sm font-medium text-slate-300">
              Study activity
            </h2>

            <p className="mt-1 text-[11.5px] text-slate-600">
              Minutes studied over the last 7 days
            </p>
          </div>

          <div className="hidden items-center gap-1.5 text-[11px] text-slate-600 sm:flex">
            <Clock3 className="size-3.5" />
            48 min/day average
          </div>
        </div>

        <div className="border-y border-white/6 py-6">
          <div className="flex h-44 items-end gap-3 sm:gap-5">
            {weeklyActivity.map((day) => (
              <div
                key={day.day}
                className="group flex h-full flex-1 flex-col items-center justify-end gap-2"
              >
                <div className="relative flex w-full flex-1 items-end justify-center">
                  {/* Tooltip */}
                  <div className="pointer-events-none absolute bottom-full left-1/2 mb-2 -translate-x-1/2 whitespace-nowrap rounded-md border border-white/8 bg-[#111923] px-2 py-1 text-[10px] text-slate-300 opacity-0 shadow-lg transition-opacity group-hover:opacity-100">
                    {day.minutes} min
                  </div>

                  <div
                    className="
                      w-full
                      max-w-12
                      rounded-sm
                      bg-blue-500/20
                      transition-all
                      group-hover:bg-blue-500/40
                    "
                    style={{
                      height: `${(day.minutes / 72) * 100}%`,
                    }}
                  />
                </div>

                <span className="text-[10.5px] text-slate-600">
                  {day.day}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Activity className="size-3.5 text-blue-400/60" />

            <span className="text-[11.5px] text-slate-600">
              334 minutes this week
            </span>
          </div>

          <span className="text-[11px] text-slate-700">
            7 day view
          </span>
        </div>
      </section>

      {/* Learning Areas */}
      <section>
        <div className="mb-5">
          <h2 className="text-sm font-medium text-slate-300">
            Learning areas
          </h2>

          <p className="mt-1 text-[11.5px] text-slate-600">
            Current coverage across your subjects
          </p>
        </div>

        <div className="border-y border-white/6">
          {learningAreas.map((area, index) => (
            <div
              key={area.name}
              className={`
                group
                flex
                items-center
                gap-5
                py-4
                ${
                  index !== learningAreas.length - 1
                    ? "border-b border-white/6"
                    : ""
                }
              `}
            >
              {/* Area name */}
              <div className="w-32 shrink-0 sm:w-44">
                <p className="text-[13px] text-slate-300">
                  {area.name}
                </p>
              </div>

              {/* Progress */}
              <div className="flex flex-1 items-center gap-4">
                <div className="h-1 flex-1 overflow-hidden rounded-full bg-slate-800">
                  <div
                    className="
                      h-full
                      rounded-full
                      bg-blue-500/60
                      transition-all
                      group-hover:bg-blue-500
                    "
                    style={{
                      width: `${area.value}%`,
                    }}
                  />
                </div>

                <span className="w-9 text-right text-[11px] tabular-nums text-slate-600">
                  {area.value}%
                </span>
              </div>

              <ArrowUpRight className="hidden size-3.5 text-slate-700 transition-colors group-hover:text-blue-400 sm:block" />
            </div>
          ))}
        </div>
      </section>

      {/* Footer Insight */}
      <section className="flex flex-col gap-3 border-t border-white/6 pt-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-[12px] font-medium text-slate-400">
            Keep the momentum
          </p>

          <p className="mt-1 text-[11.5px] text-slate-600">
            Consistent study sessions matter more than long sessions.
          </p>
        </div>

        <p className="text-[11px] tabular-nums text-slate-700">
          48 min average / day
        </p>
      </section>
    </div>
  );
};

export default Analytics;
import { Clock3, TrendingUp } from "lucide-react";

const subjects = [
  {
    name: "JavaScript",
    progress: 82,
    completed: "41 of 50 topics",
  },
  {
    name: "React",
    progress: 68,
    completed: "34 of 50 topics",
  },
  {
    name: "TypeScript",
    progress: 61,
    completed: "24 of 40 topics",
  },
  {
    name: "System Design",
    progress: 45,
    completed: "18 of 40 topics",
  },
  {
    name: "Node.js",
    progress: 38,
    completed: "15 of 40 topics",
  },
];

const weeklyActivity = [
  { day: "Mon", minutes: 75 },
  { day: "Tue", minutes: 110 },
  { day: "Wed", minutes: 55 },
  { day: "Thu", minutes: 135 },
  { day: "Fri", minutes: 90 },
  { day: "Sat", minutes: 160 },
  { day: "Sun", minutes: 70 },
];

const Progress = () => {
  const maxActivity = Math.max(
    ...weeklyActivity.map((item) => item.minutes),
  );

  return (
    <div className="space-y-10">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-semibold tracking-tight text-slate-100">
          Progress
        </h1>

        <p className="mt-1 max-w-2xl text-sm text-slate-500">
          Track your learning coverage and study activity across different
          areas.
        </p>
      </div>

      {/* Overview */}
      <section className="grid divide-y divide-white/8 border-y border-white/8 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
        <div className="py-5 sm:pr-8">
          <p className="text-[12px] font-medium text-slate-500">
            Overall coverage
          </p>

          <p className="mt-2 text-2xl font-semibold tracking-tight text-slate-100">
            64%
          </p>

          <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-slate-800">
            <div className="h-full w-[64%] rounded-full bg-blue-500" />
          </div>

          <p className="mt-2 text-[11.5px] text-slate-600">
            Across all subjects
          </p>
        </div>

        <div className="py-5 sm:px-8">
          <p className="text-[12px] font-medium text-slate-500">
            Study time
          </p>

          <p className="mt-2 text-2xl font-semibold tracking-tight text-slate-100">
            11h 35m
          </p>

          <div className="mt-2 flex items-center gap-1.5 text-[11.5px] text-slate-500">
            <Clock3 className="size-3.5" strokeWidth={1.75} />
            Last 7 days
          </div>
        </div>

        <div className="py-5 sm:pl-8">
          <p className="text-[12px] font-medium text-slate-500">
            Topics completed
          </p>

          <p className="mt-2 text-2xl font-semibold tracking-tight text-slate-100">
            132
          </p>

          <div className="mt-2 flex items-center gap-1.5 text-[11.5px] text-slate-500">
            <TrendingUp className="size-3.5" strokeWidth={1.75} />
            +18 this week
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr]">
        {/* Coverage */}
        <section>
          <div className="mb-5">
            <h2 className="text-sm font-semibold text-slate-200">
              Coverage by area
            </h2>

            <p className="mt-1 text-[12px] text-slate-600">
              Your current progress across each learning area.
            </p>
          </div>

          <div className="space-y-6">
            {subjects.map((subject) => (
              <div key={subject.name}>
                <div className="mb-2 flex items-center justify-between">
                  <span className="text-[13.5px] font-medium text-slate-300">
                    {subject.name}
                  </span>

                  <span className="text-[11.5px] tabular-nums text-slate-500">
                    {subject.progress}%
                  </span>
                </div>

                <div className="h-1.5 overflow-hidden rounded-full bg-slate-800">
                  <div
                    className="h-full rounded-full bg-blue-500 transition-all"
                    style={{ width: `${subject.progress}%` }}
                  />
                </div>

                <p className="mt-1.5 text-[11px] text-slate-600">
                  {subject.completed}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Weekly Activity */}
        <section>
          <div className="mb-5">
            <h2 className="text-sm font-semibold text-slate-200">
              Weekly activity
            </h2>

            <p className="mt-1 text-[12px] text-slate-600">
              Time spent learning over the last 7 days.
            </p>
          </div>

          <div className="border-y border-white/8 py-6">
            <div className="flex h-48 items-end gap-3">
              {weeklyActivity.map((item) => {
                const height = Math.max(
                  (item.minutes / maxActivity) * 100,
                  8,
                );

                return (
                  <div
                    key={item.day}
                    className="flex h-full flex-1 flex-col items-center justify-end gap-2"
                  >
                    <div
                      className="
                        w-full
                        max-w-8
                        rounded-t-[3px]
                        bg-blue-500/30
                        transition-colors
                        hover:bg-blue-500/50
                      "
                      style={{ height: `${height}%` }}
                      title={`${item.minutes} minutes`}
                    />

                    <span className="text-[10.5px] text-slate-600">
                      {item.day}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Activity Summary */}
          <div className="mt-5 flex items-center justify-between">
            <div>
              <p className="text-[12px] text-slate-500">Daily average</p>
              <p className="mt-1 text-sm font-medium text-slate-300">
                99 min
              </p>
            </div>

            <div className="text-right">
              <p className="text-[12px] text-slate-500">Best day</p>
              <p className="mt-1 text-sm font-medium text-slate-300">
                Saturday · 160m
              </p>
            </div>
          </div>
        </section>
      </div>

      {/* Learning Summary */}
      <section className="border-t border-white/8 pt-8">
        <div className="mb-5">
          <h2 className="text-sm font-semibold text-slate-200">
            Learning summary
          </h2>

          <p className="mt-1 text-[12px] text-slate-600">
            A quick snapshot of your current learning momentum.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <div className="border border-white/8 bg-white/1.5 p-4">
            <p className="text-[11px] text-slate-600">Notes created</p>
            <p className="mt-2 text-lg font-semibold text-slate-200">48</p>
          </div>

          <div className="border border-white/8 bg-white/1.5 p-4">
            <p className="text-[11px] text-slate-600">Questions solved</p>
            <p className="mt-2 text-lg font-semibold text-slate-200">126</p>
          </div>

          <div className="border border-white/8 bg-white/1.5 p-4">
            <p className="text-[11px] text-slate-600">Cards reviewed</p>
            <p className="mt-2 text-lg font-semibold text-slate-200">84</p>
          </div>

          <div className="border border-white/8 bg-white/1.5 p-4">
            <p className="text-[11px] text-slate-600">Current streak</p>
            <p className="mt-2 text-lg font-semibold text-slate-200">
              12 days
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Progress;
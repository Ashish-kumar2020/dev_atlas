import { ChevronRight, Plus } from "lucide-react";
import { Button } from "../../../@/components/ui/button";

const Topics = () => {
  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight text-slate-100">
            Topics
          </h1>

          <p className="mt-1 max-w-2xl text-sm text-slate-500">
            Your knowledge, structured. Expand a subject to walk its topics and
            subtopics.
          </p>
        </div>

        <Button
          size="sm"
          className="h-9 bg-blue-500 text-xs text-white hover:bg-blue-600"
        >
          <Plus className="size-4" />
          New topic
        </Button>
      </div>
      <div className="max-w-3xl">
        <ul className="space-y-1">
          <li>
            <div className="flex items-center gap-2 rounded-md px-2 py-2 transition-colors hover:bg-white/3">
              <ChevronRight className="size-3.5 rotate-90 text-slate-500" />

              <span className="text-[14px] font-medium text-slate-200">
                JavaScript
              </span>

              <span className="ml-auto text-[12px] tabular-nums text-slate-600">
                24 notes
              </span>
            </div>

            <ul className="relative">
              <span className="absolute inset-y-0 left-3.75 w-px bg-white/8" />

              <li>
                <div className="flex items-center gap-2 rounded-md py-1.5 pl-7 pr-2 hover:bg-white/3">
                  <ChevronRight className="size-3.5 rotate-90 text-slate-600" />

                  <span className="text-[14px] text-slate-300">
                    Fundamentals
                  </span>

                  <span className="ml-auto text-[12px] text-slate-600">
                    8 notes
                  </span>
                </div>

                <ul className="relative">
                  <span className="absolute inset-y-0 left-8.75 w-px bg-white/6" />

                  <li>
                    <div className="flex items-center gap-2 py-1.5 pl-12 pr-2">
                      <span className="size-3.5" />

                      <span className="text-[14px] text-slate-500">
                        Variables
                      </span>

                      <span className="ml-auto text-[12px] text-slate-600">
                        3 notes
                      </span>
                    </div>
                  </li>

                  <li>
                    <div className="flex items-center gap-2 py-1.5 pl-12 pr-2">
                      <span className="size-3.5" />

                      <span className="text-[14px] text-slate-500">
                        Data Types
                      </span>

                      <span className="ml-auto text-[12px] text-slate-600">
                        2 notes
                      </span>
                    </div>
                  </li>

                  <li>
                    <div className="flex items-center gap-2 py-1.5 pl-12 pr-2">
                      <span className="size-3.5" />

                      <span className="text-[14px] text-slate-500">
                        Functions
                      </span>

                      <span className="ml-auto text-[12px] text-slate-600">
                        3 notes
                      </span>
                    </div>
                  </li>
                </ul>
              </li>

              {/* Async JavaScript */}

              <li>
                <div className="flex items-center gap-2 rounded-md py-1.5 pl-7 pr-2 hover:bg-white/3">
                  <ChevronRight className="size-3.5 rotate-90 text-slate-600" />

                  <span className="text-[14px] text-slate-300">
                    Async JavaScript
                  </span>

                  <span className="ml-auto text-[12px] text-slate-600">
                    7 notes
                  </span>
                </div>

                <ul className="relative">
                  <span className="absolute inset-y-0 left-8.75 w-px bg-white/6" />

                  <li>
                    <div className="flex items-center gap-2 py-1.5 pl-12 pr-2">
                      <span className="size-3.5" />

                      <span className="text-[14px] text-slate-500">
                        Promises
                      </span>

                      <span className="ml-auto text-[12px] text-slate-600">
                        3 notes
                      </span>
                    </div>
                  </li>

                  <li>
                    <div className="flex items-center gap-2 py-1.5 pl-12 pr-2">
                      <span className="size-3.5" />

                      <span className="text-[14px] text-slate-500">
                        Async / Await
                      </span>

                      <span className="ml-auto text-[12px] text-slate-600">
                        2 notes
                      </span>
                    </div>
                  </li>

                  <li>
                    <div className="flex items-center gap-2 py-1.5 pl-12 pr-2">
                      <span className="size-3.5" />

                      <span className="text-[14px] text-slate-500">
                        Event Loop
                      </span>

                      <span className="ml-auto text-[12px] text-slate-600">
                        2 notes
                      </span>
                    </div>
                  </li>
                </ul>
              </li>

              <li>
                <div className="flex items-center gap-2 rounded-md py-1.5 pl-7 pr-2 hover:bg-white/3">
                  <ChevronRight className="size-3.5 text-slate-600" />

                  <span className="text-[14px] text-slate-300">
                    Advanced Patterns
                  </span>

                  <span className="ml-auto text-[12px] text-slate-600">
                    9 notes
                  </span>
                </div>
              </li>
            </ul>
          </li>

          <li>
            <div className="flex items-center gap-2 rounded-md px-2 py-2 transition-colors hover:bg-white/3">
              <ChevronRight className="size-3.5 rotate-90 text-slate-500" />

              <span className="text-[14px] font-medium text-slate-200">
                React
              </span>

              <span className="ml-auto text-[12px] tabular-nums text-slate-600">
                18 notes
              </span>
            </div>

            <ul className="relative">
              <span className="absolute inset-y-0 left-3.75 w-px bg-white/8" />

              <li>
                <div className="flex items-center gap-2 py-1.5 pl-7 pr-2 hover:bg-white/3">
                  <ChevronRight className="size-3.5 text-slate-600" />

                  <span className="text-[14px] text-slate-300">Hooks</span>

                  <span className="ml-auto text-[12px] text-slate-600">
                    7 notes
                  </span>
                </div>
              </li>

              <li>
                <div className="flex items-center gap-2 py-1.5 pl-7 pr-2 hover:bg-white/3">
                  <ChevronRight className="size-3.5 text-slate-600" />

                  <span className="text-[14px] text-slate-300">
                    Performance
                  </span>

                  <span className="ml-auto text-[12px] text-slate-600">
                    5 notes
                  </span>
                </div>
              </li>

              <li>
                <div className="flex items-center gap-2 py-1.5 pl-7 pr-2 hover:bg-white/3">
                  <ChevronRight className="size-3.5 text-slate-600" />

                  <span className="text-[14px] text-slate-300">
                    State Management
                  </span>

                  <span className="ml-auto text-[12px] text-slate-600">
                    6 notes
                  </span>
                </div>
              </li>
            </ul>
          </li>

          <li>
            <div className="flex items-center gap-2 rounded-md px-2 py-2 transition-colors hover:bg-white/3">
              <ChevronRight className="size-3.5 text-slate-500" />

              <span className="text-[14px] font-medium text-slate-200">
                System Design
              </span>

              <span className="ml-auto text-[12px] tabular-nums text-slate-600">
                16 notes
              </span>
            </div>
          </li>

          <li>
            <div className="flex items-center gap-2 rounded-md px-2 py-2 transition-colors hover:bg-white/3">
              <ChevronRight className="size-3.5 text-slate-500" />

              <span className="text-[14px] font-medium text-slate-200">
                TypeScript
              </span>

              <span className="ml-auto text-[12px] tabular-nums text-slate-600">
                12 notes
              </span>
            </div>
          </li>

          <li>
            <div className="flex items-center gap-2 rounded-md px-2 py-2 transition-colors hover:bg-white/3">
              <ChevronRight className="size-3.5 text-slate-500" />

              <span className="text-[14px] font-medium text-slate-200">
                Node.js
              </span>

              <span className="ml-auto text-[12px] tabular-nums text-slate-600">
                9 notes
              </span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Topics;

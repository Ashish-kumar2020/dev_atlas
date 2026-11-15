import { BookOpen, Plus, Layers3 } from "lucide-react";

import { Button } from "../../../@/components/ui/button";
import { Dialog, DialogTrigger } from "../../../@/components/ui/dialog";

import AddSubject from "./AddSubject";
import { useSubjects } from "./subject.queries";
import SubjectList from "./SubjectList";

export function Subject() {
  const { data, isPending, isError, error, refetch } = useSubjects();

  console.log(data?.subjectsData);

  if (isPending) {
    return <p>Loading Subjects....</p>;
  }

  if (isError) {
    return (
      <div>
        <p>Failed to load Subjects: {error.message}</p>
        <button onClick={() => refetch()}>Retry</button>
      </div>
    );
  }

  return (
    <div className="min-h-screen w-full bg-[#080d15] p-6 text-[#e2e8f0] sm:p-8">
      <div className="mx-auto max-w-342 space-y-6">
        {/* Header */}
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
          <div>
            <h1 className="text-2xl font-semibold tracking-tight text-[#e2e8f0]">
              Subjects
            </h1>

            <p className="mt-1 text-sm text-[#7186a3]">
              Organize your learning and keep track of your subjects.
            </p>
          </div>

          <Dialog>
            <DialogTrigger
              render={
                <Button className="h-9 rounded-lg bg-[#2879f6] px-4 text-sm font-medium text-white shadow-sm transition-colors hover:bg-[#1d6ce0]">
                  <Plus className="mr-2 size-4" />
                  Add Subject
                </Button>
              }
            />

            <AddSubject />
          </Dialog>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div className="rounded-xl border border-[#252d39] bg-[#0b111b] p-5">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-[#7186a3]">Total Subjects</p>

                <p className="mt-2 text-3xl font-semibold tracking-tight text-[#e2e8f0]">
                  {data?.subjectsData.length}
                </p>
              </div>

              <div className="flex size-11 items-center justify-center rounded-xl border border-blue-500/20 bg-blue-500/10">
                <Layers3 className="size-5 text-[#4290ff]" />
              </div>
            </div>

            <p className="mt-3 text-xs text-[#7186a3]">
              Subjects in your learning workspace
            </p>
          </div>

          <div className="rounded-xl border border-[#252d39] bg-[#0b111b] p-5">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-[#7186a3]">Learning Workspace</p>

                <p className="mt-2 text-lg font-semibold text-[#e2e8f0]">
                  Stay Organized
                </p>
              </div>

              <div className="flex size-11 items-center justify-center rounded-xl border border-[#252d39] bg-[#101a28]">
                <BookOpen className="size-5 text-[#7186a3]" />
              </div>
            </div>

            <p className="mt-3 text-xs text-[#7186a3]">
              Group notes and topics by subject.
            </p>
          </div>
        </div>

        {/* Subject List */}
        {/* Subject List */}
        <section className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-base font-semibold text-[#e2e8f0]">
                Your Subjects
              </h2>

              <p className="mt-1 text-sm text-[#7186a3]">
                All your learning areas in one place.
              </p>
            </div>

            <span className="rounded-md border border-[#252d39] bg-[#0e1622] px-2.5 py-1 text-xs text-[#7186a3]">
              {data?.subjectsData.length ?? 0} subjects
            </span>
          </div>

          {data?.subjectsData.length ? (
            <SubjectList subjects={data.subjectsData} />
          ) : (
            <div className="flex min-h-70 flex-col items-center justify-center rounded-xl border border-dashed border-[#29313d] bg-[#0b111b] px-6 py-10 text-center">
              <div className="mb-4 flex size-14 items-center justify-center rounded-2xl border border-[#252d39] bg-[#101a28]">
                <BookOpen className="size-6 text-[#7186a3]" />
              </div>

              <h3 className="text-base font-medium text-[#cbd5e1]">
                No subjects yet
              </h3>

              <p className="mt-2 max-w-sm text-sm leading-6 text-[#7186a3]">
                Start building your learning workspace. Create your first
                subject to organize topics and notes.
              </p>

              <Dialog>
                <DialogTrigger
                  render={
                    <Button
                      variant="outline"
                      className="mt-5 h-9 border-[#29313d] bg-[#0e1622] px-4 text-sm text-[#cbd5e1] hover:bg-[#172131] hover:text-white"
                    >
                      <Plus className="mr-2 size-4" />
                      Create your first subject
                    </Button>
                  }
                />
                <AddSubject />
              </Dialog>
            </div>
          )}
        </section>
      </div>
    </div>
  );
}

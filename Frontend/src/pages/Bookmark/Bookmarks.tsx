import { Plus, Trash2 } from "lucide-react";

import { Button } from "../../../@/components/ui/button";

const Bookmarks = () => {
  return (
    <div className="space-y-6">
      {/* =========================================================
          PAGE HEADER
      ========================================================= */}

      <div>
        <h1 className="text-2xl font-semibold tracking-tight text-slate-100">
          Bookmarks
        </h1>

        <p className="mt-1 text-sm text-slate-500">
          Saved reading, kept out of your browser tabs.
        </p>
      </div>

      {/* =========================================================
          ADD BOOKMARK
      ========================================================= */}

      <div className="mb-8 flex flex-wrap gap-2">
        <input
          placeholder="Title"
          className="
            h-9
            min-w-56
            flex-1
            rounded-md
            border
            border-white/[0.08]
            bg-[#0D151F]
            px-3
            text-[13px]
            text-slate-200
            outline-none
            placeholder:text-slate-600
            focus:border-blue-500/50
            focus:ring-2
            focus:ring-blue-500/10
          "
        />

        <input
          placeholder="Source or URL"
          className="
            h-9
            w-48
            rounded-md
            border
            border-white/[0.08]
            bg-[#0D151F]
            px-3
            text-[13px]
            text-slate-200
            outline-none
            placeholder:text-slate-600
            focus:border-blue-500/50
            focus:ring-2
            focus:ring-blue-500/10
          "
        />

        <Button
          size="sm"
          className="h-9 bg-blue-500 px-3.5 text-[13px] font-medium text-white hover:bg-blue-600"
        >
          <Plus className="size-4" strokeWidth={2} />
          Save
        </Button>
      </div>

      {/* =========================================================
          BOOKMARK LIST
      ========================================================= */}

      <ul className="divide-y divide-white/[0.08] border-y border-white/[0.08]">
        {/* Bookmark 1 */}

        <li className="group flex items-center justify-between gap-6 py-4">
          <div className="min-w-0">
            <p className="truncate text-[14px] font-medium text-slate-200">
              React Documentation
            </p>

            <p className="mt-1 truncate text-[12px] text-slate-500">
              react.dev
            </p>
          </div>

          <div className="flex shrink-0 items-center gap-3">
            <span className="rounded bg-cyan-500/10 px-2 py-1 text-[10px] text-cyan-400">
              React
            </span>

            <button
              type="button"
              aria-label="Remove bookmark"
              className="
                rounded
                p-1.5
                text-slate-600
                opacity-0
                transition-all
                hover:bg-white/[0.05]
                hover:text-red-400
                group-hover:opacity-100
              "
            >
              <Trash2 className="size-3.5" strokeWidth={1.75} />
            </button>
          </div>
        </li>

        {/* Bookmark 2 */}

        <li className="group flex items-center justify-between gap-6 py-4">
          <div className="min-w-0">
            <p className="truncate text-[14px] font-medium text-slate-200">
              MDN Web Docs
            </p>

            <p className="mt-1 truncate text-[12px] text-slate-500">
              developer.mozilla.org
            </p>
          </div>

          <div className="flex shrink-0 items-center gap-3">
            <span className="rounded bg-yellow-500/10 px-2 py-1 text-[10px] text-yellow-400">
              JavaScript
            </span>

            <button
              type="button"
              aria-label="Remove bookmark"
              className="
                rounded
                p-1.5
                text-slate-600
                opacity-0
                transition-all
                hover:bg-white/[0.05]
                hover:text-red-400
                group-hover:opacity-100
              "
            >
              <Trash2 className="size-3.5" strokeWidth={1.75} />
            </button>
          </div>
        </li>

        {/* Bookmark 3 */}

        <li className="group flex items-center justify-between gap-6 py-4">
          <div className="min-w-0">
            <p className="truncate text-[14px] font-medium text-slate-200">
              System Design Primer
            </p>

            <p className="mt-1 truncate text-[12px] text-slate-500">
              github.com/donnemartin/system-design-primer
            </p>
          </div>

          <div className="flex shrink-0 items-center gap-3">
            <span className="rounded bg-purple-500/10 px-2 py-1 text-[10px] text-purple-400">
              System Design
            </span>

            <button
              type="button"
              aria-label="Remove bookmark"
              className="
                rounded
                p-1.5
                text-slate-600
                opacity-0
                transition-all
                hover:bg-white/[0.05]
                hover:text-red-400
                group-hover:opacity-100
              "
            >
              <Trash2 className="size-3.5" strokeWidth={1.75} />
            </button>
          </div>
        </li>

        {/* Bookmark 4 */}

        <li className="group flex items-center justify-between gap-6 py-4">
          <div className="min-w-0">
            <p className="truncate text-[14px] font-medium text-slate-200">
              TypeScript Handbook
            </p>

            <p className="mt-1 truncate text-[12px] text-slate-500">
              typescriptlang.org/docs
            </p>
          </div>

          <div className="flex shrink-0 items-center gap-3">
            <span className="rounded bg-blue-500/10 px-2 py-1 text-[10px] text-blue-400">
              TypeScript
            </span>

            <button
              type="button"
              aria-label="Remove bookmark"
              className="
                rounded
                p-1.5
                text-slate-600
                opacity-0
                transition-all
                hover:bg-white/[0.05]
                hover:text-red-400
                group-hover:opacity-100
              "
            >
              <Trash2 className="size-3.5" strokeWidth={1.75} />
            </button>
          </div>
        </li>

        {/* Bookmark 5 */}

        <li className="group flex items-center justify-between gap-6 py-4">
          <div className="min-w-0">
            <p className="truncate text-[14px] font-medium text-slate-200">
              Node.js Documentation
            </p>

            <p className="mt-1 truncate text-[12px] text-slate-500">
              nodejs.org/docs
            </p>
          </div>

          <div className="flex shrink-0 items-center gap-3">
            <span className="rounded bg-green-500/10 px-2 py-1 text-[10px] text-green-400">
              Node.js
            </span>

            <button
              type="button"
              aria-label="Remove bookmark"
              className="
                rounded
                p-1.5
                text-slate-600
                opacity-0
                transition-all
                hover:bg-white/[0.05]
                hover:text-red-400
                group-hover:opacity-100
              "
            >
              <Trash2 className="size-3.5" strokeWidth={1.75} />
            </button>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Bookmarks;
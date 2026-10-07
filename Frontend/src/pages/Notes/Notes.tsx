import {

  Plus,
  Search,

  Star,
  
} from "lucide-react";
import { Link } from "react-router-dom";

import { Button } from "../../../@/components/ui/button";

const Notes = () => {
  return (
    <div className="space-y-6">
      {/* =========================================================
          PAGE HEADER
      ========================================================= */}

      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight text-slate-100">
            All Notes
          </h1>

          <p className="mt-1 text-sm text-slate-500">
            Capture ideas. Organize knowledge. Search everything.
          </p>
        </div>

        <Button
          size="sm"
          className="h-9 bg-blue-500 text-xs text-white hover:bg-blue-600"
        >
          <Plus className="size-4" />
          New note
        </Button>
      </div>

      {/* =========================================================
          SEARCH + FILTERS
      ========================================================= */}

      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/[0.08] pb-4">
        {/* Search */}

        <div className="relative w-full max-w-xs">
          <Search
            className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-slate-500"
            strokeWidth={1.75}
          />

          <input
            placeholder="Search notes"
            className="
              h-9
              w-full
              rounded-md
              border
              border-white/[0.08]
              bg-[#0D151F]
              pl-9
              pr-3
              text-[13px]
              text-slate-200
              outline-none
              transition-colors
              placeholder:text-slate-600
              focus:border-blue-500/50
              focus:ring-2
              focus:ring-blue-500/10
            "
          />
        </div>

        {/* Filters */}

        <div className="flex items-center gap-1">
          <button
            className="
              rounded-md
              bg-white/[0.06]
              px-3
              py-1.5
              text-[13px]
              font-medium
              text-slate-200
            "
          >
            All notes
          </button>

          <button
            className="
              rounded-md
              px-3
              py-1.5
              text-[13px]
              text-slate-500
              transition-colors
              hover:text-slate-200
            "
          >
            Favorites
          </button>

          <button
            className="
              rounded-md
              px-3
              py-1.5
              text-[13px]
              text-slate-500
              transition-colors
              hover:text-slate-200
            "
          >
            Recent
          </button>
        </div>
      </div>

      {/* =========================================================
          NOTES LIST
      ========================================================= */}

      <ul className="divide-y divide-white/[0.08] rounded-md border border-white/[0.08] bg-[#0D151F] px-3">
        {/* Note 1 */}

        <li>
          <Link
            to="/notes/1"
            className="
              group
              block
              rounded-md
              px-3
              py-4
              transition-colors
              hover:bg-white/[0.03]
            "
          >
            <div className="flex items-start justify-between gap-6">
              <div className="min-w-0 space-y-2">
                <div className="flex items-center gap-2">
                  <h3 className="text-[15px] font-medium tracking-tight text-slate-200">
                    JavaScript Event Loop
                  </h3>

                  <Star
                    className="size-3.5 fill-amber-400/30 text-amber-400"
                    strokeWidth={1.75}
                  />
                </div>

                <p className="line-clamp-2 max-w-2xl text-[13px] leading-relaxed text-slate-500">
                  Understanding microtasks, macrotasks and how the
                  JavaScript event loop processes asynchronous operations.
                </p>

                <div className="flex flex-wrap gap-1.5 pt-1">
                  <span className="rounded bg-blue-500/10 px-2 py-1 text-[10px] text-blue-400">
                    JavaScript
                  </span>

                  <span className="rounded bg-purple-500/10 px-2 py-1 text-[10px] text-purple-400">
                    Async
                  </span>
                </div>
              </div>

              <span className="shrink-0 text-[12px] text-slate-600">
                2h ago
              </span>
            </div>
          </Link>
        </li>

        {/* Note 2 */}

        <li>
          <Link
            to="/notes/2"
            className="
              group
              block
              rounded-md
              px-3
              py-4
              transition-colors
              hover:bg-white/[0.03]
            "
          >
            <div className="flex items-start justify-between gap-6">
              <div className="min-w-0 space-y-2">
                <div className="flex items-center gap-2">
                  <h3 className="text-[15px] font-medium tracking-tight text-slate-200">
                    React Rendering
                  </h3>
                </div>

                <p className="line-clamp-2 max-w-2xl text-[13px] leading-relaxed text-slate-500">
                  Reconciliation, rendering and how React decides which
                  components need to update.
                </p>

                <div className="flex flex-wrap gap-1.5 pt-1">
                  <span className="rounded bg-cyan-500/10 px-2 py-1 text-[10px] text-cyan-400">
                    React
                  </span>

                  <span className="rounded bg-blue-500/10 px-2 py-1 text-[10px] text-blue-400">
                    Performance
                  </span>
                </div>
              </div>

              <span className="shrink-0 text-[12px] text-slate-600">
                Yesterday
              </span>
            </div>
          </Link>
        </li>

        {/* Note 3 */}

        <li>
          <Link
            to="/notes/3"
            className="
              group
              block
              rounded-md
              px-3
              py-4
              transition-colors
              hover:bg-white/[0.03]
            "
          >
            <div className="flex items-start justify-between gap-6">
              <div className="min-w-0 space-y-2">
                <div className="flex items-center gap-2">
                  <h3 className="text-[15px] font-medium tracking-tight text-slate-200">
                    Database Sharding
                  </h3>

                  <Star
                    className="size-3.5 fill-amber-400/30 text-amber-400"
                    strokeWidth={1.75}
                  />
                </div>

                <p className="line-clamp-2 max-w-2xl text-[13px] leading-relaxed text-slate-500">
                  Horizontal scaling, partitioning strategies and
                  distributing database data across multiple nodes.
                </p>

                <div className="flex flex-wrap gap-1.5 pt-1">
                  <span className="rounded bg-orange-500/10 px-2 py-1 text-[10px] text-orange-400">
                    Database
                  </span>

                  <span className="rounded bg-purple-500/10 px-2 py-1 text-[10px] text-purple-400">
                    System Design
                  </span>
                </div>
              </div>

              <span className="shrink-0 text-[12px] text-slate-600">
                2 days ago
              </span>
            </div>
          </Link>
        </li>

        {/* Note 4 */}

        <li>
          <Link
            to="/notes/4"
            className="
              group
              block
              rounded-md
              px-3
              py-4
              transition-colors
              hover:bg-white/[0.03]
            "
          >
            <div className="flex items-start justify-between gap-6">
              <div className="min-w-0 space-y-2">
                <div className="flex items-center gap-2">
                  <h3 className="text-[15px] font-medium tracking-tight text-slate-200">
                    REST API Design
                  </h3>
                </div>

                <p className="line-clamp-2 max-w-2xl text-[13px] leading-relaxed text-slate-500">
                  Resource modeling, HTTP methods, pagination, filtering,
                  sorting and API versioning.
                </p>

                <div className="flex flex-wrap gap-1.5 pt-1">
                  <span className="rounded bg-green-500/10 px-2 py-1 text-[10px] text-green-400">
                    REST
                  </span>

                  <span className="rounded bg-blue-500/10 px-2 py-1 text-[10px] text-blue-400">
                    API
                  </span>
                </div>
              </div>

              <span className="shrink-0 text-[12px] text-slate-600">
                3 days ago
              </span>
            </div>
          </Link>
        </li>

        {/* Note 5 */}

        <li>
          <Link
            to="/notes/5"
            className="
              group
              block
              rounded-md
              px-3
              py-4
              transition-colors
              hover:bg-white/[0.03]
            "
          >
            <div className="flex items-start justify-between gap-6">
              <div className="min-w-0 space-y-2">
                <div className="flex items-center gap-2">
                  <h3 className="text-[15px] font-medium tracking-tight text-slate-200">
                    TypeScript Generics
                  </h3>
                </div>

                <p className="line-clamp-2 max-w-2xl text-[13px] leading-relaxed text-slate-500">
                  Generic types, constraints, reusable type-safe
                  functions and interfaces.
                </p>

                <div className="flex flex-wrap gap-1.5 pt-1">
                  <span className="rounded bg-blue-500/10 px-2 py-1 text-[10px] text-blue-400">
                    TypeScript
                  </span>
                </div>
              </div>

              <span className="shrink-0 text-[12px] text-slate-600">
                4 days ago
              </span>
            </div>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Notes;
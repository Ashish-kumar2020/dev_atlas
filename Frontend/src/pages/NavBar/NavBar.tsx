import {
  LogOut,
  Moon,
  Search,
  Sparkles, 
} from "lucide-react";

import devAtlasIcon from "../../assets/devAtlas-icon.svg";

const Navbar = () => {
  return (
    <header className="sticky top-0 z-40 h-16 border-b border-white/8 bg-[#080D16]">
      <div className="flex h-full items-center">
        <div className="flex h-full w-54 shrink-0 items-center border-r border-white/8 px-5">
          <div className="flex items-center gap-3">
            <img
              src={devAtlasIcon}
              alt="DevAtlas"
              className="size-8 shrink-0"
            />

            <span className="text-sm font-semibold text-slate-200">
              DevAtlas
            </span>
          </div>
        </div>

        <div className="flex min-w-0 flex-1 items-center justify-between px-8">
          <div className="relative w-full max-w-93.75">
            <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-slate-500" />

            <input
              type="text"
              placeholder="Search notes, topics, snippets..."
              className="
                h-9
                w-full
                rounded-lg
                border
                border-white/8
                bg-[#111A24]
                pl-9
                pr-12
                text-sm
                text-slate-200
                outline-none
                placeholder:text-slate-500
                transition-colors
                focus:border-blue-500/40
                focus:ring-1
                focus:ring-blue-500/20
              "
            />

            <span
              className="
                absolute
                right-2
                top-1/2
                flex
                -translate-y-1/2
                items-center
                rounded
                border
                border-white/8
                px-1.5
                py-0.5
                text-[10px]
                text-slate-500
              "
            >
              ⌘K
            </span>
          </div>
          <div className="ml-6 flex shrink-0 items-center gap-4">
            <button
              type="button"
              className="
                flex
                items-center
                gap-2
                text-xs
                text-slate-400
                transition-colors
                hover:text-slate-200
              "
            >
              <Sparkles className="size-4" />

              <span>Ask DevAtlas</span>
            </button>

            <button
              type="button"
              aria-label="Toggle theme"
              className="
                flex
                size-8
                items-center
                justify-center
                rounded-lg
                text-slate-500
                transition-colors
                hover:bg-white/4
                hover:text-slate-200
              "
            >
              <Moon className="size-4.25" />
            </button>

            <button
              type="button"
              aria-label="Logout"
              className="
                flex
                size-8
                items-center
                justify-center
                rounded-lg
                text-slate-500
                transition-colors
                hover:bg-white/4
                hover:text-slate-200
              "
            >
              <LogOut className="size-4.25" />
            </button>

            <button
              type="button"
              className="
                flex
                size-8
                items-center
                justify-center
                rounded-full
                bg-blue-500/20
                text-[11px]
                font-semibold
                text-blue-400
                ring-1
                ring-blue-500/20
              "
            >
              AS
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
import {
  BarChart3,
  BookOpen,
  Bookmark,
  FileText,
  FolderKanban,
  Home,
  Lightbulb,
  Settings,
  Zap,
  Notebook
} from "lucide-react";

import { NavLink } from "react-router-dom";

const mainNavigation = [
  {
    title: "Dashboard",
    url: "/home",
    icon: Home,
  },
  {
    title: "Notes",
    url: "/home/notes",
    icon: Notebook,
  },
  {
    title: "Subjects",
    url: "/subjects",
    icon: BookOpen,
  },
  {
    title: "Topics",
    url: "/home/topics",
    icon: FolderKanban,
  },
  {
    title: "Bookmarks",
    url: "/home/bookmarks",
    icon: Bookmark,
  },
  {
    title: "Code Snippets",
    url: "/snippets",
    icon: FileText,
  },
];

const practiceNavigation = [
  {
    title: "Questions",
    url: "/home/questions",
    icon: Lightbulb,
  },
  {
    title: "Quiz",
    url: "/home/quiz",
    icon: FileText,
  },
  {
    title: "Interview Mode",
    url: "/home/interview",
    icon: Zap,
  },
  {
    title: "Code Playground",
    url: "/home/playground",
    icon: FolderKanban,
  },
];

const learningNavigation = [
  {
    title: "Roadmaps",
    url: "/roadmaps",
    icon: FolderKanban,
  },
  {
    title: "Preparation",
    url: "/preparation",
    icon: BookOpen,
  },
  {
    title: "Progress",
    url: "/home/progress",
    icon: BarChart3,
  },
  {
    title: "Revision",
    url: "/home/revision",
    icon: FileText,
  },
];

const productivityNavigation = [
  {
    title: "Tasks",
    url: "/home/tasks",
    icon: FileText,
  },
  {
    title: "Analytics",
    url: "/home/analytics",
    icon: BarChart3,
  }
];

const SidebarSection = ({
  title,
  items,
}: {
  title?: string;
  items: typeof mainNavigation;
}) => {
  return (
    <div className="mb-6">
      {title && (
        <p className="mb-2 px-3 text-[10px] font-medium uppercase tracking-[0.12em] text-slate-500">
          {title}
        </p>
      )}

      <ul className="space-y-1">
        {items.map((item) => {
          const Icon = item.icon;

          return (
            <li key={item.title}>
              <NavLink
                to={item.url}
                className={({ isActive }) =>
                  `
                  flex
                  h-9
                  items-center
                  gap-3
                  rounded-lg
                  px-3
                  text-sm
                  transition-colors
                  ${
                    isActive
                      ? "bg-blue-500/10 text-blue-400"
                      : "text-slate-400 hover:bg-white/4 hover:text-slate-200"
                  }
                  `
                }
              >
                {({ isActive }) => (
                  <>
                    <Icon
                      className={`size-4.25 shrink-0 ${
                        isActive
                          ? "text-blue-400"
                          : "text-slate-500"
                      }`}
                    />

                    <span className="truncate">
                      {item.title}
                    </span>
                  </>
                )}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

const Sidebar = () => {
  return (
   <aside
  className="
    sticky
    top-16
    h-[calc(100vh-4rem)]
    w-54
    shrink-0
    overflow-y-auto
    border-r
    border-white/8
    bg-[#080D16]
    px-3
    py-5
    scrollbar-none
    [&::-webkit-scrollbar]:hidden
  "
>
      <nav aria-label="Primary sidebar navigation">
        <SidebarSection items={mainNavigation} />

        <SidebarSection
          title="Practice"
          items={practiceNavigation}
        />

        <SidebarSection
          title="Learning"
          items={learningNavigation}
        />

        <SidebarSection
          title="Productivity"
          items={productivityNavigation}
        />

        {/* Settings */}

        <div className="mt-8 border-t border-white/6 pt-4">
          <NavLink
            to="/home/settings"
            className={({ isActive }) =>
              `
              flex
              h-9
              items-center
              gap-3
              rounded-lg
              px-3
              text-sm
              transition-colors
              ${
                isActive
                  ? "bg-blue-500/10 text-blue-400"
                  : "text-slate-400 hover:bg-white/4 hover:text-slate-200"
              }
              `
            }
          >
            <Settings className="size-4.25" />
            <span>Settings</span>
          </NavLink>
        </div>
      </nav>
    </aside>
  );
};

export default Sidebar;
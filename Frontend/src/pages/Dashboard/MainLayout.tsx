import { Outlet } from "react-router-dom";

import Navbar from "./NavBar/NavBar";
import Sidebar from "./SideBar/SideBar";

const MainLayout = () => {
  return (
    <div className="min-h-screen bg-[#080D16] text-slate-200">
      <Navbar />

      <div className="flex min-h-[calc(100vh-64px)]">
        <Sidebar />

        <main className="min-w-0 flex-1 overflow-x-hidden">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default MainLayout;
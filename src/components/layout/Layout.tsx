import { Outlet } from "react-router";
import Sidebar from "../common/Sidebar";

const Layout = () => {
  return (
    <div className="flex min-h-screen h-full">
      <Sidebar />
      <main className="p-8 flex flex-1 flex-col bg-slate-100 min-h-screen">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;

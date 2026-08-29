import { Outlet } from "react-router";
import Sidebar from "../common/Sidebar";

const Layout = () => {
  return (
    <div className="flex min-h-screen">
        <Sidebar/>
        <main className="p-8 flex-1 bg-slate-100">
            <Outlet />
        </main>
    </div>
);
};

export default Layout;

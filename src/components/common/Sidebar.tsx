import { Menu, X } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "../ui/avatar";
import { useState } from "react";

const Sidebar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <aside className="lg:w-51 bg-blue-900 text-white p-7 sticky top-0 left-0 z-50 shadow-md">
      <div className="flex lg:flex-col items-center justify-between lg:items-start lg:gap-3">
        <div className="">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>
        <button
          onClick={() => setOpenMenu(!openMenu)}
          className="relative cursor-pointer lg:hidden size-8"
        >
          <X
            className={`absolute inset-0 m-auto transition-all duration-150 ${openMenu ? "rotate-0 scale-100 opacity-100" : "-rotate-90 scale-0 opacity-0"}`}
          />
          <Menu
            className={`absolute inset-0 m-auto transition-all duration-150 ${openMenu ? "rotate-90 scale-0 opacity-0" : "rotate-0 scale-100 opacity-100"}`}
          />
        </button>
      </div>
      <div
        className={`grid transition-[grid-template-rows, opacity] duration-300 ${openMenu ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"} lg:opacity-100 lg:grid-rows-[1fr]`}
      >
        <div className="min-h-0 overflow-hidden">
          <nav
            className={`flex flex-col lg:items-start items-center gap-2 mt-4 pt-2 border-t border-blue-200/30 lg:border-none`}
          >
            <a
              className="
              relative
              transition-all
              duration-300
              cursor-pointer
              
              before:absolute before:left-0 before:w-px before:h-0 hover:before:h-4 before:top-1/2 before:-translate-y-1/2 hover:pl-2 before:bg-white before:transition-all before:duration-400
              "
            >
              Dashboard
            </a>
            <a
              className="
              relative
              transition-all
              duration-300
              cursor-pointer
              
              before:absolute before:left-0 before:w-px before:h-0 hover:before:h-4 before:top-1/2 before:-translate-y-1/2 hover:pl-2 before:bg-white before:transition-all before:duration-400
              "
            >
              Cadastrar produto
            </a>
            <a
              className="
              relative
              transition-all
              duration-300
              cursor-pointer
              
              before:absolute before:left-0 before:w-px before:h-0 hover:before:h-4 before:top-1/2 before:-translate-y-1/2 hover:pl-2 before:bg-white before:transition-all before:duration-400
              "
            >
              Gerenciar compras
            </a>
          </nav>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;

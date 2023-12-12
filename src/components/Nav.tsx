import React from "react";
import { List, ChatCircle } from "@phosphor-icons/react";

const Nav = ({ scrollY }) => {
  const [showMenu, setShowMenu] = React.useState(false);

  return (
    <div className="w-full flex justify-center">
      <nav
        className={
          "backdrop-blur-xl fixed top-0 transition-all duration-[600ms] w-[94%] sm:w-full max-w-full  mt-4 z-10 rounded-[22px] h-14 overflow-hidden" +
          (scrollY > 30
            ? " !bg-[#131313]/60 !max-w-[320px] sm:!max-w-[600px] ease-spring"
            : " bg-slate-600/0") +
          (showMenu ? " !bg-[#131313]/80 h-[232px] sm:h-14" : "")
        }
      >
        <div className="flex justify-between items-center px-6 sm:px-8 py-2">
          <div>
            <h4 className=" sm:text-">
              Rafael Alexander
            </h4>
            <p className="opacity-50 text-[14px] mt-[-6px]">UX/UI Engineer</p>
          </div>
          <ol className="gap-6 text-lg font-extralight hidden sm:flex">
            <li className="opacity-100">Work</li>
            <li className="opacity-60">About Me</li>
            <li className="opacity-60">Contact</li>
          </ol>
          <div className=" sm:hidden flex gap-4 items-center">
            <button onClick={() => setShowMenu(!showMenu)}>
              <List size={20} weight="bold" />
            </button>
            <ChatCircle size={18} weight="bold" />
          </div>
        </div>
          <ol className="flex flex-col gap-4 px-6 pt-4 pb-6 text-3xl font-extralight sm:hidden">
            <li className="opacity-60">Work</li>
            <li className="opacity-60">About Me</li>
            <li className="opacity-60">Contact</li>
          </ol>
      </nav>
    </div>
  );
};

export default Nav;

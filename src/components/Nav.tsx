import React from "react";
import { List, ChatCircle, ArrowUpRight } from "@phosphor-icons/react";

const Nav = ({ scrollY }) => {
  const [showMenu, setShowMenu] = React.useState(false);

  return (
    <div className="w-full flex justify-center">
      <nav
        className={
          "backdrop-blur-xl fixed top-0 transition-all duration-[600ms] w-[94%] sm:w-full max-w-full  mt-4 z-10 rounded-[22px] h-14 overflow-hidden" +
          (scrollY > 30
            ? " !bg-[#1b1b1b]/60 !max-w-[320px] sm:!max-w-[600px] ease-spring"
            : " bg-slate-600/0") +
          (showMenu ? " !bg-[#1b1b1b]/80 h-[232px] sm:h-14" : "")
        }
      >
        <div className="flex justify-between items-center px-6 sm:px-2 py-2">
          <div className="sm:ml-2">
            <h4 className=" sm:text-">Rafael Alexander</h4>
            <p className="opacity-50 text-[14px] mt-[-6px]">UX/UI Engineer</p>
          </div>
          <ol className="gap-6 text-lg font-extralight hidden sm:flex">
            <button className="opacity-100">Work</button>
            <button className="opacity-100">About Me</button>
            <button className="bg-white/10 text- px-4 py-1.5 rounded-xl flex gap-2 items-center">
              Contact <ArrowUpRight size={18} />
            </button>
          </ol>
          <div className=" sm:hidden flex gap-4 items-center">
            <button onClick={() => setShowMenu(!showMenu)}>
              <List size={20} weight="bold" />
            </button>
            <ChatCircle size={18} weight="bold" />
          </div>
        </div>
        <ol className="flex flex-col items-start gap-4 px-6 pt-4 pb-6 text-3xl font-extralight sm:hidden">
          <button className="opacity-60">Work</button>
          <button className="opacity-60">About Me</button>
          <button className="opacity-60">Contact</button>
        </ol>
      </nav>
    </div>
  );
};

export default Nav;

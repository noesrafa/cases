import React from "react";
import { List, EnvelopeSimple, ChatCircle } from "@phosphor-icons/react";

const Nav = ({ scrollY }) => {
  return (
    <div className="bg-slate-50 w-full flex justify-center">
      <nav
        className={
          "backdrop-blur-xl fixed top-0 transition-all duration-[600ms] w-full max-w-full ease-spring flex justify-between items-center px-6 sm:px-8 py-2 sm:py-3 mt-4 z-10" +
          (scrollY > 30
            ? " !bg-[#222222]/80 !max-w-[320px] sm:!max-w-[600px] rounded-full ease-spring"
            : " bg-slate-600/0")
        }
      >
        <div>
          <h4 className="font-extrabold text-lg sm:text-xl">
            Rafael Alexander
          </h4>
          <p className="opacity-50 text-[14px] mt-[-3px]">
            UX/UI Engineer
          </p>
        </div>
        <ol className="gap-6 text-lg font-extralight hidden sm:flex">
          <li className="opacity-60">Work</li>
          <li className="opacity-60">About Me</li>
          <li className="opacity-60">Contact</li>
        </ol>
        <div className=" sm:hidden flex gap-4 items-center">
          <List size={20} weight="bold"/>
          <ChatCircle size={18}  weight="bold"/>
        </div>
      </nav>
    </div>
  );
};

export default Nav;

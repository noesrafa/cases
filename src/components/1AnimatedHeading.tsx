import React from "react";
import { useLayoutEffect } from "react";
import { gsap } from "gsap";

const AnimatedHeading = () => {
  useLayoutEffect(() => {
    gsap.fromTo(
      ".heading",
      {
        opacity: 0,
        scale: 0.8,
      },
      {
        opacity: 1,
        scale: 1,
        duration: 1,
        ease: "expo.out",
      }
    );
  }, []);

  return (
    <div className="heading px-6 sm:px-8 mt-52 mb-8 font-extralight text-white h">
      <h1 className=" mb-4 sm:mb-0 font-">Fulfilling experiences. Made with Purpose.</h1>
      <div className="w-full h-[1px] bg-slate-400/20 mt-2 mb-4"/>
      <p className="text-lg pb-14 opacity-80">
        I'm a UX/UI Engineer based in Mexico City. I design and build
        websites and applications that are intuitive, accessible, and
        user-friendly.
      </p>
    </div>
  );
};

export default AnimatedHeading;

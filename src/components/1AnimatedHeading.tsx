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
    <div className="mt-32 font-extralight text-white/90 h-[55vh] sm:h-[60vh]">
      <div className="heading mx-8 sm:mx-32">
        <div className="w-0 sm:w-20 h-2 inline-block"/> I´m Rafael — a <b className="text-white ">Multidisciplinary <br className="hidden sm:inline-block" /> designer</b>{" "}
        with focus on Motion,<br className="hidden sm:inline-block"/> interactive design and develop
      </div>
      <button className="btn opacity-0 translate-y-[10px]  mt-6 flex gap-2 items-center">
        <div className="w-1 h-1 bg-white rounded-full" />
        Read my story
      </button>
    </div>
  );
};

export default AnimatedHeading;

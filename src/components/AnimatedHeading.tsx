import React from "react";
import { useLayoutEffect } from "react";
import { gsap } from "gsap";

const AnimatedHeading = () => {
  useLayoutEffect(() => {
    gsap.to(".heading", {
      duration: 1,
      y: 0,
      ease: "expo.out",
    });
    gsap.to(".heading-2", {
      duration: 1,
      y: 0,
      delay: 0.2,
      ease: "expo.out",
    });
    gsap.to(".heading-3", {
      duration: 1,
      y: 0,
      delay: 0.4,
      ease: "expo.out",
    });
    gsap.to(".btn", {
      opacity: 1,
      y: 0,
      delay: 0.6,
      ease: "expo.out",
    });
  }, []);

  //   useLayoutEffect(() => {
  //     gsap.fromTo(
  //       ".heading",
  //       {
  //         f: 0,
  //       },
  //       {
  //         rotation: 360,
  //         duration: 2,
  //         ease: "bounce.out",
  //         scrollTrigger: {
  //           trigger: ".heading",
  //           start: "top center",
  //           end: "bottom ",
  //           scrub: 1,
  //           markers: true,
  //         },
  //       }
  //     );
  //   }, []);

  return (
      <div className="mt-20 font-extralight text-white/90 mx-auto w-fit whitespace-nowrap ">
        <div className="h-[32px] sm:h-[80px] sm:pt-2 overflow-hidden">
          <div className="heading sm:pl-20 translate-y-[100px] text-2xl sm:text-[60px]">
            I´m Rafael - a <b className="text-white serif">Multidisciplinary</b>
          </div>
        </div>
        <div className="h-[32px] sm:h-[80px] sm:pt-2 overflow-hidden">
          <div className="heading-2 translate-y-[100px] text-2xl sm:text-[60px]">
            <b className="text-white serif">Designer</b> with focus on AI,
          </div>
        </div>
        <div className="h-[32px] sm:h-[80px] sm:pt-2 overflow-hidden">
          <div className="heading-3 translate-y-[100px] text-2xl sm:text-[60px]">
            UX/UI Design and Develop.
          </div>
        </div>
        <button className="btn opacity-0 translate-y-[10px]  mt-6 flex gap-2 items-center">
            <div className="w-1 h-1 bg-white rounded-full"/>
            Read my story
        </button>
      </div>
  );
};

export default AnimatedHeading;

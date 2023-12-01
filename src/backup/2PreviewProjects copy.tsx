//@ts-nocheck
import React, { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Styles from "./styles.module.css";

gsap.registerPlugin(ScrollTrigger);

const AnimatedImage = ({ source, size = 1 }) => {
  return <img src={source} className={Styles[size]} />;
};

const PreviewProjects = () => {
  const section = useRef(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    let tl = gsap.timeline();

    tl.to("body", {
      scrollTrigger: {
        trigger: section.current,
        start: "top 50%",
        end: "+=200",
        scrub: 0.5,
        markers: true,
      },
      backgroundColor: "#706E75",
      duration: 4,
      // scale: 1,
    });

    tl.to(section.current, {
      scrollTrigger: {
        trigger: section.current,
        start: "top 70%",
        end: "+=300",
        scrub: 0.5,
        // markers: true,
      },
      scale: 1,
      opacity: 1,
    });
  }, []);
  return (
    <div className={Styles.gridWrapper}>
      <div ref={section} className={Styles.gridContainer}>
        <img src={`image-3.png`} className={Styles.grid1} />
        <img src={`image-1.png`} className={Styles.grid2} />
        <img src={`image-2.png`} className={Styles.grid4} />
        <img src={`image-3.png`} className={Styles.grid1} />
        <img src={`image-2.png`} className={Styles.grid4} />
        <img src={`image-3.png`} className={Styles.grid1} />
        {/* 2ND ROW */}
        <img src={`image-3.png`} className={Styles.grid1} />
        <img src={`image-1.png`} className={Styles.grid2} />
        <img src={`image-3.png`} className={Styles.grid1} />
        <img src={`image-3.png`} className={Styles.grid1} />
        {/* 3RD ROW */}
        <img src={`image-2.png`} className={Styles.grid4} />
        <img src={`image-3.png`} className={Styles.grid1} />
        <img src={`image-3.png`} className={Styles.grid1} />
        <img src={`image-3.png`} className={Styles.grid1} />
        <img src={`image-2.png`} className={Styles.grid4} />
        <img src={`image-3.png`} className={Styles.grid1} />
        <img src={`image-1.png`} className={Styles.grid2} />
        <img src={`image-3.png`} className={Styles.grid1} />
        {/* 4TH ROW */}
        <img src={`image-3.png`} className={Styles.grid1} />
        <img src={`image-1.png`} className={Styles.grid2} />
        <img src={`image-2.png`} className={Styles.grid4} />
        <img src={`image-1.png`} className={Styles.grid2} />
      </div>
    </div>
  );
};

export default PreviewProjects;

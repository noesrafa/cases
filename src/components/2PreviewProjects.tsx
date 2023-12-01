//@ts-nocheck
import React, { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Styles from "./styles.module.css";
gsap.registerPlugin(ScrollTrigger);

const images = [
  {
    source: `/gallery/1-1.png`,
    size: 1,
  },
  {
    source: `/gallery/2-2.png`,
    size: 2,
  },
  {
    source: `/gallery/3-4.png`,
    size: 4,
  },
  {
    source: `/gallery/5-1.png`,
    size: 1,
  },
  {
    source: `/gallery/6-4.png`,
    size: 4,
  },
  {
    source: `/gallery/7-1.png`,
    size: 1,
  },
  {
    source: `/gallery/8-1.png`,
    size: 1,
  },
  {
    source: `/gallery/9-2.png`,
    size: 2,
  },
  {
    source: `/gallery/10-1.png`,
    size: 1,
  },
  {
    source: `/gallery/11-1.png`,
    size: 1,
  },
  // 2ND ROW
  {
    source: `/gallery/12-4.png`,
    size: 4,
  },
  {
    source: `/gallery/13-1.png`,
    size: 1,
  },
  {
    source: `/gallery/14-1.png`,
    size: 1,
  },
  {
    source: `/gallery/15-1.png`,
    size: 1,
  },
  {
    source: `/gallery/16-4.png`,
    size: 4,
  },
  {
    source: `/gallery/17-1.png`,
    size: 1,
  },
  {
    source: `/gallery/18-1.png`,
    size: 1,
  },
  {
    source: `/gallery/19-2.png`,
    size: 2,
  },
  {
    source: `/gallery/20-1.png`,
    size: 1,
  },
  {
    source: `/gallery/21-4.png`,
    size: 4,
  },
  //3RD ROW
  {
    source: `/gallery/22-2.png`,
    size: 2,
  },
  {
    source: `/gallery/23-4.png`,
    size: 4,
  },
  {
    source: `/gallery/24-1.png`,
    size: 1,
  },
  {
    source: `/gallery/25-1.png`,
    size: 1,
  },
  {
    source: `/gallery/26-1.png`,
    size: 1,
  },
  {
    source: `/gallery/27-2.png`,
    size: 2,
  },

];

const AnimatedImage = ({ source, size = 1, idx }) => {
  const getSize = () => {
    switch (size) {
      case 1:
        return Styles.grid1;
      case 2:
        return Styles.grid2;
      case 4:
        return Styles.grid4;
      default:
        return Styles.grid1;
    }
  };

  const imgRef = useRef(null);
  useLayoutEffect(() => {
    const el = imgRef.current;
    gsap.fromTo(
      el,
      { y: 30, opacity: 0, scale: 1 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        scale: 1,
        scrollTrigger: {
          trigger: el,
          start: "top 90%",
          end: "+=200",
          scrub: 0.5,
          ease: "expo.in",
        },
      }
    );
  }, []);

  return <img ref={imgRef} src={source} className={getSize()} />;
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
        // markers: true,
      },
      backgroundColor: "#757780",
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
        {images.map(({ source, size }, idx) => (
          <AnimatedImage source={source} size={size} index={idx} />
        ))}
      </div>
    </div>
  );
};

export default PreviewProjects;

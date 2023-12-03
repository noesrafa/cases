//@ts-nocheck
import React, { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Styles from "./styles.module.css";
gsap.registerPlugin(ScrollTrigger);

const images = [
  {
    source: `/gallery/1-1.webp`,
    size: 1,
  },
  {
    source: `/gallery/2-2.webp`,
    size: 2,
  },
  {
    source: `/gallery/3-4.webp`,
    size: 4,
  },
  {
    source: `/gallery/5-1.webp`,
    size: 1,
  },
  {
    source: `/gallery/6-4.webp`,
    size: 4,
  },
  {
    source: `/gallery/7-1.webp`,
    size: 1,
  },
  {
    source: `/gallery/8-1.webp`,
    size: 1,
  },
  {
    source: `/gallery/9-2.webp`,
    size: 2,
  },
  {
    source: `/gallery/10-1.webp`,
    size: 1,
  },
  {
    source: `/gallery/11-1.webp`,
    size: 1,
  },
  // 2ND ROW
  {
    source: `/gallery/12-4.webp`,
    size: 4,
  },
  {
    source: `/gallery/13-1.webp`,
    size: 1,
  },
  {
    source: `/gallery/14-1.webp`,
    size: 1,
  },
  {
    source: `/gallery/15-1.webp`,
    size: 1,
  },
  {
    source: `/gallery/16-4.webp`,
    size: 4,
  },
  {
    source: `/gallery/17-1.webp`,
    size: 1,
  },
  {
    source: `/gallery/18-1.webp`,
    size: 1,
  },
  {
    source: `/gallery/19-2.webp`,
    size: 2,
  },
  {
    source: `/gallery/20-1.webp`,
    size: 1,
  },
  {
    source: `/gallery/21-4.webp`,
    size: 4,
  },
  //3RD ROW
  {
    source: `/gallery/22-2.webp`,
    size: 2,
  },
  {
    source: `/gallery/23-4.webp`,
    size: 4,
  },
  {
    source: `/gallery/24-1.webp`,
    size: 1,
  },
  {
    source: `/gallery/25-1.webp`,
    size: 1,
  },
  {
    source: `/gallery/26-1.webp`,
    size: 1,
  },
  {
    source: `/gallery/27-2.webp`,
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
      { y: 50, scale: 0.9, borderRadius: 350 },
      {
        borderRadius: 32,
        y: 0,
        duration: 0.8,
        scale: 1,
        scrollTrigger: {
          trigger: el,
          start: "top 90%",
          end: "+=220",
          scrub: 0.7,
          ease: "expo.in",
        },
      }
    );
  }, []);

  return <img ref={imgRef} src={source} className={getSize()} />;
};

const PreviewProjects = () => {
 
  return (
    <div className={Styles.gridWrapper}>
      <div  className={Styles.gridContainer}>
        {images.map(({ source, size }, idx) => (
          <AnimatedImage source={source} size={size} index={idx} />
        ))}
      </div>
    </div>
  );
};

export default PreviewProjects;

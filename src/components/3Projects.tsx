import React, { useEffect, useLayoutEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import { gsap } from "gsap";

const list = [
  {
    img: "/projects/heru.png",
    color: "#1D8FF3",
    title: "Heru",
    date: "2021",
  },
  {
    img: "/projects/driftlead.png",
    color: "#FAB49B",
    title: "Driftlead",
    date: "2021",
  },
  {
    img: "/projects/pefai.png",
    color: "#D7BCF8",
    title: "Pefai",
    date: "2021",
  },
];

const Project = ({ project }) => {
  const onEnter = ({ currentTarget }) => {
    gsap.to("body", { backgroundColor: project.color, duration: 0.5, ease: "expo.out" });
  };

  const onLeave = ({ currentTarget }) => {
    gsap.to("body", { backgroundColor: "#000", duration: 0.5, ease: "expo.out" });
  };

  return (
    <div
      className={`${project.title} project max-w-xl mx-auto bg-slate-300/20 p-3 rounded-xl`}
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
    >
      <img className={`${project.title}-img`} src={project.img} alt="" />
    </div>
  );
};

const Projects = () => {
  return (
    <div className="projects-ref mt-32 flex flex-col gap-32">
      {/* {list.map((project) => (
        <Project project={project} />
      ))} */}
    </div>
  );
};

export default Projects;

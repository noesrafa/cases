import { useEffect } from "react";
import { useState } from "react";
import Nav from "./components/Nav";
import PreviewProjects from "./components/2PreviewProjects";
import AnimatedHeading from "./components/1AnimatedHeading";
import Projects from "./components/3Projects";

const App = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    const scrollY = window.scrollY;
    setScrollY(scrollY);
  };

  return (
    <div className="pt-20 w-full">
      <Nav scrollY={scrollY} />
      <AnimatedHeading />
      <PreviewProjects />
      <Projects />
    </div>
  );
};

export default App;

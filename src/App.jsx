import { useEffect } from "react";
import { useState } from "react";
import Nav from "./components/Nav";
import PreviewProjects from "./components/2PreviewProjects";
import AnimatedHeading from "./components/1AnimatedHeading";

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
    console.log(scrollY);
  };

  return (
    <div className="pt-20 w-full">
      <Nav scrollY={scrollY} />
      <AnimatedHeading />
      <PreviewProjects />
    </div>
  );
};

export default App;

import { useEffect } from "react";
import { useState } from "react";
import AnimatedHeading from "./components/AnimatedHeading";
import Nav from "./components/Nav";

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
    <div className="pt-20 px-3 sm:px-8 w-full">
      <Nav scrollY={scrollY} />
      <AnimatedHeading />
    </div>
  );
};

export default App;

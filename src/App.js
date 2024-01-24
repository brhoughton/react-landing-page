import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Landing from "./scenes/Landing";
import Navbar from "./scenes/Navbar";
import Experience from "./scenes/Experience";
import Contact from "./scenes/Contact";
import Footer from "./scenes/Footer";
import Projects from "./scenes/Projects";
import useMediaQuery from "./hooks/useMediaQuery";

function App() {
  const [selectedPage, setSelectedPage] = useState("home");
  const [isTopOfPage, setIsTopOfPage] = useState(true);
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) setIsTopOfPage(true);
      if (window.scrollY !== 0) setIsTopOfPage(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="app bg-deep-blue">
      <Navbar
        isTopOfPage={isTopOfPage}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
      <div className="w-5/6 mx-auto md:h-full">
        {isAboveMediumScreens}
        <Landing setSelectedPage={setSelectedPage} />
      </div>

      <div className="w-5/6 mx-auto">
        <Experience />
      </div>

      <div className="w-5/6 mx-auto">
        <Projects />
      </div>

      <div className="w-5/6 mx-auto">
        <motion.div
          margin="0 0 -200px 0"
          amount="all"
          onViewportEnter={() => setSelectedPage("contact")}
        >
          <Contact />
        </motion.div>
      </div>
      <Footer />
    </div>
  );
}

export default App;

//1:39:19, https://youtu.be/JSJ8ftr92Vw?si=uKVrCOi-qyYC1QV-

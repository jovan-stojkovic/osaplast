import "./Styles/App.scss";
import { Routes, Route } from "react-router-dom";
import { motion, AnimatePresence, LayoutGroup } from "framer-motion";
import { useState } from "react";

import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Products from "./Pages/Products";
import Contact from "./Pages/Contact";
import LoadingPage from "./Pages/LoadingPage";

import Garnisne from "./Categories/Garnisne";
import NosaciZavesa from "./Categories/NosaciZavesa";
import Galanterija from "./Categories/Galanterija";
import ZidneSusilice from "./Categories/ZidneSusilice";
import MetalniNamestaj from "./Categories/MetalniNamestaj";
import MetalneOgrade from "./Categories/MetalneOgrade";
import MetalneKonstrukcije from "./Categories/MetalneKonstrukcije";

import ThemeContext from "./Helpers/ThemeContext";

const App = () => {
  const [loading, setLoading] = useState(true);
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const generalMotion = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        // delayChildren: 0.1,
        staggerChildren: 0.1,
      },
    },
  };

  const pMotion = {
    hidden: {
      x: -300,
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.1,
        type: "spring",
        stiffness: 120,
      },
    },
  };

  const swiperMotion = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 1,
        delay: 1,
      },
    },
  };

  return (
    <LayoutGroup type="crossfade">
      <AnimatePresence>
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
          {loading ? (
            <motion.div key="loader">
              <LoadingPage setLoading={setLoading} />
            </motion.div>
          ) : (
            <main className={theme}>
              <Header />
              <div className="app">
                <Routes>
                  <Route exact path="/" element={<Home loading={loading} />} />
                  <Route path="/o-nama" element={<About />} />
                  <Route path="/proizvodi" element={<Products />} />
                  <Route
                    path="/proizvodi/garnisne"
                    element={
                      <Garnisne
                        generalMotion={generalMotion}
                        pMotion={pMotion}
                        swiperMotion={swiperMotion}
                      />
                    }
                  />
                  <Route
                    path="/proizvodi/nosaci-zavesa"
                    element={
                      <NosaciZavesa
                        generalMotion={generalMotion}
                        pMotion={pMotion}
                        swiperMotion={swiperMotion}
                      />
                    }
                  />
                  <Route
                    path="/proizvodi/kupatilska-galanterija"
                    element={
                      <Galanterija
                        generalMotion={generalMotion}
                        pMotion={pMotion}
                        swiperMotion={swiperMotion}
                      />
                    }
                  />
                  <Route
                    path="/proizvodi/zidne-susilice"
                    element={
                      <ZidneSusilice
                        generalMotion={generalMotion}
                        pMotion={pMotion}
                        swiperMotion={swiperMotion}
                      />
                    }
                  />
                  <Route
                    path="/proizvodi/metalni-namestaj"
                    element={
                      <MetalniNamestaj
                        generalMotion={generalMotion}
                        pMotion={pMotion}
                        swiperMotion={swiperMotion}
                      />
                    }
                  />
                  <Route
                    path="/proizvodi/metalne-ograde"
                    element={
                      <MetalneOgrade
                        generalMotion={generalMotion}
                        pMotion={pMotion}
                        swiperMotion={swiperMotion}
                      />
                    }
                  />
                  <Route
                    path="/proizvodi/metalne-konstrukcije"
                    element={
                      <MetalneKonstrukcije
                        generalMotion={generalMotion}
                        pMotion={pMotion}
                        swiperMotion={swiperMotion}
                      />
                    }
                  />
                  <Route path="/kontakt" element={<Contact />} />
                </Routes>
              </div>
              <Footer />
            </main>
          )}
        </ThemeContext.Provider>
      </AnimatePresence>
    </LayoutGroup>
  );
};

export default App;

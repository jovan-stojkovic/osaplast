import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { useState } from "react";
import "../Styles/HeaderFooter.scss";
import { useContext } from "react";
import ThemeContext from "../Helpers/ThemeContext";

const Header = () => {
  const [showHiddenDiv, setShowHiddenDiv] = useState("hide");
  const [menu, setMenu] = useState(false);
  const { theme, toggleTheme } = useContext(ThemeContext);

  const handleMenu = () => {
    setMenu(!menu);
  };

  const navElementsMotion = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 2,
        delayChildren: 0.8,
        staggerChildren: 0.3,
      },
    },
  };

  const navlinksMotion = {
    hidden: {
      x: 300,
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        type: "spring",
        stiffness: 90,
      },
    },
  };

  return (
    <nav className={theme}>
      <div className="nav-cont">
        <a href="/" className="logo"></a>
        <div
          className={`nav-elements ${menu ? "show" : ""}`}
          variants={navElementsMotion}
          initial="hidden"
          animate="visible"
        >
          <div className="dark-part" onClick={handleMenu}></div>
          <motion.div
            className="navlinks"
            variants={navElementsMotion}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={navlinksMotion}>
              <NavLink
                to="/"
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: "smooth" });
                  handleMenu();
                }}
              >
                Početna
              </NavLink>
            </motion.div>
            <motion.div
              variants={navlinksMotion}
              className="products-navlink"
              onMouseEnter={() => setShowHiddenDiv("show")}
              onMouseLeave={() => setShowHiddenDiv("hide")}
            >
              <NavLink
                to="/proizvodi"
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: "smooth" });
                  handleMenu();
                }}
              >
                Proizvodi
              </NavLink>
              <div className={`hidden-div ${showHiddenDiv}`}>
                <div className="hidden-div-cont">
                  <NavLink
                    to="/proizvodi/garnisne"
                    onClick={() => {
                      window.scrollTo({ top: 0, behavior: "smooth" });
                      handleMenu();
                    }}
                  >
                    Garnišne
                  </NavLink>
                  <NavLink
                    to="/proizvodi/nosaci-zavesa"
                    onClick={() => {
                      window.scrollTo({ top: 0, behavior: "smooth" });
                      handleMenu();
                    }}
                  >
                    Nosači zavesa
                  </NavLink>
                  <NavLink
                    to="/proizvodi/kupatilska-galanterija"
                    onClick={() => {
                      window.scrollTo({ top: 0, behavior: "smooth" });
                      handleMenu();
                    }}
                  >
                    Galanterija
                  </NavLink>
                  <NavLink
                    to="/proizvodi/zidne-susilice"
                    onClick={() => {
                      window.scrollTo({ top: 0, behavior: "smooth" });
                      handleMenu();
                    }}
                  >
                    Zidne sušulice
                  </NavLink>
                  <NavLink
                    to="/proizvodi/metalni-namestaj"
                    onClick={() => {
                      window.scrollTo({ top: 0, behavior: "smooth" });
                      handleMenu();
                    }}
                  >
                    Metalni nameštaj
                  </NavLink>
                  <NavLink
                    to="/proizvodi/metalne-ograde"
                    onClick={() => {
                      window.scrollTo({ top: 0, behavior: "smooth" });
                      handleMenu();
                    }}
                  >
                    Metalne ograde
                  </NavLink>
                  <NavLink
                    to="/proizvodi/metalne-konstrukcije"
                    onClick={() => {
                      window.scrollTo({ top: 0, behavior: "smooth" });
                      handleMenu();
                    }}
                  >
                    Metalne konstrukcije
                  </NavLink>
                </div>
              </div>
            </motion.div>
            <motion.div variants={navlinksMotion}>
              <NavLink
                to="/o-nama"
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: "smooth" });
                  handleMenu();
                }}
              >
                O Nama
              </NavLink>
            </motion.div>
            <motion.div variants={navlinksMotion}>
              <NavLink
                to="/kontakt"
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: "smooth" });
                  handleMenu();
                }}
              >
                Kontakt
              </NavLink>
            </motion.div>
            <motion.div variants={navlinksMotion}>
              <button className="theme" onClick={toggleTheme}>
                {theme === "light" ? "Tema: svetla" : "Tema: tamna"}
              </button>
            </motion.div>
          </motion.div>
        </div>
        <button
          className={`menu-btn ${menu ? "show" : ""}`}
          onClick={handleMenu}
        ></button>
      </div>
    </nav>
  );
};

export default Header;

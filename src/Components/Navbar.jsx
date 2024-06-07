import { NavLink, Link } from "react-router-dom";
import ThemeContext from "../Helpers/ThemeContext";
import { useContext, useState } from "react";

const Navbar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [showMenu, setShowMenu] = useState("hide");

  const handleShow = () => {
    setShowMenu(showMenu === "hide" ? "show" : "hide");
  };

  return (
    <nav className={theme}>
      <div className="nav-cont">
        <Link className="logo" to="/"></Link>
        <button
          className={`menu-btn ${showMenu}`}
          onClick={handleShow}
        ></button>
        <div className={`navlinks ${showMenu}`}>
          <div className="left" onClick={handleShow}></div>
          <div className="right">
            <NavLink
              to="/"
              className="navlink main"
              onClick={() => {
                window.scrollTo({ top: 0, behavior: "smooth" });
                handleShow();
              }}
            >
              POČETNA
            </NavLink>
            <NavLink
              to="/products"
              className="navlink main"
              onClick={() => {
                window.scrollTo({ top: 0, behavior: "smooth" });
                handleShow();
              }}
            >
              PROIZVODI
            </NavLink>
            <ul className="categories">
              <NavLink
                className="navlink minor"
                to="/products/category-one"
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: "smooth" });
                  handleShow();
                }}
              >
                KATEGORIJA 1
              </NavLink>
              <NavLink
                className="navlink minor"
                to="/products/category-two"
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: "smooth" });
                  handleShow();
                }}
              >
                KATEGORIJA 2
              </NavLink>
              <NavLink
                className="navlink minor"
                to="/products/category-three"
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: "smooth" });
                  handleShow();
                }}
              >
                KATEGORIJA 3
              </NavLink>
              <NavLink
                className="navlink minor"
                to="/products/category-four"
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: "smooth" });
                  handleShow();
                }}
              >
                KATEGORIJA 4
              </NavLink>
              <NavLink
                className="navlink minor"
                to="/products/category-five"
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: "smooth" });
                  handleShow();
                }}
              >
                KATEGORIJA 5
              </NavLink>
              <NavLink
                className="navlink minor"
                to="/products/category-six"
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: "smooth" });
                  handleShow();
                }}
              >
                KATEGORIJA 6
              </NavLink>
            </ul>
            <NavLink
              to="/aboutus"
              className="navlink main"
              onClick={() => {
                window.scrollTo({ top: 0, behavior: "smooth" });
                handleShow();
              }}
            >
              O NAMA
            </NavLink>
            <NavLink
              to="/contact"
              className="navlink main"
              onClick={() => {
                window.scrollTo({ top: 0, behavior: "smooth" });
                handleShow();
              }}
            >
              KONTAKT
            </NavLink>
            <Link
              target="_blank"
              to="https://www.instagram.com/"
              className="navlink"
              onClick={handleShow}
            >
              INSTAGRAM
            </Link>
            <button
              className="navlink"
              onClick={toggleTheme}
            >{`${theme.toUpperCase()} THEME`}</button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

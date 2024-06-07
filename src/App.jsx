import "./Style.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
import AboutUs from "./Pages/AboutUs";
import Products from "./Pages/Products";

import CategoryOne from "./Pages/Categories/CategoryOne";
import CategoryTwo from "./Pages/Categories/CategoryTwo";
import CategoryThree from "./Pages/Categories/CategoryThree";
import CategoryFour from "./Pages/Categories/CategoryFour";
import CategoryFive from "./Pages/Categories/CategoryFive";
import CategorySix from "./Pages/Categories/CategorySix";


import ThemeContext from "./Helpers/ThemeContext";
import { useState } from "react";

const App = () => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <Router>
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        <main>
          <Navbar />
          <div className="app">
            <Routes>
              <Route element={<Home />} path="/" />
              <Route element={<Contact />} path="/contact" />
              <Route element={<Products />} path="/products" />
              <Route element={<CategoryOne />} path="/products/category-one" />
              <Route element={<CategoryTwo />} path="/products/category-two" />
              <Route
                element={<CategoryThree />}
                path="/products/category-three"
              />
              <Route
                element={<CategoryFour />}
                path="/products/category-four"
              />
              <Route
                element={<CategoryFive />}
                path="/products/category-five"
              />
              <Route
                element={<CategorySix />}
                path="/products/category-six"
              />
              <Route element={<AboutUs />} path="/aboutus" />
            </Routes>
          </div>
          <Footer />
        </main>
      </ThemeContext.Provider>
    </Router>
  );
};

export default App;

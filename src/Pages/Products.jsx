import { Link } from "react-router-dom";
import VanillaTilt from "vanilla-tilt";

const Products = () => {
  VanillaTilt.init(document.querySelectorAll(".category-img-link"), {
    max: 3,
    speed: 100,
    scale: 1.05,
    glare: true,
  });

  return (
    <div className="page products">
      <div className="head">
        <p className="head-title">PROIZVODI</p>
        <div className="horizontal-separator"></div>
        <p className="head-desc">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto,
          animi.
        </p>
      </div>

      <div className="page-cont">
        <div className="product-page-category">
          <Link
            to="/products/category-one"
            className="category-img-link"
          ></Link>
          <p className="category-title">Kategorija 1</p>
        </div>

        <div className="product-page-category">
          <Link
            to="/products/category-two"
            className="category-img-link"
          ></Link>
          <p className="category-title">Kategorija 2</p>
        </div>

        <div className="product-page-category">
          <Link
            to="/products/category-three"
            className="category-img-link"
          ></Link>
          <p className="category-title">Kategorija 3</p>
        </div>

        <div className="product-page-category">
          <Link
            to="/products/category-four"
            className="category-img-link"
          ></Link>
          <p className="category-title">Kategorija 4</p>
        </div>

        <div className="product-page-category">
          <Link
            to="/products/category-five"
            className="category-img-link"
          ></Link>
          <p className="category-title">Kategorija 5</p>
        </div>

        <div className="product-page-category">
          <Link
            to="/products/category-six"
            className="category-img-link"
          ></Link>
          <p className="category-title">Kategorija 6</p>
        </div>
      </div>
    </div>
  );
};

export default Products;

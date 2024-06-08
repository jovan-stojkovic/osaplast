import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section about">
          <h2>About Us</h2>
          <p>
            We are a company dedicated to providing the best services for our
            clients. Our team works hard to meet your needs and exceed your
            expectations.
          </p>
        </div>
        <div className="footer-section links">
          <h2>Quick Links</h2>
          <ul>
            <li>
              <Link to="/">Početna</Link>
            </li>
            <li>
              <Link to="/proizvodi">Proizvodi</Link>
            </li>
            <li>
              <Link to="/onama">O Nama</Link>
            </li>
            <li>
              <Link to="/kontakt">Kontakt</Link>
            </li>
          </ul>
        </div>
        <div className="footer-section contact">
          <h2>Contact Us</h2>
          <p>Email: contact@company.com</p>
          <p>Phone: (123) 456-7890</p>
          <div className="social-icons">
            <a href="#">
              <img src="/icons/facebook.svg" alt="Facebook" />
            </a>
            <a href="#">
              <img src="/icons/instagram.png" alt="Instagram" />
            </a>
            <a href="#">
              <img src="/icons/youtube.svg" alt="Youtube" />
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        &copy; 2024 OsaPlast. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;

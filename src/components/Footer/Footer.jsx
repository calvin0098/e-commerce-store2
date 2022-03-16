import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div className="about">
        <Link to="/" className="nav-brand">
          Loafer
        </Link>

        <div className="text">
          Shop exclusive stylish and comfortable footwear for all occasions
        </div>

        <div className="social">
          <a href="https://github.com/himadri2110" target="_blank">
            <i className="fa fa-github"></i>
          </a>
          <a href="https://twitter.com/himadri2110" target="_blank">
            <i className="fa fa-twitter"></i>
          </a>
          <a href="https://linkedin.com/in/himadri2110" target="_blank">
            <i className="fa fa-linkedin"></i>
          </a>
        </div>
      </div>

      <div className="quick-links">
        <div className="heading">Quick Links</div>
        <div className="sub-heading">
          <Link to="/products">Products</Link>
        </div>
        <div className="sub-heading">
          <Link to="/wishlist">Wishlist</Link>
        </div>
        <div className="sub-heading">
          <Link to="/cart">Cart</Link>
        </div>
      </div>

      <div className="contact">
        <div className="heading">Contact Us</div>

        <div className="sub-heading address">
          <i className="fa fa-map-marker"></i>212 Oakbrook Center, Indiana
        </div>
        <div className="sub-heading phone">
          <i className="fa fa-phone"></i>+91 21200 21200
        </div>
        <div className="sub-heading e-mail">
          <i className="fa fa-envelope"></i>support@loafer.com
        </div>
      </div>
    </footer>
  );
};

export { Footer };
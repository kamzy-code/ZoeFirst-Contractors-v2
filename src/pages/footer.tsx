import { useState } from "react";
import NavBar from "../components/Navbar";
import "../styles/Footer.css";

function Footer() {
  const [isScreenSmall, setIsScreenSmall] = useState(false);

  const toggleNavItems = () => {
    setIsScreenSmall(!isScreenSmall);
  };

  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-contact">
          <div className="footer-contact-info">
            <div className="call-us">
              <p>Contact us:</p>
              <p className="call-number">240-601-8936</p>
            </div>

            <div className="address">
              <p>4500 Forbes Blvd, Lanham MD 20706</p>
            </div>
          </div>

          <div className="footer-nav">
            <NavBar
              containerClasssName="footer-nav-container"
              hamburgerClassName="footer-hamburger"
              navItemsClassName="footer-nav-items"
              logoSrc="/img/big/logo.png"
            />
          </div>
        </div>

        <div className="copyright">
          <p>&copy; 2023 ZoeFirst Contractors. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

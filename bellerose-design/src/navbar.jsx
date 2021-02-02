import React, { useEffect } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import Logo from "./logo.jsx";
import "./navbar.scss";

const Navbar = () => {
  const [scrolled, setScrolled] = React.useState(false);
  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 200) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  });
  let navbarClasses = ["navbar"];
  if (scrolled) {
    navbarClasses.push("scrolled");
  }

  return (
    <>
     <Logo />
      <header className={navbarClasses.join(" ")}>
        <Router>
          <nav className="navigation">
            <ul>
              <li>
                <Link to="/">
                  HOME
                </Link>
              </li>
              <li>
                <Link to="/interior-design">
                  INTERIOR DESIGN
                </Link>
              </li>
              <li>
                <Link to="/service-area">
                  SERVICE AREA
                </Link>
              </li>
              <li>
                <Link to="/featured-products">
                  FEATURED PRODUCTS
                </Link>
              </li>
              <li>
                <Link to="/about">
                  ABOUT
                </Link>
              </li>
              <li>
                <Link smooth to="/contact">
                  CONTACT
                </Link>
              </li>
            </ul>
          </nav>
        </Router>
      </header>
    </>
  );
};

export default Navbar;

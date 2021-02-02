import React, { useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import Logo from "./logo.jsx";

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
      <header className={navbarClasses.join(" ")}>
        <Router>
          <nav className="navigation">
            <ul>
              <li>
                <HashLink smooth to="./top-bar#top-bar">
                  HOME
                </HashLink>
              </li>
              <li>
                <HashLink smooth to="/portfolio#portfolio">
                  INTERIOR DESIGN
                </HashLink>
              </li>
              <li>
                <HashLink smooth to="/about/#about">
                  SERVICE AREA
                </HashLink>
              </li>
              <li>
                <HashLink smooth to="/featured-product/#featured-product">
                  FEATURED PRODUCTS
                </HashLink>
              </li>
              <li>
                <HashLink smooth to="/about#about">
                  ABOUT
                </HashLink>
              </li>
              <li>
                <HashLink smooth to="/contact#contact">
                  CONTACT
                </HashLink>
              </li>
            </ul>
          </nav>
        </Router>
      </header>
      <Logo />
    </>
  );
};

export default Navbar;

import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { ScrolltoTop } from "react-router-dom";
import "./navbar.scss";
import Home from "./home.jsx";
import InteriorDesign from "./interior-design.jsx";
import ServiceArea from "./service-area.jsx";
import FeaturedProducts from "./featured-products.jsx";
import About from "./about.jsx";
import Contact from "./contact.jsx";
// eslint-disable-next-line
import ScrollToTop from "./scrolltotop.jsx";
import "./packages/styles.css";
import { TransitionGroup, CSSTransition } from "react-transition-group";

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
    <TransitionGroup>
      <CSSTransition key={window.location.key} className="fade-enter" timeout={300}>
        <Router>
          <ScrollToTop />
          <header className={navbarClasses.join(" ")}>
            <nav className="navigation">
              <ul>
                <li>
                  <Link to="/">HOME</Link>
                </li>
                <li>
                  <Link to="/interior-design">INTERIOR DESIGN</Link>
                </li>
                <li>
                  <Link to="/service-area">SERVICE AREA</Link>
                </li>
                {/* <li>
                  <Link to="/featured-products">FEATURED PRODUCTS</Link>
                </li> */}
                <li>
                  <Link to="/about">ABOUT</Link>
                </li>
                <li>
                  <Link smooth to="/contact">
                    CONTACT
                  </Link>
                </li>
              </ul>
            </nav>
          </header>

          <Switch location={window.location}>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/interior-design">
              <InteriorDesign />
            </Route>
            <Route path="/service-area">
              <ServiceArea />
            </Route>
            <Route path="/featured-products">
              <FeaturedProducts />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
          </Switch>
        </Router>
      </CSSTransition>
    </TransitionGroup>
  );
};

export default Navbar;

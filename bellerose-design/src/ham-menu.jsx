import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { NavLink } from "react-router-dom";
import HamburgerMenu from "react-hamburger-menu";
import "./ham-menu.scss";

class NavBar extends Component {
  constructor() {
    super();
    this.state = {
      open: false,
      hideOrShowHambugerDropDown: "nav",
    };
  }

  handleClick = () => {
    this.setState({ open: !this.state.open });
  };

  displayHamburgerMenu = () => {
    return (
      <HamburgerMenu
        isOpen={this.state.open}
        menuClicked={this.handleClick.bind(this)}
        width={24}
        height={24}
        strokeWidth={4}
        rotate={0}
        color="black"
        borderRadius={0}
        animationDuration={0.5}
      />
    );
  };

  displayMobileMenu = () => {
    return (
      <Router>
        <ul
          className="hamburgerDropDown"
          style={{ width: "200px", position: "0px" }}
        >
          <li className="nav-link">
            <NavLink
              isOpen={this.state.open}
              menuclicked={this.handleClick.bind(this)}
              to="/"
            >
              Home
            </NavLink>
          </li>
          <li className="nav-link">
            <NavLink to="/interior-design">Interior Design</NavLink>
          </li>
          <li className="nav-link">
            <NavLink to="/featured-products">Featured Products</NavLink>
          </li>
          <li className="nav-link">
            <NavLink to="/service-area">Service Area</NavLink>
          </li>
          <li className="nav-link">
            <NavLink to="/about">About</NavLink>
          </li>
          <li className="nav-link">
            <NavLink to="/contact">Contact</NavLink>
          </li>
        </ul>
      </Router>
    );
  };

  render() {
    return (
      <div className="hambar">
        {this.state.open ? this.displayMobileMenu() : null}
        {window.innerWidth < 501
          ? this.displayHamburgerMenu()
          : this.displayHamburgerMenu()}
      </div>
    );
  }
}

export default NavBar;

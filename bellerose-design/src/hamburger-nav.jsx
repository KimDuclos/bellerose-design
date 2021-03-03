import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import HamburgerMenu from "react-hamburger-menu";
import "./hamburger-nav.scss";

class Hamburger extends Component {
  constructor() {
    super();
    this.state = {
      open: false,
      hideOrShowHamburgerDropDown: "nav",
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
        width={18}
        height={15}
        strokeWidth={1}
        rotate={0}
        color="white"
        borderRadius={0}
        animationDuration={0.5}
      />
    );
  };
  displayNavBar = () => {
    return (
      <ul className="nav">
        <li className="nav-link">
          <NavLink to="/">Home</NavLink>
        </li>
        <li className="nav-link">
          <NavLink to="/interior-design">Interior Design</NavLink>
        </li>
        <li className="nav-link">
          <NavLink to="/service-area">Service Area</NavLink>
        </li>
        <li className="nav-link">
          <NavLink to="/featured-products">Featured Products</NavLink>
        </li>
        <li className="nav-link">
          <NavLink to="/about">About</NavLink>
        </li>
        <li className="nav-link">
          <NavLink to="/contact">Contact</NavLink>
        </li>
      </ul>
    );
  };

  displayMobileMenu = () => {
    return (
      <ul className="hamburgerDropDown">
        <li className="nav-link">
          <NavLink to="/">Home</NavLink>
        </li>
        <li className="nav-link">
          <NavLink to="/interior-design">Interior Design</NavLink>
        </li>
        <li className="nav-link">
          <NavLink to="/service-area">Service Area</NavLink>
        </li>
        <li className="nav-link">
          <NavLink to="/featured-products">Featured Products</NavLink>
        </li>
        <li className="nav-link">
          <NavLink to="/about">About</NavLink>
        </li>
        <li className="nav-link">
          <NavLink to="/contact">Contact</NavLink>
        </li>
      </ul>
    );
  };

  render() {
    return (
      <div className="navbar">
        {this.state.open ? this.displayMobileMenu() : null}
        {window.innerWidth > 1200
          ? this.displayNavBar()
          : this.displayHamburgerMenu()}
      </div>
    );
  }
}

export default Hamburger;

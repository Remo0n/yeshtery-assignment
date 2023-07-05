import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Cart from "../Cart";
import CartIcon from "../Cart/CartIcon";
import "./Header.style.scss";

class Header extends Component {
  render() {
    let open = this.props.open;
    return (
      <>
        <nav className="header-container">
          <div className="main-nav">
            <img
              className="menu-icon"
              alt="Align left text"
              src="/icons/menu.svg"
            />
            <Link to="/">
              <img className="logo" alt="Logo" src="/images/logo.png" />
            </Link>

            <ul className="nav-links">
              <li className="text-wrapper">Products</li>
              <li className="text-wrapper">Best Seller</li>
              <li className="text-wrapper">New Arrival</li>
              <li className="text-wrapper">About Us</li>
              <li className="text-wrapper">Contact Us</li>
            </ul>
          </div>
          <div className="right-icons">
            <div className="icon-container">
              <img alt="profile icon" src="/icons/profile.svg" />
            </div>
            <CartIcon />
            <div className="icon-container">
              <img alt="search icon" src="/icons/search.svg" />
            </div>
          </div>
        </nav>
        {open && <Cart />}
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  open: state.cart.open,
});

export default connect(mapStateToProps)(Header);

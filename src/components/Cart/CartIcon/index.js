import React, { Component } from "react";
import { connect } from "react-redux";
import { toggleCart } from "../../../redux/cart/cart.actions";

class CartIcon extends Component {
  render() {
    if (this.props.open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return (
      <div className="icon-container" onClick={this.props.toggleCart}>
        <img alt="cart icon" src="/icons/cart.svg" />
        <span className="items-count">{this.props.itemCount}</span>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  open: state.cart.open,
  itemCount: state.cart.cartItems.reduce(
    (accumlatedQuantity, cartItem) => accumlatedQuantity + cartItem.quantity,
    0
  ),
});

export default connect(mapStateToProps, { toggleCart })(CartIcon);

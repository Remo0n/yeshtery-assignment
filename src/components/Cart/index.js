import React, { Component } from "react";
import CartItem from "./CartItem";
import "./Cart.style.scss";
import Button from "../UI/Button/Button";
import { connect } from "react-redux";
import { toggleCart } from "../../redux/cart/cart.actions";

class Cart extends Component {
  render() {
    const total = this.props.cartItems.reduce(
      (accumlatedQuantity, cartItem) =>
        accumlatedQuantity + cartItem.quantity * cartItem.price,
      0
    );

    return (
      <div className="cart-wrapper">
        <div className="cart-dropdown">
          <div className="cart-header">
            <h5>MY CART ({this.props.itemCount})</h5>
            <img
              src="/icons/close.svg"
              alt="close icon"
              onClick={this.props.toggleCart}
            />
          </div>

          <div className="cart-items">
            {this.props.cartItems.length ? (
              this.props.cartItems.map((cartItem) => (
                <CartItem key={cartItem.id} id={cartItem.id} item={cartItem} />
              ))
            ) : (
              <span className="empty-message">Your cart is empty</span>
            )}
          </div>
          <div className="cart-footer">
            <div>
              <h3 className="sub-total">Sub Total</h3>
              <span className="total-price">{total} EGP</span>
            </div>
            <Button>GO TO CART</Button>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  cartItems: state.cart.cartItems,
  itemCount: state.cart.cartItems.reduce(
    (accumlatedQuantity, cartItem) => accumlatedQuantity + cartItem.quantity,
    0
  ),
});

export default connect(mapStateToProps, { toggleCart })(Cart);

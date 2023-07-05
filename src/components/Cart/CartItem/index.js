import React, { Component } from "react";
import { connect } from "react-redux";
import { removeItem } from "../../../redux/cart/cart.actions";

import "./cart-item.style.scss";

class CartItem extends Component {
  render() {
    const item = this.props.item;
    return (
      <div className="cart-item">
        <img className="item-img" src={item.thumbnail} alt="item" />
        <div className="item-details">
          <span className="name">{item.title}</span>
          <span className="meta">
            size : 2*3 m <br /> color : black
            <br />
          </span>
          <span className="price">
            {item.quantity} x {item.price} EGP
          </span>
        </div>
        <img
          className="delete-icon"
          src="/icons/delete.svg"
          alt="delete icon"
          onClick={() => {
            this.props.removeItem(item);
          }}
        />
      </div>
    );
  }
}

export default connect(null, { removeItem })(CartItem);

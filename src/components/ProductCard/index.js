import React, { Component } from "react";
import { connect } from "react-redux";
import { addItem } from "../../redux/cart/cart.actions";
import Button from "../UI/Button/Button";
import { Link } from "react-router-dom";

import "./ProductCard.style.scss";

class ProductCard extends Component {
  render() {
    return (
      <div className="card-wrapper">
        <Link to={`/product/${this.props.product.id}`}>
          <img
            className="product-img"
            src={this.props.product.thumbnail}
            alt="product"
          />
        </Link>

        <div className="icon-overlay">
          <img src="/icons/360.svg" alt="360 vison" />
        </div>

        <div>
          <h4 className="title">{this.props.product.title}</h4>
          <p className="description">{this.props.product.description}</p>
          <img src="/icons/rate.svg" alt="rate" />
          <div className="price">{this.props.product.price} EGP</div>
          <div className="card-btns">
            <Button
              onClick={(event) => {
                event.stopPropagation();
                this.props.addItem(this.props.product);
              }}
            >
              ADD TO CART
            </Button>
            <div className="fav-icon">
              <img src="/icons/heart.svg" alt="heart icon" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(null, { addItem })(ProductCard);

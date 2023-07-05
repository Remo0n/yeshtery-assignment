import React, { Component } from "react";
import Button from "../UI/Button/Button";
import "./ProductDetails.style.scss";

export default class ProductDetails extends Component {
  render() {
    const product = this.props.product;
    return (
      <div className="product-wrapper">
        <div className="prodcut-header">
          <div>
            <div className="title">{product.title}</div>
            <img src="/icons/rate.svg" alt="product rate" />
          </div>
          <img className="vision" src="/icons/360.svg" alt="360 vision" />
        </div>

        <div className="price-section">
          <span className="current-price">{product.price} EP</span>
          <span className="original-price">
            {product.price + product.price * (product.discountPercentage / 100)}{" "}
            EGP
          </span>
        </div>
        <p className="description">{product.description}</p>

        <div className="sizes-section">
          <div className="title">size</div>
          <div className="group">
            <div className="size active">4*4 M</div>
            <div className="size">2*3 M</div>
            <div className="size">3*4 M</div>
          </div>
        </div>
        <div className="colors-section colors">
          <div className="title">color</div>
          <div className="group">
            <div className="color white active"></div>
            <div className="color black"></div>
            <div className="color blue"></div>
            <div className="color yellow"></div>
          </div>
        </div>
        <div className="btns-footer">
          <div className="quantity">
            <span>-</span> <span className="num">1</span>
            <span>+</span>
          </div>
          <Button>BUY NOW</Button>
        </div>
        <div className="footer">
          <div className="item">
            <div>
              <img src="/icons/heart.svg" alt="heart icon" />
            </div>
            <span>add to wishlist</span>
          </div>
          <div className="item">
            <div>
              <img src="/icons/video.svg" alt="video icon" />
            </div>

            <span>add to wishlist</span>
          </div>
          <div className="item">
            <div>
              <img src="/icons/share.svg" alt="share icon" />
            </div>
            <span>add to wishlist</span>
          </div>
        </div>
      </div>
    );
  }
}

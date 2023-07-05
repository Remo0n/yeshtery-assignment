import React, { Component } from "react";
import "./ProductImageViewer.style.scss";

export default class ProductImageViewer extends Component {
  state = {
    mainImg: "",
  };

  render() {
    const product = this.props.product;
    return (
      <div className="viwer-wrapper">
        <div className="img-collection">
          {this.props.product?.images?.map((src) => (
            <img
              key={src}
              src={src}
              alt="product "
              onClick={(e) => this.setState({ mainImg: e.target.currentSrc })}
            />
          ))}
        </div>
        <div className="previewed-img">
          <img src={this.state.mainImg || product.thumbnail} alt="product" />
          <span className="disscount">
            {product?.discountPercentage?.toFixed()}% Off
          </span>
        </div>
      </div>
    );
  }
}

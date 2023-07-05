import React, { Component, lazy, Suspense } from "react";
import { fetchProducts } from "../utils/services/fetchProducts";

import "./Homepage.style.scss";

const ProductCard = lazy(() => import("../components/ProductCard"));

export default class Homepage extends Component {
  state = {
    products: [],
    isLoading: false,
  };

  componentDidMount() {
    const res = fetchProducts();
    res
      .then((productsList) => {
        this.setState({ products: productsList.products });
      })
      .finally(() => this.setState({ isLoading: false }));
  }

  render() {
    console.log(this.state.isLoading);
    if (this.state.isLoading) {
      return <h1>Loading...</h1>;
    }
    return (
      <div className="products-wrapper">
        <Suspense fallback={<div>Loading Component</div>}>
          {this.state.products.map((product) => (
            <ProductCard product={product} key={product.id} />
          ))}
        </Suspense>
      </div>
    );
  }
}

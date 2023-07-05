import React, { Component, lazy, Suspense } from "react";
import {
  fetchProductById,
  fetchProducts,
} from "../utils/services/fetchProducts";
import { useParams } from "react-router-dom";
import "./Proudct.style.scss";
import Breadcrumb from "../components/Breadcrumb";
import ProductCard from "../components/ProductCard";
import { drag } from "../utils/helper/drag";

const ProductImageViewer = lazy(() =>
  import("../components/ProductImageViewer")
);
const ProductDetails = lazy(() => import("../components/ProductDetails"));

export const withRouter = (Component) => {
  const Wrapper = (props) => {
    const params = useParams();
    return <Component params={params} {...props} />;
  };
  return Wrapper;
};

class Product extends Component {
  state = {
    product: {},
    products: [],
  };
  componentDidMount() {
    const id = this.props.params.id;
    const productRes = fetchProductById(id);
    productRes.then().then((productsList) => {
      this.setState({ product: productsList });
    });

    const productsRes = fetchProducts();
    productsRes.then().then((productsList) => {
      this.setState({ products: productsList.products });
    });
  }
  render() {
    drag(".products-slider");

    return (
      <Suspense fallback={<div>Loading Component</div>}>
        <Breadcrumb />
        <section className="product-overview">
          <ProductImageViewer product={this.state.product} />
          <ProductDetails product={this.state.product} />
        </section>
        <div className="products-suggestions">
          <h1 className="header-title">you may also like</h1>
          <div className="products-slider">
            {this.state.products.map((product) => (
              <ProductCard product={product} key={product.id} />
            ))}
          </div>
        </div>
      </Suspense>
    );
  }
}

export default withRouter(Product);

import React, { Component } from "react";
import ProductItemComponent from "../ProductItem/productItem";
import { connect } from "react-redux";
class ProductsComponent extends Component {
  render() {
    return (
      <div className="row">
        {this.props.productList
          .filter((item) => item.type === this.props.ChoosenCategory)
          .map((item, index) => (
            <div className="col-4" key={index}>
              <ProductItemComponent item={item} />
            </div>
          ))}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  productList: state.products,
  ChoosenCategory: state.ChoosenCategory,
});

export default connect(mapStateToProps)(ProductsComponent);

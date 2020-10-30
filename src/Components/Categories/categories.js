import React, { Component } from "react";
import { connect } from "react-redux";
class CategoriesComponent extends Component {
  render() {
    return (
      <div className="btn-group ">
        {this.props.categoryList.map((item, index) => (
          <button
            onClick={() => this._chooseCategory(item.type)}
            key={index}
            className={this.props.ChoosenCategory === item.type ? 'btn btn-primary' : 'btn btn-secondary'}
          >
            {" "}
            {item.showName}{" "}
          </button>
        ))}
      </div>
    );
  }
  _chooseCategory = (payload) => {
    this.props.dispatch({
      type: "SET_CATEGORY",
      payload,
    });
  };
}

const mapStateToProps = (state) => ({ // lấy data từ store về
  categoryList: state.categories,
  ChoosenCategory: state.ChoosenCategory,
});

export default connect(mapStateToProps)(CategoriesComponent);

import React, { Component } from "react";
import Item from "./Item";

export default class ShoesShop extends Component {
  renderItem = () => {
    //this.props: là thuộc tính có sẵn của react class component có thể truy xuất bất kỳ phương thức nào trên component này

    let { arrProduct } = this.props;
    return arrProduct.map((product, index) => {
      return (
        <div className="col-4" key={index}>
          <Item prod={product} />
        </div>
      );
    });
  };
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-4 d-flex align-item-center h-100">
            <div>
              <nav>
                <ul>
                  <li>Home</li>
                  <li>Shop</li>
                </ul>
              </nav>
            </div>
          </div>
          <div className="col-8">
            <div className="row">
              {this.renderItem()}
              {/* <div className="col-4">
                                <Item/>

                            </div>
                            <div className="col-4">
                                <Item/>

                            </div> */}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

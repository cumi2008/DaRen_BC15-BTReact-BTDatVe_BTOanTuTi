import React, { Component } from "react";

export default class Item extends Component {
  render() {
    let { prod } = this.props;

    return (
      <div className="card text-dark">
        <img className="card-img-top " src={prod.image} alt />
        <div className="card-body">
          <h4 className="card-title " style={{height:100}}>
            {prod.name}
          </h4>
          <p className="card-text">
            {prod.price}
          </p>
          <button className="btn" style={{backgroundColor:"#000", color: '#fff'}}>Add to card <i className="fa fa-cart-plus"></i></button>
        </div>
      </div>
    );
  }
}

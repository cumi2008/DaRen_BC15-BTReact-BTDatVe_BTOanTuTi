import React, { Component } from "react";

export default class Profile extends Component {
  //Phương thức render là phương thức trả về giao diện của component này
  render() {
    return (
      <div className="w-25">
        <div className="card bg-dark text-light">
          <img
            className="card-img-top"
            src="https://i.pravatar.cc/300"
            alt
          />
          <div className="card-body">
            <h4 className="card-title">Title</h4>
            <p className="card-text">Text</p>
          </div>
        </div>
      </div>
    );
  }
}

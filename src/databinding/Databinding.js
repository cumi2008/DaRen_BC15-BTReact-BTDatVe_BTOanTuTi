import React, { Component } from "react";

export default class Databinding extends Component {
  renderImg = () => {
    return (
      <div>
        <img src="https://picsum.photos/200" alt="" />
      </div>
    );
  };
  renderCard = () => {
    return (
      <div className="card">
        {this.renderImg()}
        <div className="card-body">
          <p>Họ tên: abc</p>
          <p>Tuổi: 18</p>
        </div>
      </div>
    );
  };

  render() {
    let title = "cybersoft";
    let srcImg = "http://i.pravatar.cc/300";
    let sinhVien = {
      maSV: 1,
      tenSV: "Nguyen Van A",
      namSinh: "20/12/1999",
      hinhAnh: "https://i.pravatar.cc/200",
    };

    return (
      <div className="container">
        abc
        {this.renderCard()}
        {this.renderImg()}
        <p id="txt">{title}</p>
        <br />
        <img src={srcImg} />
        <div className="card w-25">
          <img src={sinhVien.hinhAnh} />
          <div className="card-body">
            <p>Họ tên: {sinhVien.tenSV}</p>
            <p>Họ tên: {sinhVien.namSinh}</p>
          </div>
        </div>
      </div>
    );
  }
}

import React, { Component } from "react";

export default class SanPham extends Component {
  render() {
    let { sanPham } = this.props;

    return (
      <div className="col-4">
        <div className="card">
          <img
            className="card-img-top"
            src={sanPham.hinhAnh}
            width={250}
            height={300}
          />
          <div className="card-body">
            <h4 className="card-title">{sanPham.tenSP}</h4>
            <p>{sanPham.giaBan}</p>
            <button
              className="btn btn-success"
              onClick={() => this.props.xemChiTiet(sanPham)}
            >
              Xem chi tiết
            </button>
            <button className="btn btn-danger ml-2" onClick={()=>{this.props.themGioHang(sanPham)}}>Thêm giỏ hàng</button>
          </div>
        </div>
      </div>
    );
  }
}

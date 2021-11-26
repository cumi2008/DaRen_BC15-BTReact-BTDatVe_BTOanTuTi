import React, { Component } from "react";

export default class GioHang extends Component {
  render() {
    let { gioHang } = this.props;
    return (
      <table className="table">
        <thead>
          <tr>
            <th>Mã sản phẩm</th>
            <th>Hình ảnh</th>
            <th>Tên sản phẩm</th>
            <th>Giá bán</th>
            <th>Số lượng</th>
            <th>Thành tiền</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {gioHang.map((spGH, index) => {
            return (
              <tr key={index}>
                <td>{spGH.maSP}</td>
                <td>
                  <img src={spGH.hinhAnh} width={50} />
                </td>
                <td>{spGH.tenSP}</td>
                <td>{spGH.giaBan}</td>
                <td>
                  <button className="btn btn-outline-dark mr-2" style={{marginRight:'3px', color:'#000'}} onClick={()=>{this.props.tangGiamSoLuong(spGH.maSP,1)}}>+</button>
                  {spGH.soLuong}
                  <button className="btn btn-outline-dark ml-2"  style={{marginLeft:'3px', color:'#000'}}  onClick={()=>{this.props.tangGiamSoLuong(spGH.maSP,-1)}}>-</button>
                </td>
                
                <td>{spGH.soLuong * spGH.giaBan}</td>

                
                <td>
                <button className="btn btn-danger ml-2" onClick={()=>{this.props.xoaGioHang(spGH.maSP)}}>Xóa</button>
                </td>
              </tr>
            );
          })}
          {/* <tr>
            <td>1</td>
            <td>
              <img src="https://picsum.photos/200" />
            </td>
            <td>Iphone</td>
            <td>1000</td>
            <td>5</td>
            <td>5000</td>
            <td>
              <button className="btn btn-danger">Xóa</button>
            </td>
          </tr> */}
        </tbody>
      </table>
    );
  }
}

import React, { Component } from "react";
import GioHang from "./GioHang";
import SanPham from "./SanPham";

export default class DanhSachSanPham extends Component {
  mangSanPham = [
    {
      maSP: 1,
      tenSP: "VinSmart Live",
      manHinh: "AMOLED, 6.2, Full HD+",
      heDieuHanh: "Android 9.0 (Pie)",
      cameraTruoc: "20 MP",
      cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
      ram: "4 GB",
      rom: "64 GB",
      giaBan: 5700000,
      hinhAnh: "./img/vsphone.jpg",
    },
    {
      maSP: 2,
      tenSP: "Meizu 16Xs",
      manHinh: "AMOLED, FHD+ 2232 x 1080 pixels",
      heDieuHanh: "Android 9.0 (Pie); Flyme",
      cameraTruoc: "20 MP",
      cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
      ram: "4 GB",
      rom: "64 GB",
      giaBan: 7600000,
      hinhAnh: "./img/meizuphone.jpg",
    },
    {
      maSP: 3,
      tenSP: "Iphone XS Max",
      manHinh: "OLED, 6.5, 1242 x 2688 Pixels",
      heDieuHanh: "iOS 12",
      cameraSau: "Chính 12 MP & Phụ 12 MP",
      cameraTruoc: "7 MP",
      ram: "4 GB",
      rom: "64 GB",
      giaBan: 27000000,
      hinhAnh: "./img/applephone.jpg",
    },
  ];

  state = {
    sanPham: this.mangSanPham[0],
    gioHang: [
      {maSP:2, tenSP: "Meizu 16Xs", hinhAnh:"./img/meizuphone.jpg", giaBan: 7600000, soLuong:1}
    ]
  };

  xemChiTiet = (dt) => {
    this.setState({
      sanPham: dt,
    });
  };

  themGioHang = (sanPhamClick) => {
    //Tạo ra sp giỏ hàng
    let spGH = {...sanPhamClick, soLuong:1}
    //Lấy state giỏ hàng ra thêm sp này vào
    let gioHangCapNhat = this.state.gioHang;
    // gioHangCapNhat.push(spGH);

    //Kiểm tra sp đó đã có trong giỏ hàng chưa
    let sanPhamGioHang = gioHangCapNhat.find(sp => sp.maSP === spGH.maSP);
    //Nếu sp đó đã có trong giỏ hàng rồi
    if(sanPhamGioHang) {
      sanPhamGioHang.soLuong += 1 ; 
    }else {
      gioHangCapNhat.push(spGH);
    }
    

    this.setState ({
      gioHang: gioHangCapNhat
    })
  }
  xoaGioHang = (maSPClick) => {
    console.log(maSPClick);
    // let index = this.state.gioHang.findIndex(sp => sp.maSP === maSPClick);
    // if (index !== -1) {
    //   //Xử lý xóa dựa vào index
    //   this.state.gioHang.splice(index,1);
    // }

    let gioHangCapNhat = this.state.gioHang.filter (sp =>sp.maSP != maSPClick)
    this.setState ({
      gioHang : gioHangCapNhat
    })
  }

  tangGiamSoLuong = (maSP, soLuong) => {
    console.log(maSP, soLuong);
    let spGH = this.state.gioHang.find(sp => sp.maSP === maSP);
    if (spGH) {
      spGH.soLuong += soLuong;
      if (spGH.soLuong < 1) {
        spGH.soLuong -= soLuong;
        alert ('sản phẩm tối thiểu là 1');
        // this.xoaGioHang(soGH.maSP);
      }
    }
    this.setState ({
      gioHang : this.state.gioHang
    })

  }

  //Nơi đặt thuộc tính state phải chứa giao diện hiển thị của state đó (trực tiếp hoặc gián tiếp)
  //Nơi đặt htuoocj tính state phải chứa nút xử lý làm thay đổi state(trực tiếp hoặc gián tiếp))

  renderSanPham = () => {
    return this.mangSanPham.map((sanPham, index) => {
      return (
        <SanPham key={index} sanPham={sanPham} xemChiTiet={this.xemChiTiet} themGioHang={this.themGioHang}/>
      );
    });
  };

  render() {
    let { sanPham } = this.state;

    return (
      <div className="container">
        <div className="text-right">
          <span style={{cursor:'pointer', color:'red', fontWeight:'bold'}}>Giỏ hàng(0)</span>
        </div>
        <div>
          <GioHang tangGiamSoLuong={this.tangGiamSoLuong} xoaGioHang={this.xoaGioHang} gioHang = {this.state.gioHang}/>
        </div>
        <hr/>
        <div className="row">{this.renderSanPham()}</div>
        <hr />
        <div className="row">
          <div className="col-6 text-center">
            <h3>{sanPham.tenSP}</h3>
            <img src={sanPham.hinhAnh} width={250} height={300} />
          </div>
          <div className="col-6">
            <h3 className="text-center">Thông số kỹ thuật</h3>
            <table className="table">
              <tbody>
                <tr>
                  <th>Màn hình</th>
                  <td>{sanPham.manHinh}</td>
                </tr>
                <tr>
                  <th>Hệ điều hành</th>
                  <td>{sanPham.heDieuHanh}</td>
                </tr>
                <tr>
                  <th>Camera trước</th>
                  <td>{sanPham.cameraTruoc}</td>
                </tr>
                <tr>
                  <th>Camera sau</th>
                  <td>{sanPham.cameraSau}</td>
                </tr>
                <tr>
                  <th>RAM</th>
                  <td>{sanPham.ram}</td>
                </tr>
                <tr>
                  <th>ROM</th>
                  <td>{sanPham.rom}</td>
                </tr>
               
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

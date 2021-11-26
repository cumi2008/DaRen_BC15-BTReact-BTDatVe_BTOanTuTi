import React, { Component } from 'react'
import { connect } from 'react-redux';

class SanPhamRedux extends Component {
    render() {
        let { sanPham } = this.props;
    
        return (
          
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
                  onClick={() =>{} }
                >
                  Xem chi tiết
                </button>
                <button className="btn btn-danger ml-2" onClick={()=>{this.props.themGioHang(sanPham)}}>Thêm giỏ hàng</button>
              </div>
            </div>
          
        );
      }
}
//Định nghĩa 1 hàm gửi dữ liệu lên redux
const mapDispatchToProps = (dispatch) => {
  //dispatch là 1 hàm của redux giúp đưa dữ liệu từ component lên redux

  return {

    themGioHang : (sanPhamClick) => {
      console.log(sanPhamClick);

      //Gửi dữ liệu lên redux
      //Tạo ra spGioHang
      let spGH = {...sanPhamClick, soLuong: 1}
      //Định nghĩa action
      const action = {
        type : 'THEM_GIO_HANG' , //Thuộc tính bắt buộc
        spGH: spGH
        
        
      }
      //Dùng hàm dispatch từ redux cung cấp để đưa dữ liệu lên redux (reducer)
      dispatch(action)



    }
  }



}
export default connect (null, mapDispatchToProps)(SanPhamRedux);

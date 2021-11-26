import React, { Component } from "react";
import "./BaiTapDatGhe.css";
import thongTinGhe from "./../../data/danhSachGhe.json";
import Ghe from "./Ghe";
import ThongTinDatGhe from "./ThongTinDatGhe";

export default class BaiTapDatGhe extends Component {

    renderHangGhe = () => {
      return  thongTinGhe.map((hangGhe, index) => {
        return <div key={index}>
            <Ghe hangGhe = {hangGhe} soHangGhe = {index} />
        </div>


    })

    }

  render() {
    return (
      <div className="bookingMovie ">
        <div
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0,0,0,.6)",
          }}
        >
          <div className="container-fluid">
            <div className="row ">
              <div className="col-8">
                <div className="text-center text-warning 
                my-2" style={{fontSize:30}}>
                  đặt vé xem phim
                </div>
                <div className="text-center text-light">màn hình</div>
                <div className="screen" style={{ margin: "auto" }}></div>
                <div className="mt-3" style={{margin:'auto', textAlign:'center'}}>
                    {this.renderHangGhe()}
                </div>
              </div>
              <div className="col-4">
                <div className="text-center text-light my-3" style={{fontSize:30}}>
                  thông tin đặt ghế
                </div>
                <ThongTinDatGhe/>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

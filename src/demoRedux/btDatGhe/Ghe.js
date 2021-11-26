import React, { Component } from "react";
import { connect } from "react-redux";

import {datGheAction} from "./../../redux/action/baiTapDatGheAction"

class Ghe extends Component {
  renderGhe = () => {
    return this.props.hangGhe.danhSachGhe.map((ghe, index) => {
      let cssGheDaDat = "";
      let disabled = false;

      if (ghe.daDat) {
        cssGheDaDat = "gheDuocChon";
        disabled = true;
      }
      let cssGheDangDat = "";
      let indexGheDangDat = this.props.danhSachGheDangDat.findIndex(
        (gheDangDat) => gheDangDat.soGhe === ghe.soGhe
      );

      if (indexGheDangDat !== -1) {
        cssGheDangDat = "gheDangChon";
      }

      return (
        <button
          onClick={() => {
            this.props.datGhe(ghe);
          }}
          disabled = {disabled}
          className={`ghe ${cssGheDangDat} ${cssGheDaDat}`}
          key={index}
        >
          {ghe.soGhe}
        </button>
      );
    });
  };

  renderHang = () => {
    return this.props.hangGhe.danhSachGhe.map((hang, index) => {
      return <button className="rowNumber" >{hang.soGhe}</button>;
    });
  };

  renderHangGhe = () => {
      if (this.props.soHangGhe === 0) { //Số hàng ghế = 0 là hàng số thứ tự đầu tiên, props từ BaiTapDatGhe
          return <div className="ml-4" style={{marginLeft: 10}}>
              {this.props.hangGhe.hang} {this.renderHang()}
          </div>
      }else {
          return <div className="firstChar">
              {this.props.hangGhe.hang} {this.renderGhe()}
          </div>
      }
  }

  render() {
    return <div className="text-light text-left ml-5 mt-1" style={{fontSize:'30px'}}>{this.renderHangGhe()}</div>;
  }
}

const mapStateToProps = (state) => {
  return {
    danhSachGheDangDat: state.baiTapDatGheReducer.danhSachGheDangDat,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    datGhe: (ghe) => {
      dispatch(datGheAction(ghe));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Ghe);

import React, { Component } from "react";
import { connect } from "react-redux";
import { huyGheAction } from "../../redux/action/baiTapDatGheAction";

class ThongTinDatGhe extends Component {
  render() {
    return (
      <div>
        <div>
          <button
            className="gheDuocChon  "
            style={{ marginRight: "5px" }}
          ></button>
          <span className="text-light">ghế đã đặt</span>
          <br />
          <button
            className="gheDangChon  "
            style={{ marginRight: "5px" }}
          ></button>
          <span className="text-light">ghế đang chọn</span>
          <br />
          <button
            className="ghe"
            style={{ marginRight: "5px", marginLeft: "0" }}
          ></button>
          <span className="text-light">ghế trống</span>
        </div>

        <div className="thongTinDatVe">
          <table className="table table-bordered mt-3">
            <thead className="text-light" style={{}}>
              <tr>
                <td>số ghế</td>
                <td>giá</td>
                <td>hủy</td>
              </tr>
            </thead>
            <tbody className="text-warning " style={{ overflow: "scroll" }}>
              {this.props.danhSachGheDangDat.map((gheDangDat, index) => {
                return (
                  <tr key={index}>
                    <td>{gheDangDat.soGhe}</td>
                    <td>{gheDangDat.gia.toLocaleString()}</td>
                    <td>
                      <span
                        className="text-danger"
                        style={{ cursor: "pointer", fontSize: 25 }}
                        onClick={() => {
                          this.props.dispatch(huyGheAction(gheDangDat.soGhe));
                        }}
                      >
                        x
                      </span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
            <tfoot>
              <tr className="text-success">
                
                <td className="text-light">tổng tiền:</td>
                <td>
                  {this.props.danhSachGheDangDat.reduce(
                    (tongTien, gheDangDat, index) => {
                      return (tongTien += gheDangDat.gia);
                    },
                    0
                  ).toLocaleString()}
                </td>
                <td></td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    danhSachGheDangDat: state.baiTapDatGheReducer.danhSachGheDangDat,
  };
};

export default connect(mapStateToProps)(ThongTinDatGhe);

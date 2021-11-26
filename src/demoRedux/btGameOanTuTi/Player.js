import React, { Component } from "react";
import { connect } from "react-redux";

class Player extends Component {
  render() {
    return (
      <div className="playerGame text-center ml-auto">
        <div className="thinking mt-3">
          <img
            src={this.props.mangItem.find((item) => item.chon === true).hinhAnh}
            alt=""
            width={60}
            height={60}
            className="mt-3"
            // style={{ transform: 'rotate(-180deg)' }}
          />
        </div>
        <div className="speech-bubble"></div>
        <div className="text-center mt-5">
          <img
            src="./img/gameOanTuTi/player.png"
            alt='' 
            width={150}
            height={150}
          />
        </div>
        <div className="row">
          {this.props.mangItem.map((item, index) => {
            let border = {};
            if (item.chon) {
              border = { border: "solid 3px orange" };
            }
            return (
              <div className="col-4 p-0" key={index}>
                <button className="btnItem" style={border} onClick={()=>{this.props.chonItem(item.item)}}>
                  <img src={item.hinhAnh} alt={item.hinhAnh} width={40} height={40} />
                </button>
              </div>
            );
          })}

          {/* <div className="col-4 p-0">
            <button className="btnItem">
              <img
                src="./img/gameOanTuTi/keo.png"
                alt=""
                width={40}
                height={40}
              />
            </button>
          </div>
          <div className="col-4 p-0">
            <button className="btnItem">
              <img
                src="./img/gameOanTuTi/bua.png"
                alt=""
                width={40}
                height={40}
              />
            </button>
          </div>
          <div className="col-4 p-0">
            <button className="btnItem">
              <img
                src="./img/gameOanTuTi/bao.png"
                alt=""
                width={40}
                height={40}
              />
            </button>
          </div> */}
        </div>
      </div>
    );
  }
}

const mapStateToProp = (state) => {
  return {
    mangItem: state.gameOanTuTiReducer.mangItem
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    chonItem: (item) => {
      const action = {
        type: "CHON_ITEM",
        item,
      };
      dispatch(action);
    },
  };
};


export default connect(mapStateToProp, mapDispatchToProps)(Player);

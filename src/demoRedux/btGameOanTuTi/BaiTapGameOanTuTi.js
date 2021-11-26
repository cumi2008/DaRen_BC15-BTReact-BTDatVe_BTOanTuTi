import React, { Component } from "react";
import "./BaiTapGameOanTuTi.css";
import "./../../assets/buble.css";
import Computer from "./Computer";
import KetQuaGame from "./KetQuaGame";
import Player from "./Player";
import { connect } from "react-redux";

class BaiTapGameOanTuTi extends Component {
  render() {
    return (
      <div className="gameOanTuTi">
        <div className="container">
          <div className="row">
            <div className="col-4">
              <Player />
            </div>
            <div className="col-4">
              <KetQuaGame />
              <div className="text-center mt-5">
                    <button className="btn btn-success" onClick={()=>{this.props.playGame()}}>play game</button>
                </div>
                
            </div>
            <div className="col-4">
              <Computer />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    playGame: () => {
      let count = 0;

      //Khai báo hàm lặp đi lặp lại
      let randomComputerItem = setInterval(() => {
        let soRandom = Math.floor(Math.random() * 3);
        dispatch({
          type: "RANDOM",
          soRandom,
        });
        count++;

        //Dừng hàm setInterval
        if (count > 10) {
          clearInterval(randomComputerItem);
          dispatch({
            type: "END_GAME",
          });
        }
      }, 100);
    },
  };
};

export default connect(null, mapDispatchToProps)(BaiTapGameOanTuTi);

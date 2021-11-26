import React, { Component } from "react";
import { connect } from "react-redux";

class Computer extends Component {
  render() {
    let keyframe = `@keyframes randomItem${Date.now()} {
        0% {top: -50%;}
        25% {top: 100%;}
        50% {top: -50%;}
        75% {top: 100%;}
        100% {top: 0;}
      }`;

    return (
      <div className="playerGame text-center ml-auto">
        <style>{keyframe}</style>
        <div className="thinking mt-3 position-relative" style={{overflow:'hidden'}}>
          <img
            src={this.props.computer.hinhAnh}
            alt=""
            width={60}
            height={60}
            className="mt-3"
            style={{
              transform: "rotate(-180deg)",
              position: "absolute",
              left: "30%",
              
              animation: `randomItem${Date.now()} 0.5s`,
            }}
          />
        </div>
        <div className="speech-bubble"></div>
        <div className="text-center mt-5">
          <img
            src="./img/gameOanTuTi/playerComputer.png"
            alt=""
            width={150}
            height={150}
          />
        </div>
      </div>
    );
  }
}

const mapStateToProp = (state) => {
  return {
    computer: state.gameOanTuTiReducer.computer,
  };
};

export default connect(mapStateToProp)(Computer);

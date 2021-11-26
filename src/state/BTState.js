import React, { Component } from "react";

export default class BTState extends Component {
  state = {
    imgSource:"./img/black-car.jpg"
  };

  changeColor = (color) => {
      
      this.setState ({
          imgSource: `./img/${color}-car.jpg`
      })
  }

  render() {
    return (
      <div>
        <div className="col-8">
          <div className="row text-center">
            <h3>Vui lòng chọn màu xe</h3>
            <div className="col-6">
              <img src={this.state.imgSource} className="img-fluid" />
            </div>
            <div className="col-6">
              <ul className="list-group">
                <li className="list-group-item">
                    <img src="./img/icon-black.jpg" width="25" height="25" alt="" />
                  <button className="btn" style={{marginLeft:'3px', backgroundColor: '#000', color:'#fff'}} onClick={()=>{this.changeColor('black')}}>Color Black</button>
                </li>
                <li className="list-group-item">
                    <img src="./img/icon-red.jpg" width="25" height="25" alt="" />
                  <button className="btn btn-danger" style={{marginLeft:'3px'}} onClick={()=>{this.changeColor('red')}}>Color Red</button>
                </li>
                <li className="list-group-item">
                    <img src="./img/icon-silver.jpg" width="25" height="25" alt="" />
                  <button className="btn" style={{marginLeft:'3px', backgroundColor:'grey', color:'#fff'}} onClick={()=>{this.changeColor('silver')}}>Color Silver</button>
                </li>
                <li className="list-group-item">
                    <img src="./img/icon-steel.jpg" width="25" height="25" alt="" />
                  <button className="btn btn-dark" style={{marginLeft:'3px'}} onClick={()=>{this.changeColor('steel')}}>Color Steel</button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

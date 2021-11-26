import React, { Component } from "react";

export default class GlassesArray extends Component {
  state = {
    item: {
      id: 2,
      price: 50,
      name: "GUCCI G8759H",
      url: "./glassesImage/v2.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
  };

  changeGlasses = (newItem) => {
    this.setState({
      item: newItem,
    });
  };

  renderGlasses = () => {
    let { arrGlasses } = this.props;

    return arrGlasses.map((glasses, index) => {
      let imgSource = `./img/${glasses.url}`;
      return (
        <div className="col-2" key={index}>
          <img
            src={imgSource}
            width={100}
            height={70}
            style={{
              border: "solid 1px grey",
              padding: 10,
              margin: 15,
              cursor: "pointer",
            }}
            onClick={() => {
              this.changeGlasses(glasses);
            }}
          />
        </div>
      );
    });
  };

  render() {
    let imgSource = `./img/${this.state.item.url}`;
    return (
      <div className="text-center">
        <div className="col-8 " style={{margin: '0 auto'}}>
          <div className="row ">
            <div className="col-6">
              <div className="card position-relative" style={{ width: 220 }}>
                <img
                  className="card-img-top "
                  src="./img/glassesImage/model.jpg"
                  height={320}
                />
                <div className="glasses">
                  <img
                    // src={glasses.url}
                    src= {imgSource}
                    className="position-absolute"
                    style={{
                      top: "25%",
                      left: 32,
                      height: "14%",
                      width: "70%",
                      opacity: "0.7",
                    }}
                  />
                </div>
                <div
                  className="card-img-overlay position-absolute"
                  style={{
                    top: "70%",
                    left: 0,
                    height: "30%",
                    opacity: "0.7",
                    backgroundColor: "#2196f373",
                    textAlign: 'left'
                  }}
                >
                  <h4
                    className="card-title text-primary"
                    style={{ fontSize: 14 }}
                  >
                    {this.state.item.name}
                  </h4>
                  <p className="card-text text-dark" style={{ fontSize: 10 }}>
                    {this.state.item.desc}
                  </p>
                </div>
              </div>
            </div>
            <div className="col-6">
              <img
                src="./img/glassesImage/model.jpg"
                width={220}
                height={320}
              />
            </div>
          </div>
        </div>
        <div
          className="row"
          style={{ backgroundColor: "#fff", padding: 15, margin: 50 }}
        >
          {this.renderGlasses()}
          {/* <div className="col-1">
                    <img src="" alt="" />


                </div> */}
        </div>
      </div>
    );
  }
}

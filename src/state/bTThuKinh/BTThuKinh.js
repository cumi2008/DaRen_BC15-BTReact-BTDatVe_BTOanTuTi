import React, { Component } from "react";
import GlassesArray from "./GlassesArray";

export default class BTThuKinh extends Component {
  arrGlasses = [
    {
      id: 1,
      price: 30,
      name: "GUCCI G8850U",
      url: "./glassesImage/v1.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 2,
      price: 50,
      name: "GUCCI G8759H",
      url: "./glassesImage/v2.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 3,
      price: 30,
      name: "DIOR D6700HQ",
      url: "./glassesImage/v3.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 4,
      price: 70,
      name: "DIOR D6005U",
      url: "./glassesImage/v4.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 5,
      price: 40,
      name: "PRADA P8750",
      url: "./glassesImage/v5.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 6,
      price: 60,
      name: "PRADA P9700",
      url: "./glassesImage/v6.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 7,
      price: 80,
      name: "FENDI F8750",
      url: "./glassesImage/v7.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 8,
      price: 100,
      name: "FENDI F8500",
      url: "./glassesImage/v8.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 9,
      price: 60,
      name: "FENDI F4300",
      url: "./glassesImage/v9.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
  ];

  render() {
    return (
      <div className="container text-center col-8">
        <div className="row text-center">
          <div
            className="text-center"
            style={{
              backgroundImage: `url('./img/glassesImage/background.jpg')`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              //   filter:'brightness(50%)',
              margin: "0, auto",
            }}
          >
            <h3></h3>
            <div className="container">
              <div className="row" style={{ margin: 20 }}>
                <GlassesArray arrGlasses={this.arrGlasses} />

                {/* <div className="col-6">
                
              </div>
              <div className="col-6">
              <img
                  src="./img/glassesImage/model.jpg"
                  width={200}
                  height={300}
                />
              </div> */}
              </div>
            </div>

            <div style={{}}></div>
          </div>
        </div>
      </div>
    );
  }
}

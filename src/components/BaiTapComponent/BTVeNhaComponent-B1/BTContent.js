import React, { Component } from "react";
import BTCard from "./BTCard";

export default class BTContent extends Component {
  render() {
    return (
      <section className="pt-4">
        <div className="container px-lg-5">
          <div className="row gx-lg-5">
            <div className="col-lg-6 col-xxl-4 mb-5">
                <BTCard/>
            </div>
            <div className="col-lg-6 col-xxl-4 mb-5">
                <BTCard/>
            </div>
            <div className="col-lg-6 col-xxl-4 mb-5">
                <BTCard/>
            </div>
            <div className="col-lg-6 col-xxl-4 mb-5">
                <BTCard/>
            </div>
            <div className="col-lg-6 col-xxl-4 mb-5">
                <BTCard/>
            </div>
            <div className="col-lg-6 col-xxl-4 mb-5">
                <BTCard/>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

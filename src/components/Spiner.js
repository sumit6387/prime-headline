import React, { Component } from "react";
import loading from "../loader.gif";

export class Spiner extends Component {
  render() {
    return (
      <div className="text-center">
        <img src={loading} alt="loading" />
      </div>
    );
  }
}

export default Spiner;

import React, { Component } from "react";
import { Link } from "react-router-dom";
import Car1 from "./cars/Car1";
import Car2 from "./cars/Car2";
import Car3 from "./cars/Car3";
import Car4 from "./cars/Car4";
import Car5 from "./cars/Car5";

export default class Cars extends Component {
  render() {
    return (
      <div>
        <Link to="/car1">
          <Car1 />
        </Link>
        <Link to="/car2">
          <Car2 />
        </Link>
        <Link to="/car3">
          <Car3 />
        </Link>
        <Link to="/car4">
          <Car4 />
        </Link>
        <Link to="/car5">
          <Car5 />
        </Link>
      </div>
    );
  }
}

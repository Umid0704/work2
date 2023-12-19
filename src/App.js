import React, { Component } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Cars from "./Components/Cars";
import Login from "./Components/Login";
import Car1 from "./Components/cars/Car1";
import Car2 from "./Components/cars/Car2";
import Car3 from "./Components/cars/Car3";
import Car4 from "./Components/cars/Car4";
import Car5 from "./Components/cars/Car5";
export class App extends Component {
  render() {
    return (
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cars" element={<Cars />} />
          <Route path="/car1" element={<Car1 />} />
          <Route path="/car2" element={<Car2 />} />
          <Route path="/car3" element={<Car3 />} />
          <Route path="/car4" element={<Car4 />} />
          <Route path="/car5" element={<Car5 />} />
        </Routes>
      </div>
    );
  }
}

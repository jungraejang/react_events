import React, { Component } from "react";
import logo from "./logo.svg";
import Clicker from "./Clicker.js";
import Sound from "react-sound";
import themeSong from "../src/mp3/theme.mp3";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Clicker />
      </div>
    )
  }
}

export default App;

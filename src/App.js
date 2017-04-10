import React, { Component } from "react";
import logo from "./logo.svg";
import translate from "./translate";

import "./App.css";

class App extends Component {
  render() {
    console.log(translate());
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>{translate(this.props.locale).hello}</h2>
        </div>
      </div>
    );
  }
}

export default App;

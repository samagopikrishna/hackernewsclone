import React, { Component } from "react";
import "./styles.css";
import Header from "./Components/Header";
import Data from "./Components/Data";
import Form from "./Components/Form";

import { BrowserRouter, Route, Link } from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          {/* <Link to="/form">Login</Link> */}
          <Route exact path="/" component={Form} />
          {/* <Route exact path="/form" component={Form} /> */}
          <Route exact path="/home" component={Header} />
          <Route exact path="/home" component={Data} />
        </div>
      </BrowserRouter>
    );
  }
}

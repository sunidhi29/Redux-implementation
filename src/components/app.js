import React, { Component } from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import Login from "./Login";
import Home from "./Home";
import State from "./State";
import District from "./District";
import Navbar from "./Navbar";
import Child from "./Child";
import Info from "./Info";
import Form from "./Form";

export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/home" component={Home} />
          <Route exact path="/state" component={State} />
          <Route exact path="/district/:id" component={District} />
          <Route exact path="/child" component={Child} />
          <Route exact path="/info/:id" component={Info} />
          <Route exact path="/form" component={Form} />
          <Route exact path="/" component={Login} />
        </Switch>
      </div>
    );
  }
}

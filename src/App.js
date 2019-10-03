import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import { Header } from "./header/header";
// import { countryContainer } from './containers/countyContainer';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Route component={Header} />
        <Switch>
          {/* <Route exact path='/' component={countryContainer} /> */}
        </Switch>
      </React.Fragment>
    );
  }
}

export default App;

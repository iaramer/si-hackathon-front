import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import { Header } from "./components/header/header";
import { StartPage } from "./containers/start-page/start-page.component";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Route component={Header} />
        <Switch>
          <Route exact path='/' component={StartPage} />
        </Switch>
      </React.Fragment>
    );
  }
}

export default App;

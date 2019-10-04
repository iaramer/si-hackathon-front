import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import { Header } from "./components/header/header";
import { StartPage } from "./containers/start-page/start-page.component";
import { TopicsPage } from "./containers/topic/topics-page.components";
import { Page } from "./containers/page";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Route component={Header} />
        <Switch>
          <Route exact path='/' component={StartPage} />
          <Route path='/topics/' component={TopicsPage} />
          <Route path='/topic/:id' component={Page} />
        </Switch>
      </React.Fragment>
    );
  }
}

export default App;

import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import { Header } from "./components/header/header";
import { StartPage } from "./containers/start-page/start-page.component";
import { TopicsPage } from "./containers/topic/topics-page.components";
import { Question } from "./containers/question/questions";
import { PageInfo } from "./containers/info-page/info-page.component";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Route component={Header} />
        <Switch>
          <Route exact path='/' component={StartPage} />
          <Route path='/language/:langId/topics/:examId' component={TopicsPage} />
          <Route path='/topic/:id/question' component={Question} />
          <Route path='/topic/:id' component={PageInfo} />
        </Switch>
      </React.Fragment>
    );
  }
}

export default App;

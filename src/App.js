import React, { Component } from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import { ApolloProvider } from "react-apollo";
import { ApolloProvider as ApolloHooksProvider } from "react-apollo-hooks";

import Header from "./Components/Header";
import client from "./Components/apolloClient";

import _Detail from "./Routes/_Detail";
import _Move from "./Routes/_Move";
import Home from "./Routes/Home";
import Summary from "./Routes/Summary";
import Project from "./Routes/Project";
import Detail from "./Routes/Detail";
import Advice from "./Routes/Advice";

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <ApolloHooksProvider client={client}>
          <Router>
            <div> 
              <Header />
              <Switch>
                <Route exact={true} path={"/"} component={Home} />
                <Route path={"/summary"} component={Summary} />
                <Route path={"/project"} component={Project} />
                <Route path={"/detail"} component={Detail} />
                <Route path={"/advice"} component={Advice} />
                <Route path={"/move"} component={_Move} />
                <Route path={"/details/:movieId"} component={_Detail} />
              </Switch>
            </div>
          </Router>
        </ApolloHooksProvider>
      </ApolloProvider>
      
    );
  }
}

export default App;

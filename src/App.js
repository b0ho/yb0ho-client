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
import Notfound from "./Routes/Notfound";

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <ApolloHooksProvider client={client}>
          <div>
            <Home exact={true} path={"/"} component={Home} />
            <Header />
            <Summary path={"#summary"} component={Summary} />
            <Project path={"#project"} component={Project} />
            <Detail path={"#detail"} component={Detail} />
            <Advice path={"#advice"} component={Advice} />
            {/* <_Move path={"#move"} component={_Move} />
            <_Detail path={"#details/:movieId"} component={_Detail} /> */}
            {/* 
            <Switch>
              <Route path={"#project"} component={Project} />
              <Route component={Notfound} />
            </Switch>
            */}
          </div>
        </ApolloHooksProvider>
      </ApolloProvider>
    );
  }
}

export default App;

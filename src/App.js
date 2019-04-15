import React, { Component } from "react";
import { HashRouter as Route } from "react-router-dom";
import { ApolloProvider } from "react-apollo";
import { ApolloProvider as ApolloHooksProvider } from "react-apollo-hooks";

import Header from "./Components/Header";
import Footer from "./Components/Footer";
import client from "./Components/apolloClient";

import _Detail from "./Routes/_Detail";
import _Move from "./Routes/_Move";
import Home from "./Routes/Home";
import Summary from "./Routes/Summary";
import Project from "./Routes/Project";
import Detail from "./Routes/Detail";
import Advice from "./Routes/Advice";
import Notfound from "./Routes/Notfound";

//배포
class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <ApolloHooksProvider client={client}>
          <Route>
            <div>
              <Home exact={true} path={"#"} component={Home} />
              <Header />
              <Summary to={"#summary"} component={Summary} />
              <Project exact to={"#project"} component={Project} />
              <Detail path={"#detail"} component={Detail} />
              <Advice path={"#advice"} component={Advice} />
              <Footer />
            </div>
          </Route>
        </ApolloHooksProvider>
      </ApolloProvider>
    );
  }
}

export default App;

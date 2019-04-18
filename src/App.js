import React, { Component } from "react";
import { HashRouter as Route } from "react-router-dom";
import { ApolloProvider } from "react-apollo";
import { ApolloProvider as ApolloHooksProvider } from "react-apollo-hooks";

import Header from "./Components/Header";
import Footer from "./Components/Footer";
import client from "./Components/apolloClient";

import Home from "./Routes/Home";
import Introduce from "./Routes/Introduce";
import Project from "./Routes/Project";
import Detail from "./Routes/Detail";
import Advice from "./Routes/Advice";
import Images from "./Routes/Images";
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
              <Introduce path={"#introduce"} component={Introduce} />
              <Project path={"#project"} component={Project} />
              <Detail path={"#detail"} component={Detail} />
              <Advice path={"#advice"} component={Advice} />
              <Images path={"#Images"} component={Images} />
              <Footer />
            </div>
          </Route>
        </ApolloHooksProvider>
      </ApolloProvider>
    );
  }
}

export default App;

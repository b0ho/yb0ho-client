import React, { Fragment, Component } from "react";
import styled from "styled-components";

const Title = styled.div`
  justify-items: center;
  font-size: 50px;
  text-align: center;
  margin-top: 20px;
  margin-bottom: 20px;
`;

const Content = styled.div`
  justify-items: center;
  font-size: 40px;
`;

class Home extends Component {
  render() {
    return (
      <Fragment>
        <Title>유병호 입니다</Title>
        <Content />
        <iframe
          src="https://cdn.knightlab.com/libs/timeline3/latest/embed/index.html?source=1mtuD5DT7AttHwNFP2ugrrHgZBQK928om52uM5dQ3ACA&font=Default&lang=ko&start_at_end=true&initial_zoom=2&height=600"
          width="100%"
          height="600"
          webkitallowfullscreen
          mozallowfullscreen
          allowfullscreen
          frameborder="0"
        />
        <div id="timeline" />
      </Fragment>
    );
  }
}

export default Home;

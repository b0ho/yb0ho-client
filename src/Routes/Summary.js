import React, { Fragment } from "react";
import styled from "styled-components";

const Title = styled.div`
  justify-items: center;
  font-size: 50px;
`;

const Content = styled.div`
  justify-items: center;
  font-size: 40px;
`;

const Summary = () => {
  return (
    <Fragment>
      <Title>요약</Title>
      <Content />
      요약
    </Fragment>
  );
};

export default Summary;

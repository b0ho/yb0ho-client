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

const Advice = () => {
  return (
    <Fragment>
      <Title>조언</Title>
      <Content />
      조언
    </Fragment>
  );
};

export default Advice;

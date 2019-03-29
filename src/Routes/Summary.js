import React, { Fragment } from "react";
import styled from "styled-components";

const Container = styled.div`
  max-width: 1000px;
  margin: 0 auto;
`;

const Title = styled.div`
  font-size: 40px;
  font-weight: 700;
`;

const SubTitle = styled.div`
  margin: 50px 0 0 300px;
  font-size: 30px;
  font-weight: 300;
`;

const Content = styled.div`
  margin: 50px 0 50px 300px;
  font-size: 20px;
`;

const Summary = () => {
  return (
    <Fragment>
      <Container>
        <Title>요약</Title>
        <SubTitle>ss</SubTitle>
        <Content>요약</Content>
      </Container>
    </Fragment>
  );
};

export default Summary;

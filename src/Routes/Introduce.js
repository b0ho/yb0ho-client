import React, { Fragment } from "react";
import styled from "styled-components";

const Container = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  border-bottom: 5px solid gray;
`;

const Title = styled.div`
  margin-top: 50px;
  font-size: 40px;
  font-weight: 700;
`;

const SubTitle = styled.div`
  margin: 20px 0 0 300px;
  font-size: 30px;
  font-weight: 300;
`;

const Content = styled.div`
  margin: 50px 0 50px 300px;
  font-size: 20px;
  border-bottom: 1px solid gray;
`;

const section = styled.div``;

const Project = () => {
  return (
    <Fragment>
      <Container>
        <Title>소개합니다</Title>
        <SubTitle>간략 소개</SubTitle>
        <Content>
          간략 소개 내가 추구하는 것 이루고 싶은 목표 하고싶은 일 잘하는 것
        </Content>
        <SubTitle>내가 추구하는 것</SubTitle>
        <Content>내용</Content>
      </Container>
    </Fragment>
  );
};

export default Project;

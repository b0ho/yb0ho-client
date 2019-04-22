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
        <Title>프로젝트</Title>
        <SubTitle>프로젝트 이름</SubTitle>
        <Content>
          프로젝트 사진
          <br />
          링크
          <br />
          고래고래 ... EX1) Java, Spring은 별도로 둔다. 언어: Java 8 (버전도)
          Java 8을 이용한 asynchronous network programming 프레임워크: Spring
          프로젝트: Spring을 이용하여 ~~ 상용 프로그램을 만들었다. EX2) Python,
          Django은 별도로 둔다. 언어: Python3 (버전도) 프레임워크: Django
          프로젝트: “협업 웹 메신저” Django를 이용하여 인증서버, 채팅서버를
          구현했다. 이 프로젝트에서 기술적으로 어려웠던 부분, 해결한 부분 설명이
          없으면 안된다. 자랑만 하는 것은 의미가 없다. 팀 프로젝트를 조심하라.
          이런 프로젝트를 했다. 끝. 자기가 얼마나 했는지가 안나와 있다. 자신이
          한 부분을 어필해야한다.
        </Content>
        <SubTitle>프로젝트 이름</SubTitle>
        <Content>
          프로젝트 사진
          <br />
          링크
          <br />
          고래고래 ... EX1) Java, Spring은 별도로 둔다. 언어: Java 8 (버전도)
          Java 8을 이용한 asynchronous network programming 프레임워크: Spring
          프로젝트: Spring을 이용하여 ~~ 상용 프로그램을 만들었다. EX2) Python,
          Django은 별도로 둔다. 언어: Python3 (버전도) 프레임워크: Django
          프로젝트: “협업 웹 메신저” Django를 이용하여 인증서버, 채팅서버를
          구현했다. 이 프로젝트에서 기술적으로 어려웠던 부분, 해결한 부분 설명이
          없으면 안된다. 자랑만 하는 것은 의미가 없다. 팀 프로젝트를 조심하라.
          이런 프로젝트를 했다. 끝. 자기가 얼마나 했는지가 안나와 있다. 자신이
          한 부분을 어필해야한다.
        </Content>
      </Container>
    </Fragment>
  );
};

export default Project;

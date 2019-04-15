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
  margin: 50px 0 0 300px;
  font-size: 30px;
  font-weight: 300;
`;

const Content = styled.div`
  margin: 50px 0 50px 300px;
  font-size: 20px;
  border-bottom: 1px solid gray;
`;

const Detail = () => {
  return (
    <Fragment>
      <Container>
        <Title>관련 기술</Title>
        <SubTitle>ss</SubTitle>
        <Content>
          어떻게 공부하는가? 대학교-학과수업을 통한 지식 습득 및 팀 프로젝트
          진행 이후 온라인 강의를 통해 원하는 기술 습득 feedly를 활용하여 주요
          기술 블로그와 프로그래머 블로그를 통해 기술 동향과 관련 기술 팁을 배움
          평상시에 메모하는 습관-아이디어를 찾고 기록해둠 괜찮은 서비스에 대한
          목표 프로그래머스, 삼성 sw 아카데미에서 알고리즘 공부 문제 해결 방법:
          코드 점검, 시스템 점검, 구글 검색(stack overflow 등 ), 질의
        </Content>
        <SubTitle>ss</SubTitle>
        <Content>
          어떻게 공부하는가? 대학교-학과수업을 통한 지식 습득 및 팀 프로젝트
          진행 이후 온라인 강의를 통해 원하는 기술 습득 feedly를 활용하여 주요
          기술 블로그와 프로그래머 블로그를 통해 기술 동향과 관련 기술 팁을 배움
          평상시에 메모하는 습관-아이디어를 찾고 기록해둠 괜찮은 서비스에 대한
          목표 프로그래머스, 삼성 sw 아카데미에서 알고리즘 공부 문제 해결 방법:
          코드 점검, 시스템 점검, 구글 검색(stack overflow 등 ), 질의
        </Content>
      </Container>
    </Fragment>
  );
};

export default Detail;

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

const Detail = () => {
  return (
    <Fragment>
      <Title>세부사항</Title>
      <Content>
        소프트웨어 전공에서 가장 중요하게 다루었던 것은 프로젝트였습니다. 물론
        그 기반으로써 이론과 기초 학습 과정이 선행 되었습니다. 이론 과정에는
        컴퓨터 구조 등의 컴퓨터에 대한 이해를 위한 과목, 알고리즘 등의 자료를
        다루는 방법에 대한 과목, 그리고 네트워크에 대한 과목들이 있었습니다.
        프로젝트 과정에는 자바를 중심으로 하는 윈도우 프로그래밍, 데이터
        베이스를 중심으로하는 웹 프로그래밍 들이 이었습니다. 선행 과정 이후에는
        팀 단위의 프로젝트를 수행했습니다. 프로젝트의 개요를 구상하여 계획,
        설계하고 이를 구현, 점검하는 일련의 과정을 진행했습니다. 프로젝트 위주의
        수업은 팀 간의 의사소통과 개개인의 실력차이 그리고 목표에 대한 기대치
        부분에서 어려움이 있었습니다. 때문에 프로젝트에 임할 때에 가장 중점을 둔
        것은 합의된 명확한 목표를 설정하는 것과 팀에 혹이 되지 않도록 노력 하는
        것이었습니다. 프로젝트 과제는 많은 시간과 협력이 필요했기 때문에 많은
        고생과 노력이 필요했지만 동시에 혼자로서는 얻기 어려운 결과를 성취할 수
        있는 경험이었습니다.
      </Content>
    </Fragment>
  );
};

export default Detail;

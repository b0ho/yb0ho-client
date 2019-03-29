import React, { Fragment } from "react";
import styled from "styled-components";

const Container = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  border-bottom: 10px solid white;
`;

const Title = styled.div`
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
`;

const section = styled.div``;

const Project = () => {
  return (
    <Fragment>
      <Container>
        <Title>프로젝트</Title>
        <SubTitle>고래고래</SubTitle>
        <Content>
          재미있게 공부하는 단어장을 만들어보자. 여느 때처럼 영문 페이지를
          번역하던 중 떠오른 생각입니다. 전공 특성상 영문을 접할 일이 많았고
          이럴 때마다 영어 공부가 절실하다는 생각이 들었습니다. 그러던 중 알게
          된 Three.js 라이브러리는 딱 알맞은 요소였습니다. 3D 객체에 대해서는
          공부해 본적이 없었기에 걱정도 됐지만 어떻게든 접목시켜 프로젝트를
          진행하고 싶었습니다. 이러한 생각들이 고래 키보드와 만났고 고래고래
          프로젝트는 시작되었습니다. 목표는 크게 2가지였습니다. Three.js
          라이브러리를 이해하여 단어 공부가 가능한 재미있는 페이지를 만드는 것.
          최종적으로 로컬 환경이 아닌 간접 배포를 통해 다른 사람들이 언제나 이용
          가능하도록 하는 것. 가장 어려웠던 것은 물론 3D 객체를 이해하는
          것이었습니다. 때문에 다양한 예제를 보며 Three를 학습하고 지속가능한
          운영을 위해 직접 서버를 운영하기보다 Firebase 프로젝트에 업로드하여
          배포하는 방식을 선택했습니다. 이 때 동적으로 작동해야 했기 때문에 자체
          기능인 Cloud Functions을 사용했고 전체적인 작업은 Express를 이용하여
          자바스크립트 위주로 진행했습니다. 즉 ‘고래고래’ 는 다음과 같은 과정을
          수행합니다. 단어장 엑셀로부터 알파벳, 발음기호, 뜻을 가져와 메인
          페이지로 넘겨줍니다. 메인화면에서는 Three 객체들이 생성되고 이때
          단어들이 랜덤 매칭 되어 화면에 표시됩니다. 최종적으로 Firebase를 통해
          배포하면서 초기 목표는 달성되었습니다. 화면에 임의의 단어들로 구성된
          고래가 표시됩니다. 사용자는 마우스를 이동하여 뜻을 보거나 발음기호를
          확인할 수 있습니다. 또한 객체가 움직이고 변환하기 때문에 재미를 가지고
          학습할 수 있습니다. 추후에는 사용자 개별 정보를 토대로 맞춤 정보를
          제공하는 것이 목표입니다.
        </Content>
      </Container>
    </Fragment>
  );
};

export default Project;

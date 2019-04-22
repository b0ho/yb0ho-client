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
  font-weight: 300;
`;

const Popupwindow = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  background-color: rgba(0, 0, 0, 0.5);
`;

const Exit = styled.div`
  position: absolute;
  left: 25%;
  right: 25%;
  top: 25%;
  bottom: 25%;
  margin: auto;
  background: white;
`;

const Round = styled.div`
  position: absolute;
  left: 25%;
  right: 25%;
  top: 25%;
  bottom: 25%;
  margin: auto;
  background: white;
`;

const Versus = styled.div`
  position: absolute;
  left: 25%;
  right: 25%;
  top: 25%;
  bottom: 25%;
  margin: auto;
  background: white;
`;

const Left = styled.div`
  position: absolute;
  left: 25%;
  right: 25%;
  top: 25%;
  bottom: 25%;
  margin: auto;
  background: white;
`;

const Right = styled.div`
  position: absolute;
  left: 25%;
  right: 25%;
  top: 25%;
  bottom: 25%;
  margin: auto;
  background: white;
`;

class Popup extends React.Component {
  render() {
    return (
      <Fragment>
        <Popupwindow>
          <Exit>
            {/* <h1>{this.props.text}</h1> */}
            팝업에 표시된 내용
            <button onClick={this.props.closePopup}>닫기</button>
          </Exit>
          <Round />
          <Left />
          <Right />
        </Popupwindow>
      </Fragment>
    );
  }
}

class Advice extends React.Component {
  constructor() {
    super();
    this.state = {
      showPopup: false
    };
  }

  togglePopup() {
    this.setState({
      showPopup: !this.state.showPopup
    });
  }

  render() {
    return (
      <Fragment>
        <Container>
          <Title>조언</Title>
          <SubTitle>고래고래</SubTitle>
          <Content>
            <button onClick={this.togglePopup.bind(this)}>
              여기에 이미지가 표시될 것임
            </button>
            {this.state.showPopup ? (
              <Popup
                text="프로그래밍 월드컵"
                closePopup={this.togglePopup.bind(this)}
              />
            ) : null}
          </Content>
        </Container>
      </Fragment>
    );
  }
}

export default Advice;

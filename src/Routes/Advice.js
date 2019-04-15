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

const Popup_inner = styled.div`
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
          <Popup_inner>
            <h1>{this.props.text}</h1>
            <button onClick={this.props.closePopup}>close me!</button>
          </Popup_inner>
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
            <button onClick={this.togglePopup.bind(this)}>show popup</button>
            {this.state.showPopup ? (
              <Popup text="Close Me" closePopup={this.togglePopup.bind(this)} />
            ) : null}
          </Content>
        </Container>
      </Fragment>
    );
  }
}

export default Advice;

import React, { Fragment, Component } from "react";
import styled from "styled-components";

const Foot = styled.div`
  font-size: 20px;
  display: inline-block;
  width: 100%;
  height: 30px;
  background: gray;
  text-align: center;
  align: center;
`;

const Footer = () => {
  return (
    <Fragment>
      <Foot>
        yb0ho 전화 :{" "}
        <a
          href="http://qr.kakao.com/talk/w6gT9VrB59Id5pJ_H1j0fnNDtls-"
          target="_blank"
        >
          010-2314-6034
        </a>{" "}
        메일 :{" "}
        <a
          href="https://mail.google.com/mail/u/0/?view=cm&fs=1&tf=1&source=mailto&to=mail@ybg4828"
          target="_blank"
        >
          ybg4828@gmail.com
        </a>{" "}
        깃허브 :{" "}
        <a href="https://github.com/b0ho" target="_blacnk">
          github.com/b0ho{" "}
        </a>
      </Foot>
    </Fragment>
  );
};

export default Footer;

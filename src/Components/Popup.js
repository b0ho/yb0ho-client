import React, { Fragment } from "react";
import styled from "styled-components";

const Pop = styled.div`
  font-size: 40px;
  background-color: gray;
  text-align: center;
`;

const Popup = () => {
  return (
    <Fragment>
      <Pop>팝업에 표시된 내용</Pop>
    </Fragment>
  );
};

export default Popup;

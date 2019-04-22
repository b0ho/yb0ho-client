import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Conteiner = styled.div`
  background-image: ${props => `url(${props.background})`};
`;

const Title = styled.span``;

const Img = ({ title, location }) => (
  <Conteiner background={location}>
    <Title>{title}</Title>
  </Conteiner>
);

Img.propTypes = {
  title: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired
};

export default Img;

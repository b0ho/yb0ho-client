import React, { Fragment, Component } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Navbar = styled.div`
  font-size: 40px;
  position: sticky;
  display: inline-block;
  top: 0px;
  width: 100%;
  height: 60px;
  background-color: gray;
  text-align: center;
`;

const Header = () => {
  return (
    <Fragment>
      <Navbar>
        <nav>
          <a class="button" href="#">
            Home
          </a>

          <a class="button" href="#introduce">
            Introduce
          </a>

          <a class="button" href="#project">
            Project
          </a>

          <a class="button" href="#detail">
            Detail
          </a>

          <a class="button" href="#advice">
            Advice
          </a>
        </nav>
      </Navbar>
    </Fragment>
  );
};

export default Header;

import React, { Fragment } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const Navbar = styled.div`
  font-size: 40px;
  display: inline-block;
  position: sticky;
  top: 0px;
  width: 100%;
  height: 60px;
  background: gray;
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
          <a class="button" href="#summary">
            Summary
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

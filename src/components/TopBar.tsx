/** @jsx jsx */
import * as React from "react";
import styled from "@emotion/styled";
import { css, jsx } from "@emotion/core";
import { MdMenu } from "react-icons/md";
import Breakpoints from "../common/breakpoints";

const TopBar: React.FunctionComponent = props => {
  return (
    <Container>
      <div
        css={css`
          color: red;
        `}
      ></div>
      <MdMenu size={40} css={MenuCSS} />
    </Container>
  );
};

const Container = styled.div`
  background-color: black;

  @media (min-width: ${Breakpoints.Desktop}px) {
    display: none;
  }
`;

const MenuCSS = css`
  color: white;
  margin: 10px;

  &:hover {
    color: darkgrey;
    cursor: pointer;
  }

  &:active {
    color: grey;
  }
`;

export default TopBar;

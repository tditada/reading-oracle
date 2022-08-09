import React from "react";
import styled from "styled-components";

const HEADER_TEXT = "Oráculo Lector";
const SUBHEADER_TEXT = "¿Con qué libro sigo?";

const StyledHeader = styled.header`
  text-align: center;
`;

const StyledSubHeader = styled.h3`
  font-weight: 100;
`;

const Header = () => {
  return (
    <StyledHeader>
      <h1>{HEADER_TEXT}</h1>
      <StyledSubHeader>{SUBHEADER_TEXT}</StyledSubHeader>
      <link
        href="https://fonts.googleapis.com/css?family=Lato:300,400,700"
        rel="stylesheet"
        type="text/css"
      />
    </StyledHeader>
  );
};

export default Header;

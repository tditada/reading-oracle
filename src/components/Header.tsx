import React from "react";
import styled from "styled-components";

const HEADER_TEXT = "Oráculo Lector";

const StyledHeader = styled.header`
  text-align: center;
`;

const Header = () => {
  return (
    <StyledHeader>
      <h1>{HEADER_TEXT}</h1>
      <link
        href="https://fonts.googleapis.com/css?family=Lato:300,400,700"
        rel="stylesheet"
        type="text/css"
      />
    </StyledHeader>
  );
};

export default Header;

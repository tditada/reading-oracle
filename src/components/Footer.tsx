import React from "react";
import styled from "styled-components";

const FOOTER_TEXT = "Hecho por ";
const LINK_ACCOUNT = "@masalladelpapel";
const CONTACT_URL = "https://lnk.bio/masalladelpapel";

const StyledFooter = styled.footer`
  margin-top: 3em;
  text-align: center;
`;

const StyledLink = styled.a`
  display: inline-block;
  color: white;
`;

const Footer = () => {
  return (
    <StyledFooter>
      <p>
        {FOOTER_TEXT}
        <StyledLink href={CONTACT_URL}>{LINK_ACCOUNT}</StyledLink>
      </p>
    </StyledFooter>
  );
};

export default Footer;

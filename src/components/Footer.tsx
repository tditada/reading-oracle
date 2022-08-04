import React from 'react';
import styled from 'styled-components';

const FOOTER_TEXT = 'Hecho por @masalladelpapel (instagram/tiktok)';

const StyledFooter = styled.footer`
    margin-top: 3em;
    text-align: center;
`;

const Footer = () => {
    return (
        <StyledFooter>_
            <p>{FOOTER_TEXT}</p>
        </StyledFooter>
    );
};

export default Footer;
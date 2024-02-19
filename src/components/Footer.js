import React from 'react';
import styled from 'styled-components';

const StyledFooter = styled.footer`
  text-align: center;
  background-color: #090b13;
  color: #fff;
`;

const FooterText = styled.p`
  font-size: 1.2rem;
`;

const HeartIcon = styled.span`
  color: red;
  font-size: 1.5rem;
`;

const Footer = () => {
  return (
    <StyledFooter>
      <FooterText>
        Made with <HeartIcon>❤️</HeartIcon> by Aakash Kapoor
      </FooterText>
    </StyledFooter>
  );
};

export default Footer;

import React from "react";
import styled from "styled-components";
const Footer = () => {
  return (
    <StyledFooter>
      Made by{" "}
      <a
        style={{ textDecoration: "none" }}
        href="https://github.com/ExoticFormula"
      >
        ExoticFormula{" "}
      </a>
      ❤
    </StyledFooter>
  );
};

const StyledFooter = styled.div`
  width: 100%;
  height: 40px;
  color: dodgerblue;

  text-align: center;
  font-size: 20px;
`;

export default Footer;

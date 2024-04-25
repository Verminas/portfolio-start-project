import React from "react";
import styled from "styled-components";

export const Menu = () => {
  return (
    <nav>
      <StyledMenuList>
        <li>
          <a href="">Home</a>
        </li>
        <li>
          <a href="">Skills</a>
        </li>
        <li>
          <a href="">Works</a>
        </li>
        <li>
          <a href="">Testimony</a>
        </li>
        <li>
          <a href="">Contact</a>
        </li>
      </StyledMenuList>
    </nav>
  )
}

const StyledMenuList = styled.ul`
    display: flex;
    gap: 10px;
`
import React from "react";
import {Icon} from "../Icon/Icon";
import styled from "styled-components";

export const SocialMedia = () => {
  return (
    <StyledSocialMediaList>
      <li>
        <a href="#">
          <Icon iconId={'instSvg'}></Icon>
        </a>
      </li>
      <li>
        <a href="#">
          <Icon iconId={'vkSvg'}></Icon>
        </a>
      </li>
      <li>
        <a href="#">
          <Icon iconId={'telegramSvg'}></Icon>
        </a>
      </li>
      <li>
        <a href="#">
          <Icon iconId={'linkedinSvg'}></Icon>
        </a>
      </li>
    </StyledSocialMediaList>
  )
}

const StyledSocialMediaList = styled.ul`
    display: flex;
    gap: 5px;
    
    svg{
        min-width: 15px;
        min-height: 15px;
        max-width: 35px;
        max-height: 35px;
    }
`
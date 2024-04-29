import React from "react";
import {Icon} from "../Icon/Icon";
import styled from "styled-components";
import {theme} from "../../styles/Theme";


type SocialIconLinksPropsType = {
  socialIconsId: Array<string>,
}



export const SocialIconLinks = (props: SocialIconLinksPropsType) => {
  const socialIconsElements = props.socialIconsId.map((socialIconId) => {
    return (
      <li>
        <StyledLink href="#">
          <Icon iconId={socialIconId} width={'50'} height={'50'} viewBox={'0 0 20 20'}></Icon>
        </StyledLink>
      </li>
    )
  })
  return (
    <StyledSocialIconLinks>
      {socialIconsElements}
    </StyledSocialIconLinks>
  )
}


const StyledSocialIconLinks = styled.ul`
    display: flex;
    gap: 20px;
    
    svg{
        min-width: 15px;
        min-height: 15px;
        max-width: 35px;
        max-height: 35px;
    }
`

const StyledLink = styled.a`
    background-color: rgba(255, 255, 255, 0.1);
    border-radius: 50%;
    display: flex;
    width: 35px;
    height: 35px;
    
    &:hover{
        background-color: ${theme.colors.accent};
        transform: translateY(-5px);
        svg{
            fill: ${theme.colors.primaryBg};
        }
    }
`
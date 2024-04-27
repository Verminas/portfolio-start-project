import React from "react";
import {Icon} from "../Icon/Icon";
import styled from "styled-components";


type SocialIconLinksPropsType = {
  socialIconsId: Array<string>,
}



export const SocialIconLinks = (props: SocialIconLinksPropsType) => {
  const socialIconsElements = props.socialIconsId.map((socialIconId) => {
    return (
      <li>
        <a href="#">
          <Icon iconId={socialIconId} width={'50'} height={'50'} viewBox={'0 0 20 20'}></Icon>
        </a>
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
    gap: 5px;
    
    svg{
        min-width: 15px;
        min-height: 15px;
        max-width: 35px;
        max-height: 35px;
    }
`
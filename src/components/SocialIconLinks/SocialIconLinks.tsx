import React from "react";
import {Icon} from "../Icon/Icon";
import styled, {css} from "styled-components";
import {theme} from "../../styles/Theme";


type SocialIconLinksPropsType = {
  socialIconsId: Array<string>,
  isHeader?: boolean | undefined,
}



export const SocialIconLinks: React.FC<SocialIconLinksPropsType> = (props: SocialIconLinksPropsType) => {
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
    <StyledSocialIconLinks isHeader={props.isHeader}>
      {socialIconsElements}
    </StyledSocialIconLinks>
  )
}


const StyledSocialIconLinks = styled.ul<{isHeader: boolean | undefined}>`
    display: flex;
    gap: 20px;
    
    svg{
        min-width: 15px;
        min-height: 15px;
        max-width: 35px;
        max-height: 35px;
    }
    ${props => props.isHeader && css<{isHeader: boolean | undefined}>`
        @media ${theme.media.large} {
            display: none;
        }
    `}`

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
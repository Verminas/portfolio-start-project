import React from "react";
import styled from "styled-components";
import {theme} from "../../../styles/Theme";

type HeaderMenuPropsType = {
  itemsNames: Array<string>,
  itemsId?: Array<string>,
}


export const HeaderMenu = (props: HeaderMenuPropsType) => {
  const menuItemsElements = props.itemsNames.map((menuItem) => {
    return (
      <HeaderListItem>
        <HeaderLink href={`#${menuItem.toLowerCase()}`}>{menuItem}
          <Mask>
            <span>{menuItem}</span>
          </Mask>
          <Mask>
            <span>{menuItem}</span>
          </Mask>

        </HeaderLink>
      </HeaderListItem>
    )
  })
  return (
    <HeaderNavigation>
      <StyledHeaderMenuList>
        {menuItemsElements}
      </StyledHeaderMenuList>
    </HeaderNavigation>
  )
}

const HeaderNavigation = styled.nav`
    @media ${theme.media.tablet} {
        display: none;
    }
`


const HeaderLink = styled.a`
    font-family: 'Josefin Sans', sans-serif;
    font-size: 30px;
    font-weight: 400;
    line-height: 55px;
    text-align: center;
    color: transparent;

`

const StyledHeaderMenuList = styled.ul`
    display: flex;
    gap: 30px;
    justify-content: center;
`

const Mask = styled.span`
    position: absolute;
    top: 0;
    left: 0;
    display: inline-block;
    height: 50%;
    overflow: hidden;
    //outline: 1px solid red;
    color: ${theme.colors.accent};
    
    & + & {
    top: 50%;
    span{
        transform: translateY(-50%);
        display: inline-block;
    }
}
`

const HeaderListItem = styled.li`
    position: relative;
    
    &::before{
        content: "";
        display: inline-block;
        height: 3px;
        background-color: ${theme.colors.accent};
        
        position: absolute;
        top: 50%;
        left: -10px;
        right: -10px;
        z-index: 1;
        
        transform: scale(0);
    }
    
    &:hover{
        &::before{
            transform: scale(1);
        }
        ${Mask} {
            color: ${theme.colors.font};
            transform: skew(12deg) translateX(5px);

            & + ${Mask} {
                transform: skew(12deg) translateX(-5px);
            }
        }
    }
`
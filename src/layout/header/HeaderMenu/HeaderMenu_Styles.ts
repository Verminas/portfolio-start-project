import styled, {css} from "styled-components";
import {theme} from "../../../styles/Theme";
import {Link} from "react-scroll";

const MenuList = styled.ul`
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
    color: ${theme.colors.accent};
    transition: ${theme.animations.transitions.average};
    
    & + & {
    top: 50%;
    span{
        transform: translateY(-50%);
        display: inline-block;
    }
}
`
const MenuItem = styled.li`
    position: relative;
`
const NavLink = styled(Link)`
    font-family: 'Josefin Sans', sans-serif;
    font-size: 30px;
    font-weight: 400;
    line-height: 55px;
    text-align: center;
    color: transparent;
    cursor: pointer;

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
        transition: ${theme.animations.transitions.average};
    }

    &:hover, &.active{
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

// Mobile Menu
const BurgerButton = styled.button<{isOpen: boolean}>`
    position: fixed;
    top: -112px;
    right: -105px;
    width: 200px;
    height: 200px;
    z-index: 100;

    span {
        display: block;
        width: 36px;
        height: 2px;
        background-color: ${theme.colors.font};
        position: absolute;
        left: 40px;
        bottom: 50px;

        ${props => props.isOpen && css`
            background-color: transparent;
        `}
        &::before {
            content: "";
            display: block;
            width: 36px;
            height: 2px;
            background-color: ${theme.colors.font};
            position: absolute;
            transform: translateY(-10px);
            transition: ${theme.animations.transitions.average};

            ${props => props.isOpen && css`
                transform: translateY(0) rotate(-45deg);
            `}
        }

        &::after {
            content: "";
            display: block;
            width: 24px;
            height: 2px;
            background-color: ${theme.colors.font};
            position: absolute;
            right: 0;
            transform: translateY(10px);
            transition: ${theme.animations.transitions.average};

            ${props => props.isOpen && css`
                transform: translateY(0) rotate(45deg);
                width: 36px;
            `}
        }
    }
`

const MobileMenuPopup = styled.div<{isOpen: boolean}>`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(31, 31, 32, 0.9);
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 99;
    transform: translateX(-100%);
    transition: ${theme.animations.transitions.mobileMenu};
    
    ${props => props.isOpen && css<{isOpen: boolean}>`
        transform: translateX(0);
    `}
    
    ul {
        width: 100%;
        display: flex;
        flex-direction: column;
        //gap: 20px;
        justify-content: center;
        align-items: center;
    }
    ${NavLink}{
        font-size: 36px;
    }
`

export const S = {
  MenuList,
  MenuItem,
  NavLink,
  Mask,
  BurgerButton,
  MobileMenuPopup,
}
import styled from "styled-components";
import {theme} from "../../styles/Theme";
import React from "react";

type ButtonPropsType = {
  name: string,
  type?: string,
}

export const Button: React.FC<ButtonPropsType> = (props: ButtonPropsType) => {
  return (
    <StyledButton>{props.name}</StyledButton>
  )
}

const StyledButton = styled.button`
    font-size: 14px;
    font-weight: 400;
    letter-spacing: 1px;
    width: 170px;
    height: 32px;
    text-transform: uppercase;
    padding: 5px;
    
    position: relative;
    z-index: 1;
    
    &::after{
        align-self: center;
        content: "";
        display: inline-block;
        width: 40%;
        height: 10px;
        background-color: ${theme.colors.accent};
        transition: ${theme.animations.transitions.average};
        
        position: absolute;
        z-index: -1;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
    }
    
    &:hover{
        &::after{
            width: 100%;
            height: 100%;
        }
    }
`
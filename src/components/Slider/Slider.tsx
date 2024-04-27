import styled from "styled-components";
import {FlexBoxWrapper} from "../FlexBoxWrapper";
import React from "react";
import {Slide} from "./Slide/Slide";
import {theme} from "../../styles/Theme";

export const Slider = () => {
  return (
    <StyledSlider>
      <FlexBoxWrapper>
        <Slide/>
      </FlexBoxWrapper>
      <Pagination>
        <span></span>
        <span className={"active"}></span>
        <span></span>
      </Pagination>
    </StyledSlider>
  )
}

const StyledSlider = styled.div`
    max-width: 500px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 35px;
    
`
const Pagination = styled.div`
    display: flex;
    gap: 5px;

    span {
        width: 7px;
        height: 7px;
        border-radius: 20px;
        background-color: rgba(255, 255, 255, 0.5);
        
        &.active {
            width: 20px;
            background-color: ${theme.colors.accent};
        }
    }
`
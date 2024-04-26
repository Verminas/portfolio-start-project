import styled from "styled-components";
import {FlexBoxWrapper} from "../FlexBoxWrapper";
import React from "react";
import {Slide} from "./Slide/Slide";

export const Slider = () => {
  return (
    <StyledSlider>
      <FlexBoxWrapper>
        <Slide/>
      </FlexBoxWrapper>
      <Pagination>
        <span></span>
        <span></span>
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
    gap: 20px;
`
const Pagination = styled.div`
    display: flex;
    gap: 10px;

    span {
        width: 15px;
        height: 15px;
        background-color: rgba(220, 20, 60, 0.5);
        border-radius: 50%;
        padding: 5px;
        margin: 0 5px;
    }
`
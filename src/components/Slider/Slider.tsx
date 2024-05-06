import {FlexBoxWrapper} from "../FlexBoxWrapper";
import React from "react";
import {Slide} from "./Slide/Slide";
import {S} from "./Slider_Styles";

export const Slider: React.FC = () => {
  return (
    <S.Slider aria-label="slider">
      <FlexBoxWrapper>
        <Slide/>
      </FlexBoxWrapper>
      <S.Pagination>
        <span role={"button"}></span>
        <span className={"active"} role={"button"}></span>
        <span role={"button"}></span>
      </S.Pagination>
    </S.Slider>
  )
}
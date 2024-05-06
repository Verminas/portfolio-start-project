import {FlexBoxWrapper} from "../FlexBoxWrapper";
import React from "react";
import {Slide} from "./Slide/Slide";
import {S} from "./Slider_Styles";

export const Slider: React.FC = () => {
  return (
    <S.Slider>
      <FlexBoxWrapper>
        <Slide/>
      </FlexBoxWrapper>
      <S.Pagination>
        <span></span>
        <span className={"active"}></span>
        <span></span>
      </S.Pagination>
    </S.Slider>
  )
}
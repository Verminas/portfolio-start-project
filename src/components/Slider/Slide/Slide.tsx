import React from 'react';
import {S} from "../Slider_Styles";

type SlidePropsType = {
  name: string,
  text: string,
}

export const Slide: React.FC<SlidePropsType> = (props: SlidePropsType) => {
  return (
    <S.Slide>
      <S.Text>{props.text}</S.Text>
      <S.Name>@{props.name}</S.Name>
    </S.Slide>
  );
};
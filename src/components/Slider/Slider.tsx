import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import {S} from "./Slider_Styles";
import "../../styles/slider.css";
import {Slide} from "./Slide/Slide";

type SliderPropsType = {
  sliderInfo: {
    slides: Array<{ name: string, text: string }>,
  }
}


export const Slider: React.FC<SliderPropsType> = (props: SliderPropsType) => (
  <S.Slider>
    <AliceCarousel
      mouseTracking
      items={
        props.sliderInfo.slides.map((s, index) =>
          <Slide
            name={s.name}
            text={s.text}
            key={index}
          />
        )
      }
      controlsStrategy="alternate"
      autoPlay={true}
      autoWidth={true}
      autoPlayStrategy={"all"}
      animationDuration={2000}
      autoPlayInterval={1000}
      disableButtonsControls={true}
      infinite={true}
      keyboardNavigation={true}
    />
  </S.Slider>
);
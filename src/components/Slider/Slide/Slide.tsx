import React from 'react';
import styled from "styled-components";

export const Slide = () => {
  return (
    <StyledSlide>
      <SlideText>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
        dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
      </SlideText>
      <SlideName>
        @ivan ivanow
      </SlideName>
    </StyledSlide>
  );
};


const StyledSlide = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    align-items: center;
`
const SlideText = styled.p``
const SlideName = styled.span``
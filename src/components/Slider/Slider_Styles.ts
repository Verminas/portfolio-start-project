import styled from "styled-components";

const Slider = styled.div`
    max-width: 500px;
    min-width: 330px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 35px;
`

// Slide
const Slide = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    text-align: center;
    
    &:hover{
        cursor: grab;
    }
    &:active{
        cursor: grabbing;
    }
`
const Text = styled.p`
    margin: 40px 0 24px;
    flex-grow: 1;
`
const Name = styled.span`
    text-transform: uppercase;
    font-family: 'Josefin Sans', sans-serif;
    font-size: 16px;
    font-weight: 600;
    letter-spacing: 1px;
    text-align: center;
`

export const S = {
  Slider,
  Slide,
  Text,
  Name,
}
import styled from "styled-components";
import {theme} from "../../styles/Theme";

const Slider = styled.div`
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

// Slide
const Slide = styled.div`
    display: flex;
    flex-direction: column;
    //gap: 20px;
    align-items: center;
    text-align: center;
`
const Text = styled.p`
    margin: 40px 0 24px;
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
  Pagination,
  Slide,
  Text,
  Name,
}
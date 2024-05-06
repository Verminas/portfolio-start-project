import styled from "styled-components";
import {theme} from "../../../../styles/Theme";

const WrapperSkill = styled.div`
    width: 330px;
    flex-grow: 1;
    padding: 55px 27px 48px;
    display: flex;
    flex-direction: column;
    justify-content: stretch;
    align-items: center;
    text-align: center;
    flex-wrap: wrap;

    @media ${theme.media.mobile} {
        padding: 55px 0 50px;
    }
`
const TitleSkill = styled.h3`
    text-transform: uppercase;
    margin: 67px 0 15px;
    text-align: center;
`

const TextSkill = styled.p`
    text-align: center;
    flex-grow: 1;
`

export const S = {
  WrapperSkill,
  TitleSkill,
  TextSkill,
}
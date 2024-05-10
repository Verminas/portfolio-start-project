import styled from "styled-components";
import {FlexBoxWrapper} from "../../../components/FlexBoxWrapper";
import {theme} from "../../../styles/Theme";
import {SectionWrapper} from "../../../components/SectionWrapper";
import {font} from "../../../styles/Common";

const SectionWrapperMedia = styled(SectionWrapper)`
    @media ${theme.media.tablet} {
        height: fit-content;
    }
`
const FlexBoxWrapperMedia = styled(FlexBoxWrapper)`
    @media ${theme.media.desktop} {
        justify-content: space-between;
    }
    @media ${theme.media.tablet} {
        align-content: center;
    }
    @media ${theme.media.mobile} {
      align-content: flex-start;
  }
`

const PhotoWrapper =styled.div`
    position: relative;
    object-fit: cover;
    z-index: 1;

    &::after {
        content: "";
        width: 360px;
        height: 470px;
        border: 5px solid ${theme.colors.accent};
        position: absolute;
        top: -25px;
        left: 25px;
        z-index: -1;
        

        @media ${theme.media.mobile} {
            width: 314px;
            height: 414px;
            top: -20px;
            left: 17px;
        }
    }

    @media ${theme.media.tablet} {
        margin-top: 65px;
    }
`

const Photo = styled.img`
    width: 350px;
    min-width: 150px;
    height: 430px;
    object-fit: cover;
    position: relative;
    margin-right: 20px;

    @media ${theme.media.desktop} {
        margin-right: 0;
    }
    
    @media ${theme.media.mobile} {
        width: 310px;
        height: 380px;
    }
    
`

const SmallText = styled.span`
    font-size: 14px;
    text-align: left;
`

const Name = styled.h2`
    
    ${font({family: "'Josefin Sans', sans-serif", weight: 700, Fmin: 36, Fmax: 50})}
    letter-spacing: 0.05em;
    text-align: left;
    margin: 10px 0;
    
    span{
        white-space: nowrap;
        position: relative;
        z-index: 1;
        &::after{
            content: "";
            display: inline-block;
            width: 100%;
            height: 20px;
            background-color: ${theme.colors.accent};
            position: absolute;
            bottom: 0;
            left: 0;
            right: 0;
            z-index: -1;
        }
    }

    @media ${theme.media.mobile} {
        margin: 15px 0 22px;
    }
`

const Title = styled.h1`
    //font-size: 27px;
    text-align: left;
    ${font({Fmin: 20, Fmax: 27})};
    
    p{
        display: none;
    }
`

export const S = {
  SectionWrapperMedia,
  FlexBoxWrapperMedia,
  PhotoWrapper,
  Photo,
  SmallText,
  Name,
  Title,
}
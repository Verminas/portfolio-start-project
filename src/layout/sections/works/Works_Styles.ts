import styled from "styled-components";
import {FlexBoxWrapper} from "../../../components/FlexBoxWrapper";
import {theme} from "../../../styles/Theme";
import {motion} from "framer-motion";

const FlexBoxWrapperMedia = styled(FlexBoxWrapper)`
    @media ${theme.media.desktop} {
      gap: 60px;
    }
`

// WorkItem
const WrapperWorkItem = styled(motion.div)`
    min-width: 330px;
    max-width: 540px;
    // width: 100%;
    display: flex;
    flex-grow: 1;
    flex-direction: column;
    align-items: stretch;
    justify-content: flex-start;
    background-color: ${theme.colors.secondaryBg};
    
    & a {
       text-transform: uppercase;
        padding: 10px 0;
    }
    
`
const WrapperImage = styled.div`
    img {
        width: 100%;
        object-fit: cover;
        @media ${theme.media.mobile} {
            height: 260px;
        }
    }

    position: relative;

    & button {
        opacity: 0;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -30%);
        transition: ${theme.animations.transitions.average};

        &::after {
            width: 100%;
            height: 100%;
        }
    }

    &::before {
        content: "";
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background: rgba(0, 0, 0, 0.3);
        backdrop-filter: blur(3px);
        opacity: 0;
        transition: ${theme.animations.transitions.average};
    }

    &:hover {
        &::before {
            opacity: 1;
        }

        & button {
            opacity: 1;
            transform: translate(-50%, -50%);
        }
    }

    @media ${theme.media.tablet} {
        &::before {
            opacity: 1;
        }

        & button {
            opacity: 1;
        }
    }

`
const WrapperInfo = styled.div`
    padding: 25px 25px;
    display: flex;
    flex-direction: column;
    
    @media ${theme.media.mobile} {
        padding: 20px 20px;
    }
`
const Title = styled.h3`
    text-transform: capitalize;
`
const Text = styled.p`
    margin: 15px 0 10px;
    flex-grow: 1;
`

// TabMenu
const TabMenuList = styled.ul`
    display: flex;
    justify-content: space-between;
    margin: 5px auto 40px;
    max-width: 352px;
    width: 100%;
  
    @media ${theme.media.mobile} {
      margin: 35px auto 45px;
    }
`

export const S = {
  FlexBoxWrapperMedia,
  WrapperWorkItem,
  WrapperImage,
  WrapperInfo,
  Title,
  Text,
  TabMenuList,
}
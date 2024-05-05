import {FlexBoxWrapper} from "../../../../components/FlexBoxWrapper";
import React from "react";
import styled from "styled-components";
import {Link} from "../../../../components/Link/Link";
import {theme} from "../../../../styles/Theme";
import {Button} from "../../../../components/Button/Button";

type WorkItemPropsType = {
  projImg: string,
  projTitle: string,
  projText: string,
}

export const WorkItem = (props: WorkItemPropsType) => {
  return (
    <WrapperWorkItem>
      <WrapperImage>
        <img src={props.projImg} alt=""/>
        <Button name={'view project'}></Button>
      </WrapperImage>
      <WrapperInfo>
        <Title>{props.projTitle}</Title>
        <Text>{props.projText}</Text>
        <FlexBoxWrapper gap={'20px'}>
          <Link href="#">Demo</Link>
          <Link href="#">Code</Link>
        </FlexBoxWrapper>
      </WrapperInfo>
    </WrapperWorkItem>
  )
}

const WrapperWorkItem = styled.div`
    min-width: 310px;
    max-width: 540px;
    //width: 100%;
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
        transform: translate(-50%, -50%);

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
        backdrop-filter: blur(5px);
        opacity: 0;
    }

    &:hover {
        &::before {
            opacity: 1;
        }

        & button {
            opacity: 1;
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
`
const Title = styled.h3`
    text-transform: capitalize;
`

const Text = styled.p`
    margin: 15px 0 10px;
    flex-grow: 1;
`
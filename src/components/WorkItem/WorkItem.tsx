import {FlexBoxWrapper} from "../FlexBoxWrapper";
import React from "react";
import styled from "styled-components";
import {Link} from "../Link/Link";

type WorkItemPropsType = {
  projImg: string,
  projTitle: string,
  projText: string,
}

export const WorkItem = (props: WorkItemPropsType) => {
  return (
    <WrapperWorkItem>
      <img src={props.projImg} alt=""/>
      <WrapperInfo>
        <Title>{props.projTitle}</Title>
        <Text>{props.projText}</Text>
        <FlexBoxWrapper>
          <Link href="#">Demo</Link>
          <Link href="#">Code</Link>
        </FlexBoxWrapper>
      </WrapperInfo>
    </WrapperWorkItem>
  )
}

const WrapperWorkItem = styled.div`
    display: flex;
    flex-direction: column;
    align-items: stretch;
    justify-content: space-between;
    background-color: #4a4646;

    img {
        width: 100%;
    }
`
const WrapperInfo = styled.div`
    padding: 25px 20px;
    display: flex;
    flex-direction: column;
    gap: 10px;
`
const Title = styled.h3`
    text-transform: capitalize;
`

const Text = styled.p``
import imgWorkSrc1 from "../../assets/images/work1.webp";
import {FlexBoxWrapper} from "../FlexBoxWrapper";
import React from "react";
import styled from "styled-components";

export const WorkItem = () => {
  return (
    <WrapperWorkItem>
      <img src={imgWorkSrc1} alt=""/>
      <WrapperInfo>
        <h3>Social Network</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore
          et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        <FlexBoxWrapper>
          <a href="#">Demo</a>
          <a href="#">Code</a>
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
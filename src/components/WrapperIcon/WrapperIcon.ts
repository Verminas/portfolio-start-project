import styled from "styled-components";

export const WrapperIcon = styled.div`
    position: relative;
    z-index: 1;
    &::before{
        content: "";
        display: inline-block;
        width: 80px;
        height: 80px;
        background: rgba(255, 255, 255, 0.1);
        transform: rotate(45deg) translate(-50%, -50%);
        z-index: -1;
        
        position: absolute;
        top: 50%;
        left: 50%;
        transform-origin: top left;
    }
`
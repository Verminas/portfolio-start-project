import styled from "styled-components";

type StyledFlexBoxWrapperPropsType = {
  direction?: string,
  justify?: string,
  align?: string,
  wrap?: string,
  gap?: string,
  width?: string,
}

export const FlexBoxWrapper = styled.div<StyledFlexBoxWrapperPropsType>`
    display: flex;
    width: ${props => props.width || "100%"};
    flex-direction: ${props => props.direction || "row"};
    justify-content: ${props => props.justify || "flex-start"};
    align-items: ${props => props.align || "stretch"};
    flex-wrap: ${props => props.wrap || "nowrap"};
    gap: ${props => props.gap || "50px"};
`
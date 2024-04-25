import styled from "styled-components";

type StyledSectionWrapperPropsType = {
  direction?: string,
  justify?: string,
  align?: string,
  wrap?: string,
  gap?: string,
}

export const StyledSectionWrapper = styled.div<StyledSectionWrapperPropsType>`
    display: flex;
    flex-direction: ${props => props.direction || "column"};
    justify-content: ${props => props.justify || "center"};
    align-items: ${props => props.align || "center"};
    flex-wrap: ${props => props.wrap || "nowrap"};
    gap: ${props => props.gap || "60px"};
`
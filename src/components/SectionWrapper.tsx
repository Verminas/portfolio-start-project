import styled from "styled-components";

type StyledSectionWrapperPropsType = {
  id: string,
  direction?: string,
  justify?: string,
  align?: string,
  wrap?: string,
  gap?: string,
  height?: string,
}

export const SectionWrapper = styled.section<StyledSectionWrapperPropsType>`
    display: flex;
    flex-direction: ${props => props.direction || "column"};
    justify-content: ${props => props.justify || "center"};
    align-items: ${props => props.align || "center"};
    flex-wrap: ${props => props.wrap || "nowrap"};
    gap: ${props => props.gap || "20px"};
    height: ${props => props.height || "100vh"};
`
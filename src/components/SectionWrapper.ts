import styled from "styled-components";

type StyledSectionWrapperPropsType = {
  id: string,
  height?: string,
}

export const SectionWrapper = styled.section<StyledSectionWrapperPropsType>`
    height: ${props => props.height || "fit-content"};
`
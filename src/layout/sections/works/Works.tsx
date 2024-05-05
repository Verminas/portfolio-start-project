import React from 'react';
import {SectionWrapper} from "../../../components/SectionWrapper";
import {SectionTitle} from "../../../components/SectionTitle/SectionTitle";
import {TabMenu} from "./TabMenu/TabMenu";
import {FlexBoxWrapper} from "../../../components/FlexBoxWrapper";
import {WorkItem} from "./WorkItem/WorkItem";
import {Container} from "../../../components/Container";
import styled from "styled-components";
import {theme} from "../../../styles/Theme";

type WorksPropsType = {
  worksInfo: {
    itemsNames: Array<string>,
    projects: {
      projImg: string,
      projTitle: string,
      projText: string,
    }[]
  }
}

export const Works = (props: WorksPropsType) => {
  const workItemsElements = props.worksInfo.projects.map(workItem => {
    return (
      <WorkItem projImg={workItem.projImg} projTitle={workItem.projTitle} projText={workItem.projText} />
    )
  })

  return (
    <SectionWrapper id={'works'}>
      <Container>
        <FlexBoxWrapper direction={'column'} gap={'0'} align={'center'} wrap={'wrap'}>
          <SectionTitle>My Works</SectionTitle>
          <TabMenu itemsNames={props.worksInfo.itemsNames}/>
          <FlexBoxWrapperMedia justify={'space-around'} wrap={'wrap'} align={'stretch'} gap={"30px"}>
            {workItemsElements}
          </FlexBoxWrapperMedia>
        </FlexBoxWrapper>
      </Container>
    </SectionWrapper>
  );
};

const FlexBoxWrapperMedia = styled(FlexBoxWrapper)`
    @media ${theme.media.desktop} {
      gap: 60px;
    }
`


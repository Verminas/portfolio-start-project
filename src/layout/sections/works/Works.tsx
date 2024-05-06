import React from 'react';
import {SectionWrapper} from "../../../components/SectionWrapper";
import {SectionTitle} from "../../../components/SectionTitle/SectionTitle";
import {TabMenu} from "./TabMenu/TabMenu";
import {FlexBoxWrapper} from "../../../components/FlexBoxWrapper";
import {WorkItem} from "./WorkItem/WorkItem";
import {Container} from "../../../components/Container";
import {S} from "./Works_Styles";

type WorksPropsType = {
  worksInfo: {
    tabItems: Array<string>,
    projects: {
      projImg: string,
      projTitle: string,
      projText: string,
    }[]
  }
}

export const Works: React.FC<WorksPropsType> = (props: WorksPropsType) => {
  const workItemsElements = props.worksInfo.projects.map((workItem, index) => {
    return (
      <WorkItem projImg={workItem.projImg} projTitle={workItem.projTitle} projText={workItem.projText} key={index}/>
    )
  })

  return (
    <SectionWrapper id={'works'}>
      <Container>
        <FlexBoxWrapper direction={'column'} gap={'0'} align={'center'} wrap={'wrap'}>
          <SectionTitle>My Works</SectionTitle>
          <TabMenu tabItems={props.worksInfo.tabItems}/>
          <S.FlexBoxWrapperMedia justify={'space-around'} wrap={'wrap'} align={'stretch'} gap={"30px"}>
            {workItemsElements}
          </S.FlexBoxWrapperMedia>
        </FlexBoxWrapper>
      </Container>
    </SectionWrapper>
  );
};
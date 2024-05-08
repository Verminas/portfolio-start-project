import React, {useState} from 'react';
import {SectionWrapper} from "../../../components/SectionWrapper";
import {SectionTitle} from "../../../components/SectionTitle/SectionTitle";
import {TabMenu} from "./TabMenu/TabMenu";
import {FlexBoxWrapper} from "../../../components/FlexBoxWrapper";
import {WorkItem} from "./WorkItem/WorkItem";
import {Container} from "../../../components/Container";
import {S} from "./Works_Styles";
import {TabProjectsItemsType, WorksInfoType} from "../../../index";

type WorksPropsType = {
  worksInfo: WorksInfoType,
}

export const Works: React.FC<WorksPropsType> = (props: WorksPropsType) => {
  const [currentFilterType, setCurrentFilterType] = useState("all");
  let filteredWorks = props.worksInfo.projects;

  if (currentFilterType === 'landing') {
    filteredWorks = props.worksInfo.projects.filter(work => work.projType === 'landing');
  }
  if (currentFilterType === 'react') {
    filteredWorks = props.worksInfo.projects.filter(work => work.projType === 'react');
  }
  if (currentFilterType === 'spa') {
    filteredWorks = props.worksInfo.projects.filter(work => work.projType === 'spa');
  }

  function changeFilterType(value: TabProjectsItemsType) {
    setCurrentFilterType(value)
  }

  const workItemsElements = filteredWorks.map((w, index) => {
    return (
      <WorkItem
        projImg={w.projImg}
        projTitle={w.projTitle}
        projText={w.projText}
        projType={w.projType}
        key={index}
      />
    )
  })

  return (
    <SectionWrapper id={'works'}>
      <Container>
        <FlexBoxWrapper direction={'column'} gap={'0'} align={'center'} wrap={'wrap'}>
          <SectionTitle>My Works</SectionTitle>
          <TabMenu tabItems={props.worksInfo.tabItems} changeFilterType={changeFilterType}
                   currentFilterType={currentFilterType}/>
          <S.FlexBoxWrapperMedia justify={'space-around'} wrap={'wrap'} align={'stretch'} gap={"30px"}>
            {workItemsElements}
          </S.FlexBoxWrapperMedia>
        </FlexBoxWrapper>
      </Container>
    </SectionWrapper>
  );
};
import React from 'react';
import {SectionWrapper} from "../../../components/SectionWrapper";
import {SectionTitle} from "../../../components/SectionTitle/SectionTitle";
import {Menu} from "../../../components/Menu/Menu";
import {FlexBoxWrapper} from "../../../components/FlexBoxWrapper";
import {WorkItem} from "../../../components/WorkItem/WorkItem";

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
      <SectionTitle>My Works</SectionTitle>
      <Menu itemsNames={props.worksInfo.itemsNames}/>
      <FlexBoxWrapper justify={'space-between'}>
        {workItemsElements}
      </FlexBoxWrapper>
    </SectionWrapper>
  );
};


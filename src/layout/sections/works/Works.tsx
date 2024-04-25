import React from 'react';
import {SectionWrapper} from "../../../components/SectionWrapper";
import {SectionTitle} from "../../../components/SectionTitle/SectionTitle";
import {Menu} from "../../../components/Menu/Menu";
import {FlexBoxWrapper} from "../../../components/FlexBoxWrapper";
import {WorkItem} from "../../../components/WorkItem/WorkItem";

const menuTabItems = ['All', 'Landing Page', 'React', 'Spa' ];

export const Works = () => {
  return (
    <SectionWrapper id={'works'}>
      <SectionTitle>My Works</SectionTitle>
      <Menu itemsNames={menuTabItems}/>
      <FlexBoxWrapper justify={'space-between'}>
        <WorkItem/>
        <WorkItem/>
      </FlexBoxWrapper>
    </SectionWrapper>
  );
};


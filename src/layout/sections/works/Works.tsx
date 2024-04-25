import React from 'react';
import {StyledSectionWrapper} from "../../../components/StyledSectionWrapper";
import {SectionTitle} from "../../../components/SectionTitle/SectionTitle";
import {Menu} from "../../../components/Menu/Menu";
import {StyledFlexBoxWrapper} from "../../../components/StyledFlexBoxWrapper";
import {WorkItem} from "../../../components/WorkItem/WorkItem";

const menuTabItems = ['All', 'Landing Page', 'React', 'Spa' ];

export const Works = () => {
  return (
    <StyledSectionWrapper>
      <SectionTitle>My Works</SectionTitle>
      <Menu itemsNames={menuTabItems}/>
      <StyledFlexBoxWrapper justify={'space-between'}>
        <WorkItem/>
        <WorkItem/>
      </StyledFlexBoxWrapper>
    </StyledSectionWrapper>
  );
};


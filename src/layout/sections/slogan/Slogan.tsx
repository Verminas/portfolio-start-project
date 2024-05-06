import React from 'react';
import {SectionWrapper} from "../../../components/SectionWrapper";
import {SectionTitle} from "../../../components/SectionTitle/SectionTitle";
import {Container} from "../../../components/Container";
import {FlexBoxWrapper} from "../../../components/FlexBoxWrapper";
import {Button} from "../../../components/Button/Button";

export const Slogan: React.FC = () => {
  return (
    <SectionWrapper id={'slogan'}>
      <Container>
        <FlexBoxWrapper direction={'column'} align={'center'} justify={'center'} gap={'0'}>
          <SectionTitle>I Am Available For Freelance </SectionTitle>
          <Button name={"hire me"}></Button>
        </FlexBoxWrapper>
      </Container>
    </SectionWrapper>
  );
};
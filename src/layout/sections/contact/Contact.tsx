import React from 'react';
import {SectionWrapper} from "../../../components/SectionWrapper";
import {SectionTitle} from "../../../components/SectionTitle/SectionTitle";
import {Form} from "../../../components/Form/Form";
import {Container} from "../../../components/Container";
import {FlexBoxWrapper} from "../../../components/FlexBoxWrapper";

export const Contact = () => {
  return (
    <SectionWrapper id={'contact'}>
      <Container>
        <FlexBoxWrapper direction={'column'} align={"center"} justify={'space-between'} gap={"40px"}>
          <SectionTitle>Contact</SectionTitle>
          <Form/>
        </FlexBoxWrapper>
      </Container>
    </SectionWrapper>
  );
};

import React from 'react';
import {SectionWrapper} from "../../../components/SectionWrapper";
import {SectionTitle} from "../../../components/SectionTitle/SectionTitle";
import {Form} from "../../../components/Form/Form";
import {Container} from "../../../components/Container";
import {S} from "./Contact_Styles";

export const Contact: React.FC = () => {
  return (
    <SectionWrapper id={'contact'}>
      <Container>
        <S.FlexBoxWrapperMedia direction={'column'} align={"center"} justify={'space-between'} gap={"0"}>
          <SectionTitle>Contact</SectionTitle>
          <Form/>
        </S.FlexBoxWrapperMedia>
      </Container>
    </SectionWrapper>
  );
};
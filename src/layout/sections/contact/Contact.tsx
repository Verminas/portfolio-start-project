import React from 'react';
import {SectionWrapper} from "../../../components/SectionWrapper";
import {SectionTitle} from "../../../components/SectionTitle/SectionTitle";
import {Form} from "../../../components/Form/Form";

export const Contact = () => {
  return (
    <SectionWrapper id={'contact'}>
      <SectionTitle>Contact</SectionTitle>
      <Form/>
    </SectionWrapper>
  );
};

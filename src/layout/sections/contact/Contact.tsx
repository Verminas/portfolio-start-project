import React from 'react';
import {SectionWrapper} from "../../../components/SectionWrapper";
import {SectionTitle} from "../../../components/SectionTitle/SectionTitle";
import {Form} from "../../../components/Form/Form";
import {Container} from "../../../components/Container";
import {FlexBoxWrapper} from "../../../components/FlexBoxWrapper";
import styled from "styled-components";
import {theme} from "../../../styles/Theme";

export const Contact = () => {
  return (
    <SectionWrapper id={'contact'}>
      <Container>
        <FlexBoxWrapperMedia direction={'column'} align={"center"} justify={'space-between'} gap={"0"}>
          <SectionTitle>Contact</SectionTitle>
          <Form/>
        </FlexBoxWrapperMedia>
      </Container>
    </SectionWrapper>
  );
};

const FlexBoxWrapperMedia = styled(FlexBoxWrapper)`
    @media ${theme.media.desktop} {
        h2{
            margin-top: -15px;
        }
        form {
            margin-top: 8px;
            margin-left: 10px;
        }
    }

    @media ${theme.media.mobile} {
        gap: 28px;
    }
`
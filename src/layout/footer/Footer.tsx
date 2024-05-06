import React from 'react';
import {SocialIconLinks} from "../../components/SocialIconLinks/SocialIconLinks";
import {socialIconsId} from "../../index";
import {Container} from "../../components/Container";
import {FlexBoxWrapper} from "../../components/FlexBoxWrapper";
import {S} from "./Footer_Styles";

export const Footer: React.FC = () => {
  return (
    <S.Footer>
      <Container>
        <FlexBoxWrapper direction="column" gap="25px" align="center" justify="center">
          <S.Title>Svetlana</S.Title>
          <SocialIconLinks socialIconsId={socialIconsId}/>
          <S.Copyright>&copy; 2023 Svetlana Dyablo, All Rights Reserved.</S.Copyright>
        </FlexBoxWrapper>
      </Container>
    </S.Footer>
  );
};
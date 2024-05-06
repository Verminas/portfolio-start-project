import styled from "styled-components";
import {FlexBoxWrapper} from "../../../components/FlexBoxWrapper";
import {theme} from "../../../styles/Theme";

const FlexBoxWrapperMedia = styled(FlexBoxWrapper)`
    @media ${theme.media.mobile} {
      gap: 60px;
      
      p {
        margin: 13px 0 25px;
      }
    }
`

export const S = {
  FlexBoxWrapperMedia,
}
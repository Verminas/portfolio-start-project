import styled from "styled-components";
import {FlexBoxWrapper} from "../../../components/FlexBoxWrapper";
import {theme} from "../../../styles/Theme";

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

export const S = {
  FlexBoxWrapperMedia,
}
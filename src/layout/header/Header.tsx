import React from 'react';
import {Logo} from "../../components/Logo/Logo";
import {SocialIconLinks} from "../../components/SocialIconLinks/SocialIconLinks";
import {FlexBoxWrapper} from "../../components/FlexBoxWrapper";
import {menuNavigationItems, socialIconsId} from "../../index";
import {Container} from "../../components/Container";
import {DesktopMenu} from "./HeaderMenu/DesktopMenu/DesktopMenu";
import {MobileMenu} from "./HeaderMenu/MobileMenu/MobileMenu";
import {S} from "./Header_Styles";

export const Header: React.FC = () => {
  const [width, setWidth] = React.useState(window.innerWidth);
  const breakpoint = 768;

  React.useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleWindowResize);

    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  return (
    <S.Header>
      <Container>
        <FlexBoxWrapper justify="space-between" align="center">
          <Logo/>
          <FlexBoxWrapper align={'center'} justify={"flex-end"}>

            {width > breakpoint ?
              <DesktopMenu menuItems={menuNavigationItems}/>
              : <MobileMenu menuItems={menuNavigationItems}/>
            }

            <SocialIconLinks socialIconsId={socialIconsId} isHeader={true}/>
          </FlexBoxWrapper>
        </FlexBoxWrapper>
      </Container>
    </S.Header>
  );
};
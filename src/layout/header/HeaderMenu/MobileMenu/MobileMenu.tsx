import React from "react";
import {Menu} from "../Menu/Menu";
import {S} from "../HeaderMenu_Styles";

type MenuPropsType = {
  menuItems: Array<string>,
  itemsId?: Array<string>,
}


export const MobileMenu: React.FC<MenuPropsType> = (props: MenuPropsType) => {
  return (
    <nav>
      <S.BurgerButton isOpen={false} aria-label={"menu button"} aria-haspopup={true}>
        <span></span>
      </S.BurgerButton>
      <S.MobileMenuPopup isOpen={false}>
        <Menu menuItems={props.menuItems}/>
      </S.MobileMenuPopup>
    </nav>
  )
}
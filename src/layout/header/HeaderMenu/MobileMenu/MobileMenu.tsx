import React, {useState} from "react";
import {Menu} from "../Menu/Menu";
import {S} from "../HeaderMenu_Styles";

type MenuPropsType = {
  menuItems: Array<string>,
  itemsId?: Array<string>,
}


export const MobileMenu: React.FC<MenuPropsType> = (props: MenuPropsType) => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const onBurgerBtnClick = () => {
    setMenuIsOpen(!menuIsOpen)
  }
  return (
    <nav>
      <S.BurgerButton isOpen={menuIsOpen} aria-label={"menu button"} aria-haspopup={true} onClick={onBurgerBtnClick}>
        <span></span>
      </S.BurgerButton>
      <S.MobileMenuPopup isOpen={menuIsOpen} onClick={() => setMenuIsOpen(false)}>
        <Menu menuItems={props.menuItems} setMenuIsOpen={setMenuIsOpen} menuIsOpen={menuIsOpen}/>
      </S.MobileMenuPopup>
    </nav>
  )
}
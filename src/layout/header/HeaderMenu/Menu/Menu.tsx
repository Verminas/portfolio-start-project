import React from 'react';
import {S} from "../HeaderMenu_Styles";

type MenuPropsType = {
  menuItems: Array<string>,
  itemsId?: Array<string>,
  setMenuIsOpen?: any | undefined,
  menuIsOpen?: boolean | undefined,
}

export const Menu: React.FC<MenuPropsType> = (props: MenuPropsType) => {
  const menuItemsElements = props.menuItems.map((menuItem, index) => {
    return (
      <S.MenuItem role={"menuitem"} key={index}>
        <S.NavLink to={menuItem.toLowerCase()}
                   key={index}
                   onClick={() => props.menuIsOpen && props.setMenuIsOpen(false)}
                   smooth={true}
                   // duration={50}
                   activeClass="active"
                   spy={true}
                   offset={-50}
                   // delay={50}
        >{menuItem}
          <S.Mask aria-hidden={true}>
            <span>{menuItem}</span>
          </S.Mask>
          <S.Mask aria-hidden={true}>
            <span>{menuItem}</span>
          </S.Mask>

        </S.NavLink>
      </S.MenuItem>
    )
  })
  return (
    <S.MenuList role={'menu'}>
      {menuItemsElements}
    </S.MenuList>
  );
};
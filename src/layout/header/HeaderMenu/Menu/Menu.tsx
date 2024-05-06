import React from 'react';
import {S} from "../HeaderMenu_Styles";

type MenuPropsType = {
  menuItems: Array<string>,
  itemsId?: Array<string>,
}

export const Menu: React.FC<MenuPropsType> = (props: MenuPropsType) => {
  const menuItemsElements = props.menuItems.map((menuItem, index) => {
    return (
      <S.MenuItem role={"menuitem"} key={index}>
        <S.Link href={`#${menuItem.toLowerCase()}`}>{menuItem}
          <S.Mask aria-hidden={true}>
            <span>{menuItem}</span>
          </S.Mask>
          <S.Mask aria-hidden={true}>
            <span>{menuItem}</span>
          </S.Mask>

        </S.Link>
      </S.MenuItem>
    )
  })
  return (
    <S.MenuList role={'menu'}>
      {menuItemsElements}
    </S.MenuList>
  );
};
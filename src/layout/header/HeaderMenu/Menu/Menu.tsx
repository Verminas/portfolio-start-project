import React from 'react';
import {S} from "../HeaderMenu_Styles";

type MenuPropsType = {
  menuItems: Array<string>,
  itemsId?: Array<string>,
}

export const Menu: React.FC<MenuPropsType> = (props: MenuPropsType) => {
  const menuItemsElements = props.menuItems.map((menuItem) => {
    return (
      <S.MenuItem>
        <S.Link href={`#${menuItem.toLowerCase()}`}>{menuItem}
          <S.Mask>
            <span>{menuItem}</span>
          </S.Mask>
          <S.Mask>
            <span>{menuItem}</span>
          </S.Mask>

        </S.Link>
      </S.MenuItem>
    )
  })
  return (
    <S.MenuList>
      {menuItemsElements}
    </S.MenuList>
  );
};
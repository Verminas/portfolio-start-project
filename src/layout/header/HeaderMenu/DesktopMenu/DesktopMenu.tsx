import React from "react";
import {Menu} from "../Menu/Menu";

type MenuPropsType = {
  menuItems: Array<string>,
  itemsId?: Array<string>,
}

export const DesktopMenu: React.FC<MenuPropsType> = (props: MenuPropsType) => {
  return (
    <nav>
      <Menu menuItems={props.menuItems}/>
    </nav>
  )
}
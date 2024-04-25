import React from "react";
import styled from "styled-components";

type MenuPropsType = {
  itemsNames: Array<string>,
  itemsId?: Array<string>,
}


export const Menu = (props: MenuPropsType) => {
  const menuItemsElements = props.itemsNames.map((menuItem) => {
    return (
      <li>
        <a href={`#${menuItem.toLowerCase()}`}>{menuItem}</a>
      </li>
    )
  })
  return (
    <nav>
      <StyledMenuList>
        {menuItemsElements}
      </StyledMenuList>
    </nav>
  )
}

const StyledMenuList = styled.ul`
    display: flex;
    gap: 10px;
`
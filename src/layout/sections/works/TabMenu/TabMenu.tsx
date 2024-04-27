import React from "react";
import styled from "styled-components";
import {theme} from "../../../../styles/Theme";
import {Link} from "../../../../components/Link/Link";

type TabMenuPropsType = {
  itemsNames: Array<string>,
  itemsId?: Array<string>,
}


export const TabMenu = (props: TabMenuPropsType) => {
  const menuItemsElements = props.itemsNames.map((menuItem) => {
    return (
      <li>
        <Link href={`#${menuItem.toLowerCase()}`}>{menuItem}</Link>
      </li>
    )
  })
  return (
      <StyledMenuList>
        {menuItemsElements}
      </StyledMenuList>
  )
}

const StyledMenuList = styled.ul`
    display: flex;
    gap: 20px;
    margin-bottom: 40px;
`
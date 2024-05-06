import React from "react";
import {Link} from "../../../../components/Link/Link";
import {S} from "../Works_Styles";

type TabMenuPropsType = {
  tabItems: Array<string>,
  itemsId?: Array<string>,
}


export const TabMenu = (props: TabMenuPropsType) => {
  const tabMenuItemsElements = props.tabItems.map((tabItem, index) => {
    return (
      <li role={"tab"} key={index}>
        <Link href={`#${tabItem.toLowerCase()}`}>{tabItem}</Link>
      </li>
    )
  })
  return (
      <S.TabMenuList role={"tablist"}>
        {tabMenuItemsElements}
      </S.TabMenuList>
  )
}
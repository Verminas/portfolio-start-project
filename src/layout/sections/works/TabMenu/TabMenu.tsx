import React from "react";
import {Link} from "../../../../components/Link/Link";
import {S} from "../Works_Styles";
import {TabProjectsItemsType} from "../../../../index";

type TabMenuPropsType = {
  tabItems: {
    title: string,
    type: TabProjectsItemsType,
  }[],
  changeFilterType: (value: TabProjectsItemsType) => void,
  currentFilterType: string,
}


export const TabMenu = (props: TabMenuPropsType) => {
  const tabMenuItemsElements = props.tabItems.map((tabItem, index) => {
    return (
      <li role={"tab"} key={index}>
        <Link
          as={'button'}
          onClick={() => {
            props.changeFilterType(tabItem.type)
          }}
          active={props.currentFilterType === tabItem.type}
        >
          {tabItem.title}
        </Link>
      </li>
    )
  })
  return (
    <S.TabMenuList role={"tablist"}>
      {tabMenuItemsElements}
    </S.TabMenuList>
  )
}
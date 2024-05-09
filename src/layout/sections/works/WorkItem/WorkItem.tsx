import {FlexBoxWrapper} from "../../../../components/FlexBoxWrapper";
import React from "react";
import {Link} from "../../../../components/Link/Link";
import {Button} from "../../../../components/Button/Button";
import {S} from "../Works_Styles";
import {TabProjectsItemsType} from "../../../../index";

type WorkItemPropsType = {
  projImg: string,
  projTitle: string,
  projText: string,
  projType: TabProjectsItemsType,
  key: number,
}

export const WorkItem: React.FC<WorkItemPropsType> = (props: WorkItemPropsType) => {
  return (
    <S.WrapperWorkItem
      key={props.key}

      // properties for motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      layout
      transition={{ duration: 0.9 }}
    >
      <S.WrapperImage>
        <img src={props.projImg} alt=""/>
        <Button name={'view project'}></Button>
      </S.WrapperImage>
      <S.WrapperInfo>
        <S.Title>{props.projTitle}</S.Title>
        <S.Text>{props.projText}</S.Text>
        <FlexBoxWrapper gap={'20px'}>
          <Link active href="#">Demo</Link>
          <Link href="#">Code</Link>
        </FlexBoxWrapper>
      </S.WrapperInfo>
    </S.WrapperWorkItem>
  )
}
import React from 'react';
import iconSprites from "../../assets/images/sprites.svg";

type IconPropsType = {
  iconId: string,
  width?: string | "50",
  height?: string | "50",
  viewBox?: string | "0 0 50 50",
}

export const Icon = (props: IconPropsType) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" >
      <use xlinkHref={`${iconSprites}#${props.iconId}`} width={props.width} height={props.height} viewBox={props.viewBox}/>
    </svg>
  );
};

import React, {useEffect} from 'react';
import styled from "styled-components";
import {Icon} from "../Icon/Icon";
import {theme} from "../../styles/Theme";

export const GoTopBtn = () => {

  const [showBtn, setShowBtn] = React.useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if(window.scrollY > 200) {
        setShowBtn(true);
      } else {
        setShowBtn(false);
      }
    })
  }, []);

  return (
    <>
      {showBtn && (
        <StyledBtn href={'#'}>
          <Icon iconId={"arrowTop"} width={'16'} height={'16'} viewBox={'0 0 16 16'}/>
        </StyledBtn>
      )}
    </>
  );
};

const StyledBtn = styled.a`
    width: 30px;
    height: 30px;
    background-color: rgba(0, 0, 0, 0.3);
    padding: 7px;
    transform: translateY(0);
    transition: ${theme.animations.transitions.average};
    border-radius: 2px;

    position: fixed;
    right: 30px;
    bottom: 30px;

    svg {
        fill: ${theme.colors.font};
        width: 16px;
        height: 16px;
    }

    &:hover {
        transform: translateY(-5px);

        & svg {
            fill: ${theme.colors.accent};
        }
    }
`
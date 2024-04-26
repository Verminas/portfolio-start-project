import React from 'react';
import styled from "styled-components";
import {Button} from "../Button/Button";

export const Form = () => {
  return (
    <StyledForm>
      <Field placeholder={'Name'}/>
      <Field placeholder={'Name'}/>
      <Field as={'textarea'} placeholder={'Type something...'}/>
      <Button name={'send message'} type={'submit'}></Button>
    </StyledForm>
  );
};

const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;
    max-width: 500px;
    width: 100%;
`
const Field = styled.input`
    width: 100%;
    background: #252527;
    
`
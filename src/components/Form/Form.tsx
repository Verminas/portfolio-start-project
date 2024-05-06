import React from 'react';
import styled from "styled-components";
import {Button} from "../Button/Button";
import {theme} from "../../styles/Theme";

export const Form: React.FC = () => {
  return (
    <StyledForm action={"#"} method={"post"}>
      <Field placeholder={'Name'} name={'name'} autoComplete={"on"}/>
      <Field type={"email"} placeholder={'E-mail'} required={true} name={'email'} autoComplete={"on"}/>
      <Field as={'textarea'} placeholder={'Type something...'} name={'type'} autoComplete={"on"}/>
      <Button name={'send message'} type={'submit'}></Button>
    </StyledForm>
  );
};

const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;
    width: min(100%, 540px);
    
    
    textarea{
        height: 155px;
        resize: none;
    }
`
const Field = styled.input`
    width: 100%;
    background-color: ${theme.colors.secondaryBg};
    height: 32px;
    padding: 7px 15px;
    border: 1px solid ${theme.colors.border};
    font-family: "Poppins", sans-serif;
    font-size: 12px;
    font-weight: 400;
    letter-spacing: 0.05em;
    text-align: left;
    
    color: ${theme.colors.font};
    
    &:focus-visible{
        outline: 1px solid ${theme.colors.accent};
    }
    
    &::placeholder{
        color: ${theme.colors.placeholder};
        text-transform: capitalize;
    }

    &:-webkit-autofill{
        -webkit-box-shadow:0 0 0 1000px ${theme.colors.secondaryBg} inset; 
        -webkit-text-fill-color: ${theme.colors.font};
        border: 1px solid ${theme.colors.border};
    }
`
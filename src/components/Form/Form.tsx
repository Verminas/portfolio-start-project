import React, {ElementRef, useRef, useState} from 'react';
import styled, {css} from "styled-components";
import {Button} from "../Button/Button";
import {theme} from "../../styles/Theme";
import emailjs from '@emailjs/browser';
import {contactsInfo} from "../../index";

export const Form: React.FC = () => {
  const form = useRef<ElementRef<'form'>>(null);
  const [isSend, setIsSend] = useState(false);

  const sendEmail = (e: any) => {
    e.preventDefault();

    if (!form.current) return;

    emailjs
      .sendForm(contactsInfo.emailJs.serviceId, contactsInfo.emailJs.templateId, form.current, {
        publicKey: contactsInfo.emailJs.pubKey,
      })
      .then(
        () => {
          console.log('SUCCESS!');
          // functions for check mark in wrapperBtn
          setIsSend(!isSend);
          setTimeout(() => setIsSend(false), 2000);

        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
    e.target.reset();
  };

  return (
    <StyledForm ref={form} method={"post"} onSubmit={sendEmail}>
      <Field placeholder={'Name'} name={'user_name'} required autoComplete={"on"}/>
      <Field type={"email"} placeholder={'E-mail'} required name={'user_email'} autoComplete={"on"}/>
      <Field placeholder={'Subject'} name={'subject'} required/>
      <Field as={'textarea'} placeholder={'Type something...'} required name={'message'}/>
      <StyledBtnWrapper isSend={isSend}>
        <Button name={'send message'} type={'submit'}></Button>
      </StyledBtnWrapper>
    </StyledForm>
  );
};

const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;
    width: min(100%, 540px);


    textarea {
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

    &:focus-visible {
        outline: 1px solid ${theme.colors.accent};
    }

    &::placeholder {
        color: ${theme.colors.placeholder};
        text-transform: capitalize;
    }

    &:-webkit-autofill {
        -webkit-box-shadow: 0 0 0 1000px ${theme.colors.secondaryBg} inset;
        -webkit-text-fill-color: ${theme.colors.font};
        border: 1px solid ${theme.colors.border};
    }
`
const StyledBtnWrapper = styled.div<{ isSend: boolean }>`
    position: relative;

    &::before {
        content: "";
        display: inline-block;
        position: absolute;
        width: 8px;
        height: 2px;
        background-color: ${theme.colors.font};
        bottom: 13px;
        right: 13px;
        transform: rotate(45deg);
        border-radius: 5px;
        z-index: 999;
        opacity: 0;
    }

    &::after {
        content: "";
        display: inline-block;
        position: absolute;
        width: 17px;
        height: 2px;
        background-color: ${theme.colors.font};
        bottom: 17px;
        right: 2px;
        transform: rotate(-60deg);
        border-radius: 5px;
        z-index: 999;
        opacity: 0;
        transition: ${theme.animations.transitions.average};
    }

    ${props => props.isSend && css`
        &::before, &::after{
            opacity: 1;
        }
    `};
`
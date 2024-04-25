import styled from "styled-components";

type ButtonPropsType = {
  name: string,
  type?: string,
}

export const Button = (props: ButtonPropsType) => {
  return (
    <StyledButton>{props.name}</StyledButton>
  )
}

const StyledButton = styled.button`
    width: fit-content;
    text-transform: uppercase;
    border: none;
    background-color: inherit;
    padding: 5px;
    
    &::after{
        align-self: center;
        content: "";
        display: inline-block;
        width: 75%;
        height: 10px;
        background-color: #7572d5;
    }
`
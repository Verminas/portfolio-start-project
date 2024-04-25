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
    padding: 5px;
`
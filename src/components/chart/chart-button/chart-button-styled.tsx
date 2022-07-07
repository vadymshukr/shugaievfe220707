import styled from "styled-components";

export const Button = styled.button`
  padding: 8px 16px;
  outline: none;
  border: none;
  border-radius: 8px;
  font-family: 'Roboto', sans-serif;
  margin-top: 40px;
  cursor: pointer;
  &:disabled {
    cursor: crosshair;
    color: gray;
  }
`

export const Title = styled.h1`
  font-size: 20px;
  text-transform: uppercase;
  margin-bottom: 40px;
`
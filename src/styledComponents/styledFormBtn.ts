import { styled } from "styled-components";

export const StyledFormBtn = styled.button`
  background: #33b864;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  border-radius: 4px;
  color: #fff;
  width: 200px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border: none;
  font-family: sans-serif;
  font-weight: 700;
  margin-top: 32px;
  transition-property: background-color;
  transition-duration: 250ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    background-color: #119b0c;
  }
`;

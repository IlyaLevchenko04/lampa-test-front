import { styled } from "styled-components";

export const StyledCartBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  width: 32px;
  height: 32px;
  text-align: center;
  border-radius: 0;
  background-color: transparent;
  transition-property: background-color, color;
  transition-duration: 250ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    background-color: rgba(0, 0, 0, 0.3);
    color: #fff;
  }
`;

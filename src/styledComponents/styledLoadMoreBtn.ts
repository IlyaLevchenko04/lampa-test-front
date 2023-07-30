import { styled } from "styled-components";

export const StyledLoadMoreBtn = styled.button`
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
  transition-property: background-color;
  transition-duration: 250ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  margin-left: calc(50% - 120px);
  margin-top: 10px;
  margin-bottom: 10px;

  &:hover {
    background-color: #119b0c;
  }
`;

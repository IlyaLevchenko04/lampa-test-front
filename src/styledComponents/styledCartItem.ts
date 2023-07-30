import { styled } from "styled-components";

export const StyledCartItem = styled.li`
  display: flex;
  padding-right: 50px;
  padding-left: 10px;

  &:nth-child(odd) {
    background-color: rgba(0, 0, 0, 0.1);
  }
`;

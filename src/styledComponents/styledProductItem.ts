import { styled } from "styled-components";

export const StyledProductItem = styled.li`
  width: calc((100% - 95px) / 3);
  padding: 5px;
  transition-property: box-shadow border;
  transition-duration: 250ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  text-align: center;
  cursor: pointer;

  &:hover {
    box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14),
      0px 2px 1px rgba(0, 0, 0, 0.2);
  }
`;

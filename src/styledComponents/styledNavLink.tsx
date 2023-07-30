import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: #5a5a5a;
  font-weight: 700;
  font-size: 17px;
  line-height: 1.33;
  letter-spacing: 0.02em;
  font-family: sans-serif;
  transition-property: color;
  transition-duration: 250ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    color: #33b864;
  }

  &.active {
    color: #33b864;
  }
`;

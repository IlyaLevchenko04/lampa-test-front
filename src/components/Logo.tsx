import React from "react";
import sprite from "../images/logo.svg";
import { NavLink } from "react-router-dom";

export const Logo: React.FC = () => {
  return (
    <span>
      <NavLink to={"/cart"} style={{ textDecoration: "none" }}>
        <svg width={"36px"} height={"36px"}>
          <use href={`${sprite}#logo1`}></use>
        </svg>
      </NavLink>
    </span>
  );
};

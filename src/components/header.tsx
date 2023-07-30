import React, { useEffect } from "react";
import {
  StyledNavContainer,
  StyledNavList,
  StyledNavLink,
  StyledNumCart,
} from "../styledComponents/index";
import { Logo } from "./Logo";
import { Filter } from "./Filter";
import { useAppDispatch, useAppSelector } from "../redux/hooks/hooks";
import { useLocation } from "react-router-dom";
import { CartLogo } from "./cartLogo";
import { logout, refreshUser } from "../redux/authSlice/authOperations";

export const Header: React.FC = () => {
  const location = useLocation();
  const dispatch = useAppDispatch();
  const totalPrice = useAppSelector((state) => state.cart.totalPrice);
  const isLoggedIn = useAppSelector((state) => state.auth.isLoggedIn);
  const { name } = useAppSelector((state) => state.auth.user);
  const refreshToken = useAppSelector(
    (state) => state.auth.tokens.refreshToken
  );

  useEffect(() => {
    dispatch(refreshUser(refreshToken));
    // eslint-disable-next-line
  }, [dispatch]);

  const onLogout = () => {
    dispatch(logout());
  };

  return (
    <StyledNavContainer>
      <Logo />
      {isLoggedIn ? (
        <>
          <p>Hello, {name}!</p>
          <button type="button" onClick={onLogout}>
            Logout
          </button>
        </>
      ) : (
        <>
          <StyledNavLink to={"/register"}>Register</StyledNavLink>
          <StyledNavLink to={"/login"}>Login</StyledNavLink>
        </>
      )}
      <StyledNavList>
        <li>{location.pathname === "/products" && <Filter />}</li>
        <li>
          <StyledNavLink to={"/products"}>Products</StyledNavLink>
        </li>
        <li>
          <StyledNavLink to={"/cart"}>
            <CartLogo />
          </StyledNavLink>
          {totalPrice === 0 ||
            (location.pathname !== "/cart" && (
              <StyledNumCart>{totalPrice.toLocaleString("en")}</StyledNumCart>
            ))}
        </li>
      </StyledNavList>
    </StyledNavContainer>
  );
};

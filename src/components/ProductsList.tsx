import React from "react";
import { addToCart, Item } from "../redux/cartSlice/cartSlice";
import { useAppDispatch, useAppSelector } from "../redux/hooks/hooks";
import {
  StyledBuyBtn,
  StyledDescription,
  StyledLoadMoreBtn,
  StyledProductItem,
  StyledProductsList,
} from "../styledComponents";

export const ProductsList: React.FC = () => {
  const dispatch = useAppDispatch();
  const products = useAppSelector((state) => state.products.items);

  const onClickBuy: (evt: React.MouseEvent<HTMLButtonElement>) => void = (
    evt
  ) => {
    const productId: string = evt.currentTarget.closest("li")!.id;
    const product = products.find(({ _id }) => productId === _id);

    dispatch(addToCart(product as Item));

    const quantities: any = localStorage.getItem("cartQuantities");

    if (!quantities) {
      localStorage.setItem(
        "cartQuantities",
        JSON.stringify({ [productId]: 1 })
      );
    }

    const parsedQuantities = JSON.parse(quantities);
    const updatedQuantities = { ...parsedQuantities, [productId]: 1 };
    localStorage.setItem("cartQuantities", JSON.stringify(updatedQuantities));
  };

  return (
    <>
      <StyledProductsList>
        {products.map(
          ({ _id, title, description, mainPhoto, currency, price }) => {
            return (
              <StyledProductItem key={_id} id={_id}>
                <img
                  src={mainPhoto}
                  width="300px"
                  height="300px"
                  alt="Product"
                />
                <h2>{title}</h2>
                <StyledDescription>
                  {price} {currency}
                </StyledDescription>
                <StyledDescription>{description}</StyledDescription>
                <StyledBuyBtn type="button" onClick={onClickBuy}>
                  Buy
                </StyledBuyBtn>
              </StyledProductItem>
            );
          }
        )}
      </StyledProductsList>
      <StyledLoadMoreBtn>Load more</StyledLoadMoreBtn>
    </>
  );
};

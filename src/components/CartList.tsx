import React, { useEffect, useState } from "react";
import { deleteFromCart, onPriceChange } from "../redux/cartSlice/cartSlice";
import { useAppDispatch, useAppSelector } from "../redux/hooks/hooks";
import { ToastContainer } from "react-toastify";
import { Item } from "../redux/productsSlice/productsSlice";
import {
  StyledCardList,
  StyledCartItem,
  StyledCartBtn,
  StyledCartBtnsWrapper,
  StyledCartDescWrapper,
  WrapperForm,
} from "../styledComponents";
import { CartForm } from "./CartForm";

export const CartList: React.FC = () => {
  const cartItems: Item[] = useAppSelector((state) => state.cart.items);
  const [quantities, setQuantities] = useState<{ [id: string]: number }>({});
  const dispatch = useAppDispatch();

  useEffect(() => {
    const storedQuantities = localStorage.getItem("cartQuantities");
    if (storedQuantities) {
      setQuantities(JSON.parse(storedQuantities));
    } else {
      const initialQuantities: { [id: string]: number } = {};
      for (const item of cartItems) {
        initialQuantities[item._id] = 1;
      }
      setQuantities(initialQuantities);
    }
  }, [cartItems]);

  useEffect(() => {
    localStorage.setItem("cartQuantities", JSON.stringify(quantities));
  }, [quantities]);

  const handlePlus = (itemId: string) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [itemId]: (prevQuantities[itemId] || 0) + 1,
    }));
    const price = cartItems.find(({ _id }) => _id === itemId);

    dispatch(onPriceChange({ type: "plus", price: price?.price as number }));
  };

  const handleMinus = (itemId: string) => {
    setQuantities((prevQuantities) => {
      const updatedQuantities = {
        ...prevQuantities,
        [itemId]: Math.max((prevQuantities[itemId] || 0) - 1, 0),
      };

      const price = cartItems.find(({ _id }) => _id === itemId);

      if (updatedQuantities[itemId] === 0) {
        dispatch(deleteFromCart(itemId));
        delete updatedQuantities[itemId];
        return updatedQuantities;
      }

      dispatch(onPriceChange({ type: "minus", price: price?.price as number }));
      return updatedQuantities;
    });
  };

  const getTotalPrice = (): number => {
    let totalPrice: number = 0;
    for (const item of cartItems) {
      const quantity = quantities[item._id] || 0;
      totalPrice += quantity * item.price;
    }
    return totalPrice;
  };

  let currencyGlobal: string = "UAH";

  return (
    <div>
      <ToastContainer />
      <WrapperForm>
        <StyledCardList>
          {cartItems.map(
            ({ _id, title, mainPhoto, price, currency, description }) => {
              const quantity = quantities[_id] || 0;

              currencyGlobal = currency;

              return (
                <StyledCartItem key={_id} id={_id}>
                  <img
                    src={mainPhoto}
                    width="200px"
                    height="200px"
                    alt="Cart product"
                  />

                  <StyledCartDescWrapper>
                    <h2 style={{ margin: 0, padding: 0, textAlign: "center" }}>
                      {title}
                    </h2>
                    <p style={{ margin: 0, padding: 0, width: "50vw" }}>
                      {description}
                    </p>
                    <span>{`${price.toLocaleString("en")} ${currency}`}</span>
                  </StyledCartDescWrapper>
                  <StyledCartBtnsWrapper>
                    <StyledCartBtn
                      type="button"
                      onClick={() => handleMinus(_id)}
                    >
                      -
                    </StyledCartBtn>
                    <span
                      style={{
                        fontFamily: "sans-serif",
                        fontWeight: 700,
                      }}
                    >
                      {quantity}
                    </span>
                    <StyledCartBtn
                      type="button"
                      onClick={() => handlePlus(_id)}
                    >
                      +
                    </StyledCartBtn>
                  </StyledCartBtnsWrapper>
                </StyledCartItem>
              );
            }
          )}
        </StyledCardList>
        {cartItems.length > 0 && <CartForm />}
      </WrapperForm>
      {cartItems.length > 0 && (
        <span
          style={{
            fontFamily: "sans-serif",
            marginTop: "16px",
            display: "block",
            marginLeft: "20px",
            fontWeight: "700",
          }}
        >
          Total: {`${getTotalPrice().toLocaleString("en")} ${currencyGlobal}`}
        </span>
      )}

      {cartItems.length === 0 && (
        <h1
          style={{
            fontFamily: "sans-serif",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
          }}
        >
          There is nothing in your cart
        </h1>
      )}
    </div>
  );
};

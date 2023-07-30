import React from "react";
import {
  StyledForm,
  StyledLabel,
  StyledInput,
  StyledFormBtn,
} from "../styledComponents";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useForm, FieldValues } from "react-hook-form";
import { useAppDispatch, useAppSelector } from "../redux/hooks/hooks";
import { onFormSubmit } from "../redux/cartSlice/cartSlice";
import { Item } from "../redux/productsSlice/productsSlice";
import { formSchema } from "../schemas/formSchema/formSchema";

export const CartForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const dispatch = useAppDispatch();
  const cartItems = useAppSelector((state) => state.cart.items);

  const handleFormSubmit: (data: FieldValues, items: Item[] | Item) => void = (
    data,
    items
  ) => {
    const isDataValid = formSchema.validate(data);
    if (!isDataValid) {
      reset();
      return toast("not all required fields has a value");
    }
    const orders = localStorage.getItem("orders");
    const cartQuantities: any = localStorage.getItem("cartQuantities");

    const parsedQuantities = JSON.parse(cartQuantities);

    if (!orders) {
      localStorage.setItem(
        "orders",
        JSON.stringify([{ ...data, items, quantity: parsedQuantities }])
      );
      localStorage.setItem("cartQuantities", JSON.stringify({}));
      dispatch(onFormSubmit());
      reset();
      return toast("Your order is confirmed");
    }

    const parsedOrders = JSON.parse(orders);

    const newOrder = [{ ...data, items: items, quantity: parsedQuantities }];

    const updatedOrders = [...parsedOrders, ...newOrder];

    localStorage.setItem("orders", JSON.stringify(updatedOrders) as any);

    localStorage.setItem("cartQuantities", JSON.stringify({}));

    dispatch(onFormSubmit());

    reset();
    return toast("Your order is confirmed");
  };

  return (
    <StyledForm
      onSubmit={handleSubmit((data) => handleFormSubmit(data, cartItems))}
    >
      <StyledLabel>
        Name:
        <StyledInput
          {...register("name", {
            required: "This field is required",
          })}
          type={"text"}
        />
        <p style={{ padding: 0, margin: 0 }}>
          {errors.name?.message as string}
        </p>
      </StyledLabel>
      <StyledLabel>
        Surname:
        <StyledInput
          {...register("surname", {
            required: "This field is required",
          })}
          type={"text"}
        />
        <p style={{ padding: 0, margin: 0 }}>
          {errors.surname?.message as string}
        </p>
      </StyledLabel>
      <StyledLabel>
        Address:
        <StyledInput
          {...register("address", {
            required: "This field is required",
          })}
          type={"text"}
        />
        <p style={{ padding: 0, margin: 0 }}>
          {errors.address?.message as string}
        </p>
      </StyledLabel>
      <StyledLabel>
        Phone:
        <StyledInput
          {...register("phone", {
            required: "This field is required",
          })}
          type={"text"}
        />
        <p style={{ padding: 0, margin: 0 }}>
          {errors.phone?.message as string}
        </p>
      </StyledLabel>
      <StyledFormBtn type="submit">Submit</StyledFormBtn>
    </StyledForm>
  );
};

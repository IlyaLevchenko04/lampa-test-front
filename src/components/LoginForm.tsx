import React from "react";
import { useForm, FieldValues } from "react-hook-form";
import { login } from "../redux/authSlice/authOperations";
import { useAppDispatch } from "../redux/hooks/hooks";
import { StyledBuyBtn, StyledInput, StyledLabel } from "../styledComponents";

export const LoginForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const dispatch = useAppDispatch();

  const loginSubmit: (data: FieldValues) => void = (data) => {
    dispatch(login(data));
    reset();
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "40vw",
        flexDirection: "column",
      }}
    >
      <h2>Login form</h2>
      <form
        style={{
          width: "500px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}
        onSubmit={handleSubmit((data) => loginSubmit(data))}
      >
        <StyledLabel style={{ gap: "15px", marginBottom: "15px" }}>
          Email:
          <StyledInput
            type={"text"}
            {...register("email", {
              required: "This field is required",
            })}
          />
          <p style={{ padding: 0, margin: 0 }}>
            {errors.email?.message as string}
          </p>
        </StyledLabel>

        <StyledLabel style={{ gap: "15px" }}>
          Password:
          <StyledInput
            type={"password"}
            {...register("password", {
              required: "This field is required",
            })}
          />
          <p style={{ padding: 0, margin: 0 }}>
            {errors.password?.message as string}
          </p>
        </StyledLabel>

        <StyledBuyBtn type="submit" style={{ margin: 0 }}>
          Login
        </StyledBuyBtn>
      </form>
    </div>
  );
};

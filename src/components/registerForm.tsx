import React from "react";
import { useForm, FieldValues } from "react-hook-form";
import { useAppDispatch } from "../redux/hooks/hooks";
import { StyledInput, StyledLabel } from "../styledComponents";
import { registerNewUser } from "../redux/authSlice/authOperations";

export const RegisterForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const dispatch = useAppDispatch();

  const registerSubmit: (data: FieldValues) => void = (data) => {
    dispatch(registerNewUser(data));
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
      <h2>Register form</h2>
      <form
        style={{
          width: "500px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}
        onSubmit={handleSubmit((data) => registerSubmit(data))}
      >
        <StyledLabel style={{ gap: "15px" }}>
          Name:
          <StyledInput
            type={"text"}
            {...register("name", {
              required: "This field is required",
            })}
          />
          <p style={{ padding: 0, margin: 0 }}>
            {errors.name?.message as string}
          </p>
        </StyledLabel>
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

        <button type="submit">Login</button>
      </form>
    </div>
  );
};

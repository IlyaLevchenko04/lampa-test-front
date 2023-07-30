import { styled } from "styled-components";

export const StyledSelectWrapper = styled.div`
  position: relative;
  display: inline-block;
`;

export const StyledSelect = styled.select`
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  padding: 8px 24px 8px 12px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: #fff;
  color: #333;
  cursor: pointer;
  outline: none;
  transition: background-color 0.2s ease-in-out, border-color 0.2s ease-in-out;
  width: 200px;

  &:hover {
    background-color: #f2f2f2;
  }

  &:focus {
    border-color: #007bff;
  }
`;

export const StyledDropdownArrow = styled.span`
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
  pointer-events: none;
`;

export const StyledOption = styled.option`
  background-color: #fff;
  color: #333;
`;

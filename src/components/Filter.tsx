import React, { useEffect } from "react";
import { setFilter } from "../redux/filterSlice/filterSlice";
import { useAppDispatch, useAppSelector } from "../redux/hooks/hooks";
import { fetchByFilter } from "../redux/productsSlice/productsOperations";
import {
  StyledSelect,
  StyledOption,
  StyledSelectWrapper,
  StyledDropdownArrow,
} from "../styledComponents";

export const Filter: React.FC = () => {
  const dispatch = useAppDispatch();
  const filter = useAppSelector((state) => state.filter);

  useEffect(() => {
    dispatch(fetchByFilter(filter));
  }, [filter, dispatch]);

  const onFilterChange = (event: React.ChangeEvent): any => {
    dispatch(setFilter((event.currentTarget as any).value));
  };

  return (
    <StyledSelectWrapper>
      <StyledSelect onChange={onFilterChange}>
        <StyledOption>Ascending date</StyledOption>
        <StyledOption>Ascending price</StyledOption>
        <StyledOption>Descending date</StyledOption>
        <StyledOption>Descending price</StyledOption>
      </StyledSelect>
      <StyledDropdownArrow>&#9662;</StyledDropdownArrow>
    </StyledSelectWrapper>
  );
};

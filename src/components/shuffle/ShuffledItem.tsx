import React from "react";
import styled from "styled-components";
import { ItemType } from "../types";

const SELECTED_TEXT = "¡Feliz lectura!";

const StyledSelected = styled.div`
  padding: 1rem;
  margin: 1rem;
  transition: 3s;
`;

const StyledSelectedTitle = styled.div`
  font-size: x-large;
`;

const ShuffledItem = ({ shuffledItem }: { shuffledItem: ItemType }) => {
  return (
    <>
      <StyledSelected>
        <StyledSelectedTitle>{shuffledItem.title}</StyledSelectedTitle>
        <div>{SELECTED_TEXT}</div>
      </StyledSelected>
    </>
  );
};

export default ShuffledItem;

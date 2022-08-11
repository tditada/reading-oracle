import React from "react";
import styled from "styled-components";
import MUIList from "@mui/material/List";
import AddItem from "./AddItemForm";
import { AddItemType, HandleRemoveType, ItemType } from "../types";
import Item from "./Item";

export const StyledEmptyStateDiv = styled.div`
  text-align: center;
`;

const EMPTY_TEXT = " Tu lista de lectura está vacía";

const List = ({
  toDoList,
  handleRemove,
  addItem,
}: {
  toDoList: Array<ItemType>;
  handleRemove: HandleRemoveType;
  addItem: AddItemType;
}) => {
  return (
    <>
      <>
        <AddItem addItem={addItem} />
      </>
      <MUIList>
        {toDoList
          .slice()
          .reverse()
          .map((item: ItemType) => {
            return (
              <Item key={item.id} item={item} handleRemove={handleRemove} />
            );
          })}
        {!toDoList.length && (
          <StyledEmptyStateDiv>{EMPTY_TEXT}</StyledEmptyStateDiv>
        )}
      </MUIList>
    </>
  );
};

export default List;

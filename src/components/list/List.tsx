import React from "react";
import styled from "styled-components";
import MUIList from "@mui/material/List";
import { ListItem } from "@mui/material";
import AddItem from "./AddItemForm";
import { AddItemType, HandleRemoveType, ItemType } from "../types";
import Item from "./Item";

export const StyledEmptyStateDiv = styled.div`
  text-align: center;
`;

const EMPTY_TEXT = " Tu lista de lectura está vacia";

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
    <React.Fragment>
      <ListItem>
        <AddItem addItem={addItem} />
      </ListItem>
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
    </React.Fragment>
  );
};

export default List;

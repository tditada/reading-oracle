import React, { useState } from "react";
import AddItem from "./AddItemForm";
import { useStickyState } from "./helpers";
import ToDoItem from "./Item";
import { AddItemType, HandleRemoveType, ItemType } from "./types";
import styled from "styled-components";
import List from "@mui/material/List";
import { Button, ListItem } from "@mui/material";

const BUTTON_TEXT = "¿Qué leo?";

const uid = () => {
  return Date.now().toString(36) + Math.random().toString(36).substr(2);
};

const shuffle = (list: Array<ItemType>) =>
  list[Math.floor(Math.random() * list.length)];

const Container = styled.div`
  background: rgb(255 255 255 / 10%);
  border-radius: 1em;
  overflow: auto;
`;

const StyledEmptyStateDiv = styled.div`
  text-align: center;
`;

// Inspiration: https://codepen.io/Colt/pen/RwWbKee
const StyledButton = styled(Button)`
  width: 100%;
  font-weight: bold;
  background-image: repeating-linear-gradient(
    -45deg,
    #2f7a88 10px 30px,
    #70a8a2 30px 50px,
    #a2abaa 50px 70px,
    #a88e96 70px 90px,
    #c894af 90px 110px
  );
  color: white;
  transition: 0.5s;
  background-size: 300% 300%;

  &:hover {
    background-position: 20% center;
  }
`;

const ToDoList = () => {
  const [toDoList, setToDoList] = useStickyState([], "list");

  const addItem: AddItemType = (userInput: string) => {
    setToDoList([...toDoList, { id: uid(), task: userInput, shuffled: false }]);
  };

  const handleRemove: HandleRemoveType = (id: string) => {
    const newToDoList = toDoList.filter((item: ItemType) => item.id !== id);
    setToDoList(newToDoList);
  };

  const handleShuffle = (e: any) => {
    e.preventDefault();

    const selectedItem = shuffle(toDoList);
    const newToDoList = toDoList.map((item: ItemType) => {
      if (item.id === selectedItem.id) {
        return { ...item, shuffled: true };
      }
      return { ...item, shuffled: false };
    });
    setToDoList(newToDoList);
  };

  return (
    <Container>
      <List>
        {toDoList.map((item: ItemType) => {
          return (
            <ToDoItem key={item.id} item={item} handleRemove={handleRemove} />
          );
        })}
        {!toDoList.length ? (
          <StyledEmptyStateDiv>La lista está vacia</StyledEmptyStateDiv>
        ) : (
          ""
        )}
        <ListItem>
          <AddItem addItem={addItem} />
        </ListItem>
        <ListItem>
          <StyledButton
            disabled={toDoList.length < 2}
            variant="contained"
            onClick={handleShuffle}
          >
            {BUTTON_TEXT}
          </StyledButton>
        </ListItem>
      </List>
    </Container>
  );
};

export default ToDoList;

import React, { useState } from "react";
import AddItem from "./AddItemForm";
import { useStickyState } from "./helpers";
import ToDoItem from "./Item";
import { AddItemType, HandleRemoveType, ItemType } from "./types";

import { styled } from "@mui/material/styles";
import List from "@mui/material/List";
import { Button, ListItem } from "@mui/material";

const BUTTON_TEXT = "¿Qué leo?";

const uid = () => {
  return Date.now().toString(36) + Math.random().toString(36).substr(2);
};

const shuffle = (list: Array<ItemType>) =>
  list[Math.floor(Math.random() * list.length)];

const Container = styled("div")(({ theme }) => ({
  background: "rgb(255 255 255 / 10%)",
  "border-radius": "1em",
  overflow: "auto",
}));

// Inspiration: https://codepen.io/Colt/pen/RwWbKee
const StyledButton = styled(Button)`
  width: 100%;
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
  const [loading, setLoading] = useState<boolean>(false);

  const addItem: AddItemType = (userInput: string) => {
    setToDoList([...toDoList, { id: uid(), task: userInput, shuffled: false }]);
  };

  const handleRemove: HandleRemoveType = (id: string) => {
    const newToDoList = toDoList.filter((item: ItemType) => item.id !== id);
    setToDoList(newToDoList);
  };

  // Probably move button functionality to its own component
  const handleShuffle = (e: any) => {
    e.preventDefault();
    setLoading(true);

    const selectedItem = shuffle(toDoList);
    const newToDoList = toDoList.map((item: ItemType) => {
      if (item.id === selectedItem.id) {
        return { ...item, shuffled: true };
      }
      return { ...item, shuffled: false };
    });
    setToDoList(newToDoList);

    setLoading(false);
  };

  return (
    <Container>
      <List>
        {toDoList.map((item: ItemType) => {
          return (
            <ToDoItem key={item.id} item={item} handleRemove={handleRemove} />
          );
        })}
        <ListItem>
          <AddItem addItem={addItem} />
        </ListItem>
        <ListItem>
          <StyledButton variant="contained" onClick={handleShuffle}>
            {!loading ? BUTTON_TEXT : "..."}
          </StyledButton>
        </ListItem>
      </List>
    </Container>
  );
};

export default ToDoList;

import React from "react";
import AddItem from "./AddItemForm";
import { useStickyState } from "./helpers";
import ToDoItem from "./Item";
import { AddItemType, HandleRemoveType, ItemType } from "./types";

import { styled } from "@mui/material/styles";
import List from "@mui/material/List";
import { ListItem } from "@mui/material";

const uid = () => {
  return Date.now().toString(36) + Math.random().toString(36).substr(2);
};

const Demo = styled("div")(({ theme }) => ({
  "max-width": "600px",
  background: "rgb(255 255 255 / 10%)",
  "border-radius": "1em",
}));

const ToDoList = () => {
  const [toDoList, setToDoList] = useStickyState([], "list");

  const addItem: AddItemType = (userInput: string) => {
    setToDoList([...toDoList, { id: uid(), task: userInput }]);
  };

  const handleRemove: HandleRemoveType = (id: string) => {
    const newToDoList = toDoList.filter((item: ItemType) => item.id !== id);
    setToDoList(newToDoList);
  };

  return (
    <Demo>
      <List>
        {toDoList.map((item: ItemType) => {
          return (
            <ToDoItem key={item.id} item={item} handleRemove={handleRemove} />
          );
        })}
        <ListItem>
          <AddItem addTask={addItem} />
        </ListItem>
      </List>
    </Demo>
  );
};

export default ToDoList;

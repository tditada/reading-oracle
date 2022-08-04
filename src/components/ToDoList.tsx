import React, { useEffect } from "react";
import AddItem from "./AddItemForm";
import { useStickyState } from "./helpers";
import ToDoItem from "./ToDoItem";
import {
  AddTaskType,
  HandleRemoveType,
  TodoItemType,
  ToDoListType,
} from "./types";

import { styled } from "@mui/material/styles";
import List from "@mui/material/List";
import { IconButton, ListItem } from "@mui/material";
import { AddCircle } from "@mui/icons-material";

const uid = () => {
  return Date.now().toString(36) + Math.random().toString(36).substr(2);
};

const Demo = styled("div")(({ theme }) => ({
  backgroundColor: "papayawhip",
  'max-width': '600px',
}));

const ToDoList = () => {
  const [toDoList, setToDoList] = useStickyState([], "list");

  const addTask: AddTaskType = (userInput: string) => {
    setToDoList([...toDoList, { id: uid(), task: userInput }]);
  };

  const handleRemove: HandleRemoveType = (id: string) => {
    const newToDoList = toDoList.filter((item: TodoItemType) => item.id !== id);
    setToDoList(newToDoList);
  };

  return (
    <Demo>
      <List>
        {toDoList.map((item: TodoItemType) => {
          return (
            <ToDoItem key={item.id} item={item} handleRemove={handleRemove} />
          );
        })}
        <ListItem>
          <AddItem addTask={addTask} />
        </ListItem>
      </List>
    </Demo>
  );
};

export default ToDoList;

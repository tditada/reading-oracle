import React from "react";
import { HandleRemoveType, TodoItemType } from "./types";
import {
  Avatar,
  IconButton,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import AutoStories from "@mui/icons-material/AutoStories";
import Create from "@mui/icons-material/Create";
//TODO: bundle size mui?

const ToDoItem = ({
  item,
  handleRemove,
}: {
  item: TodoItemType;
  handleRemove: HandleRemoveType;
}) => {
  const { id, task } = item;

  const handleRemoveClick = (e: any) => {
    e.preventDefault(); //TODO: Is this needed?
    handleRemove(e.currentTarget.getAttribute("item-id"));
  };

  return (
    <ListItem
      secondaryAction={
        <React.Fragment>
          <IconButton>
            <Create
              item-id={id}
              onClick={(e) =>
                console.log(e.currentTarget.getAttribute("item-id"))
              }
            />
          </IconButton>
          <IconButton edge="end" aria-label="delete">
              color="primary"
            <DeleteIcon item-id={id} onClick={handleRemoveClick} />
          </IconButton>
        </React.Fragment>
      }
    >
      <ListItemAvatar>
        <Avatar>
          <AutoStories />
        </Avatar>
      </ListItemAvatar>
      <ListItemText primary={task} />
    </ListItem>
  );
};

export default ToDoItem;

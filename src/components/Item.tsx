import React from "react";
import { HandleRemoveType, ItemType } from "./types";
import {
  Avatar,
  IconButton,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import AutoStories from "@mui/icons-material/AutoStories";
// import Create from "@mui/icons-material/Create";
import styled from "styled-components";
//TODO: bundle size mui? https://mui.com/material-ui/guides/minimizing-bundle-size/

const StyledListItem = styled(ListItem)<Pick<ItemType, "shuffled">>`
  word-wrap: break-word;
  overflow-wrap: normal;
  background-color: ${(p) => (p.shuffled ? "red" : "")};
`;

const ToDoItem = ({
  item,
  handleRemove,
}: {
  item: ItemType;
  handleRemove: HandleRemoveType;
}) => {
  const { id, task, shuffled } = item;

  const handleRemoveClick = (e: any) => {
    e.preventDefault(); //TODO: Is this needed?
    handleRemove(e.currentTarget.getAttribute("item-id"));
  };

  return (
    <StyledListItem
      secondaryAction={
        <React.Fragment>
          {/* <IconButton>
            <Create
              item-id={id}
              onClick={(e) =>
                console.log(e.currentTarget.getAttribute("item-id"))
              }
            />
          </IconButton> */}
          <IconButton edge="end" aria-label="delete">
            <DeleteIcon item-id={id} onClick={handleRemoveClick} />
          </IconButton>
        </React.Fragment>
      }
      shuffled={shuffled}
    >
      <ListItemAvatar>
        <Avatar>
          <AutoStories />
        </Avatar>
      </ListItemAvatar>
      <ListItemText primary={task} />
    </StyledListItem>
  );
};

export default ToDoItem;

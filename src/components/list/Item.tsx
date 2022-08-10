import React from "react";
import { HandleRemoveType, ItemType } from "../types";
import {
  Avatar,
  IconButton,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import AutoStories from "@mui/icons-material/AutoStories";
import styled from "styled-components";
//TODO: bundle size mui? https://mui.com/material-ui/guides/minimizing-bundle-size/

const StyledListItem = styled(ListItem)`
  word-wrap: break-word;
  overflow-wrap: normal;
  transition: background-color 1000ms linear;
`;

const Item = ({
  item,
  handleRemove,
}: {
  item: ItemType;
  handleRemove: HandleRemoveType;
}) => {
  const { id, title } = item;

  const handleRemoveClick = (e: any) => {
    e.preventDefault(); //TODO: Is this needed?
    handleRemove(e.currentTarget.getAttribute("item-id"));
  };

  return (
    <StyledListItem
      secondaryAction={
        <>
          <IconButton
            edge="end"
            aria-label="delete"
            item-id={id}
            onClick={handleRemoveClick}
          >
            <DeleteIcon />
          </IconButton>
        </>
      }
    >
      <ListItemAvatar>
        <Avatar>
          <AutoStories />
        </Avatar>
      </ListItemAvatar>
      <ListItemText primary={title} />
    </StyledListItem>
  );
};

export default Item;

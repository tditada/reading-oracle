import React from "react";
import { HandleRemoveType, ItemType } from "../types";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import DeleteIcon from "@mui/icons-material/Delete";
import AutoStories from "@mui/icons-material/AutoStories";
import styled from "styled-components";

const StyledListItem = styled(ListItem)`
  word-wrap: break-word;
  overflow-wrap: normal;
  transition: background-color 1000ms linear;
`;

const DELETE_BUTTON_LABEL = "Borrar libro";

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
            aria-label={DELETE_BUTTON_LABEL}
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

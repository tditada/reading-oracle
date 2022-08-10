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

const SELECTED_TEXT = "¡Feliz lectura!";

type StyleProps = {
  selected: boolean;
};

const StyledListItem = styled(ListItem)<StyleProps>`
  word-wrap: break-word;
  overflow-wrap: normal;
  transition: background-color 1000ms linear;
  background-color: ${(p) => (p.selected ? "#70a8a2" : "")};
  color: ${(p) => (p.selected ? "white" : "")};
`;

const StyledAutoStories = styled(AutoStories)<StyleProps>`
  color: ${(p) => (p.selected ? "white" : "")};
`;

const Item = ({
  item,
  handleRemove,
  selected,
}: {
  item: ItemType;
  handleRemove: HandleRemoveType;
  selected?: boolean;
}) => {
  const { id, title } = item;

  const handleRemoveClick = (e: any) => {
    e.preventDefault(); //TODO: Is this needed?
    handleRemove(e.currentTarget.getAttribute("item-id"));
  };

  return (
    <StyledListItem
      secondaryAction={
        <React.Fragment>
          {!selected && (
            <IconButton
              edge="end"
              aria-label="delete"
              item-id={id}
              onClick={handleRemoveClick}
            >
              <DeleteIcon />
            </IconButton>
          )}
        </React.Fragment>
      }
      selected={selected || false}
    >
      <ListItemAvatar>
        <Avatar>
          <StyledAutoStories selected={selected || false} />
        </Avatar>
      </ListItemAvatar>
      <ListItemText primary={title} secondary={selected ? SELECTED_TEXT : ""} />
    </StyledListItem>
  );
};

export default Item;

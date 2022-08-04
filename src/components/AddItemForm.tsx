import { AddCircle } from "@mui/icons-material";
import { IconButton, ListItem, TextField } from "@mui/material";
import React, { useState } from "react";
import { FaPlusCircle } from "react-icons/fa";
import styled from "styled-components";
import { AddTaskType } from "./types";

const ADD_ITEM_TEXT = "Agregar libro...";

const StyledForm = styled.form`
  padding-bottom: 0.5em;
  width: 100%;
`;

const StyledIconButton = styled(IconButton)`
    float: right;
    padding-right: 0 !important;
`;

const AddItem = ({ addTask }: { addTask: AddTaskType }) => {
  const [userInput, setUserInput] = useState("");

  //TODO: Type of events shouldn't be any
  const handleChange = (e: any) => {
    setUserInput(e.currentTarget.value);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    addTask(userInput);
    setUserInput("");
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <TextField
        id="standard-basic"
        variant="standard"
        value={userInput}
        type="text"
        onChange={handleChange}
        placeholder={ADD_ITEM_TEXT}
      />
      <StyledIconButton>
        <AddCircle />
      </StyledIconButton>
    </StyledForm>
  );
};

export default AddItem;

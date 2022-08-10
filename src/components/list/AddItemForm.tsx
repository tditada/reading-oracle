import React, { useState } from "react";
import { AddCircle } from "@mui/icons-material";
import { IconButton, TextField } from "@mui/material";
import styled from "styled-components";
import { AddItemType } from "../types";

const ADD_ITEM_TEXT = "Agregar libro...";

const StyledForm = styled.form`
  padding-bottom: 0.5em;
  width: 100%;
`;

const StyledIconButton = styled(IconButton)`
  float: right;
  padding-right: 0 !important;
`;

const StyledTextField = styled(TextField)`
  width: 80%;
`;

const AddItem = ({ addItem }: { addItem: AddItemType }) => {
  const [userInput, setUserInput] = useState("");

  //TODO: Type of events shouldn't be any
  const handleChange = (e: any) => {
    setUserInput(e.currentTarget.value);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (userInput) {
      addItem(userInput);
      setUserInput("");
    }
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <StyledTextField
        id="standard-basic"
        variant="standard"
        value={userInput}
        type="text"
        onChange={handleChange}
        placeholder={ADD_ITEM_TEXT}
      />
      <StyledIconButton onClick={handleSubmit}>
        <AddCircle />
      </StyledIconButton>
    </StyledForm>
  );
};

export default AddItem;

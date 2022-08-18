import React, { useState } from "react";
import styled from "styled-components";
import AddCircle from "@mui/icons-material/AddCircle";
import IconButton from "@mui/material/IconButton";
import TextField from "@mui/material/TextField";
import { AddItemType } from "../types";

const ADD_ITEM_TEXT = "Agregar libro...";
const ADD_ITEM_BUTTON = "Agregar libro";

const StyledForm = styled.form`
  width: 100%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  box-sizing: border-box;
  text-align: left;
  padding-top: 1rem;
  padding-bottom: 0.5rem;
  padding-left: 1rem;
  padding-right: 1rem;
`;

const StyledIconButton = styled(IconButton)`
  & {
    position: absolute !important;
    right: 0.25rem;
    top: 25%;
  }
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
      <StyledIconButton onClick={handleSubmit} aria-label={ADD_ITEM_BUTTON}>
        <AddCircle />
      </StyledIconButton>
    </StyledForm>
  );
};

export default AddItem;

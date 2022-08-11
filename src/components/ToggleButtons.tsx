import React, { Dispatch, SetStateAction } from "react";
import { ToggleButton, ToggleButtonGroup } from "@mui/material";
import styled from "styled-components";
import { Sections } from "./Content";

const ToggleButtonGroupStyled = styled(ToggleButtonGroup)`
  && {
    display: flex;
    justify-content: center;
    margin: 1rem;
  }
`;

const BOOK_LIST = "TUS LIBROS";
const ORACLE = "ORÁCULO";

const ToggleButtons = ({
  showPart,
  setShowPart,
}: {
  showPart: Sections;
  setShowPart: Dispatch<SetStateAction<Sections>>;
}) => {
  return (
    <ToggleButtonGroupStyled
      value={showPart}
      exclusive
      onChange={(e: any) => {
        setShowPart(parseInt(e.target.value));
      }}
      aria-label="text alignment"
    >
      <ToggleButton value={Sections.LIST} aria-label="left aligned">
        {BOOK_LIST}
      </ToggleButton>
      <ToggleButton value={Sections.SHUFFLE} aria-label="centered">
        {ORACLE}
      </ToggleButton>
    </ToggleButtonGroupStyled>
  );
};

export default ToggleButtons;

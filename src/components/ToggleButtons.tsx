import React, { Dispatch, SetStateAction } from "react";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

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

const TOGGLE_BUTTONS_LABEL = "Lista de libros u oráculo";

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
      aria-label={TOGGLE_BUTTONS_LABEL}
    >
      <ToggleButton value={Sections.LIST} aria-label={BOOK_LIST}>
        {BOOK_LIST}
      </ToggleButton>
      <ToggleButton value={Sections.SHUFFLE} aria-label={ORACLE}>
        {ORACLE}
      </ToggleButton>
    </ToggleButtonGroupStyled>
  );
};

export default ToggleButtons;

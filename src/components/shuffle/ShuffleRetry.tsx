import React from "react";
import ReplayIcon from "@mui/icons-material/Replay";
import { IconButton } from "@mui/material";
import styled from "styled-components";

const StyledRetryContent = styled.div`
  margin-bottom: 1rem;
`;

const ShuffleRetry = ({ unshuffled }: { unshuffled: () => void }) => {
  return (
    <StyledRetryContent>
      <IconButton onClick={unshuffled} aria-label="retry">
        <ReplayIcon />
      </IconButton>
    </StyledRetryContent>
  );
};

export default ShuffleRetry;

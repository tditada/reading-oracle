import { Button, IconButton } from "@mui/material";
import React, { useState } from "react";
import styled from "styled-components";
import BookLoader from "./book-loader/BookLoader";
import ReplayIcon from "@mui/icons-material/Replay";
import { ItemType } from "./types";

const BUTTON_TEXT = "¿Qué leo?";
const SELECTED_TEXT = "¡Feliz lectura!";

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 10rem;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

const StyledSelected = styled.div`
  padding: 1rem;
  margin: 1rem;
  transition: 3s;
`;

const StyledSelectedTitle = styled.div`
  font-size: x-large;
`;

const StyledRetryContent = styled.div`
  margin-bottom: 1rem;
`;

// Source: https://codepen.io/Colt/pen/RwWbKee
// Material UI, styled specification https://www.sipios.com/blog-tech/how-to-use-styled-components-with-material-ui-in-a-react-app
export const StyledShuffleButton = styled(Button)`
  && {
    width: fit-content;
    font-weight: bold;
    background-image: repeating-linear-gradient(
      -45deg,
      #2f7a88 10px 30px,
      #70a8a2 30px 50px,
      #a2abaa 50px 70px,
      #a88e96 70px 90px,
      #c894af 90px 110px
    );
    color: white;
    transition: all 0.5s ease 0s;
    background-size: 300% 300%;

    &:hover {
      background-position: 20% center;
    }
  }
`;

const ShuffleSection = ({
  toDoList,
  handleShuffle,
  shuffledItem,
  unshuffled,
}: {
  toDoList: Array<ItemType>;
  handleShuffle: any;
  shuffledItem: ItemType | undefined;
  unshuffled: () => void;
}) => {
  const [isLoading, setIsLoading] = useState(false);

  const shuffleWithLoading = (e: any) => {
    setIsLoading(true);

    setTimeout(() => {
      handleShuffle(e);
      setIsLoading(false);
    }, 3500);
  };

  return (
    <StyledContainer>
      {!shuffledItem && !isLoading && (
        <StyledShuffleButton
          disabled={toDoList.length < 2}
          variant="contained"
          onClick={shuffleWithLoading}
        >
          {BUTTON_TEXT}
        </StyledShuffleButton>
      )}
      {isLoading && <BookLoader />}
      {shuffledItem && !isLoading && (
        <React.Fragment>
          <StyledSelected>
            <StyledSelectedTitle>{shuffledItem.title}</StyledSelectedTitle>
            <div>{SELECTED_TEXT}</div>
          </StyledSelected>
          <StyledRetryContent>
            <IconButton onClick={unshuffled} aria-label="retry">
              <ReplayIcon />
            </IconButton>
          </StyledRetryContent>
        </React.Fragment>
      )}
    </StyledContainer>
  );
};

export default ShuffleSection;

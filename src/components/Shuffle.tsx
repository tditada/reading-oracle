import { Button } from "@mui/material";
import React from "react";
import styled from "styled-components";
import Item from "./Item";
import { ItemType } from "./types";

const BUTTON_TEXT = "¿Qué leo?";

// Inspiration: https://codepen.io/Colt/pen/RwWbKee
// Material UI, styled specification https://www.sipios.com/blog-tech/how-to-use-styled-components-with-material-ui-in-a-react-app
export const StyledShuffleButton = styled(Button)`
  && {
    width: 100%;
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
}: {
  toDoList: Array<ItemType>;
  handleShuffle: any;
  shuffledItem: ItemType | undefined;
}) => {
  return (
    <React.Fragment>
      <StyledShuffleButton
        disabled={toDoList.length < 2}
        variant="contained"
        onClick={handleShuffle}
      >
        {BUTTON_TEXT}
      </StyledShuffleButton>
      {shuffledItem && (
        <Item
          key={shuffledItem?.id}
          item={shuffledItem}
          handleRemove={() => null}
          selected={true}
        />
      )}
    </React.Fragment>
  );
};

export default ShuffleSection;

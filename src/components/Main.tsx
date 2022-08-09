import React, { useState } from "react";
import styled from "styled-components";
import { shuffle, uid, useStickyState } from "./helpers";
import { AddItemType, HandleRemoveType, ItemType } from "./types";
import ToggleButtons from "./ToggleButtons";
import ShuffleSection from "./Shuffle";
import List from "./List";

export const StyledContainer = styled.div`
  background: rgb(255 255 255 / 10%);
  border-radius: 1em;
  overflow: auto;
  min-width: 20rem;
  min-height: 10rem;
`;

export enum Sections {
  LIST,
  SHUFFLE,
}

const ItemList = () => {
  const [toDoList, setToDoList] = useStickyState([], "list");
  const [showPart, setShowPart] = useState<Sections>(Sections.LIST);
  const [shuffledItem, setShuffledItem] = useState<ItemType>();

  const addItem: AddItemType = (userInput: string) => {
    setToDoList([...toDoList, { id: uid(), title: userInput }]);
  };

  const handleRemove: HandleRemoveType = (id: string) => {
    const newToDoList = toDoList.filter((item: ItemType) => item.id !== id);
    setToDoList(newToDoList);
  };

  const handleShuffle = (e: any) => {
    e.preventDefault();
    setShuffledItem(shuffle(toDoList));
  };

  return (
    <div>
      <ToggleButtons showPart={showPart} setShowPart={setShowPart} />

      <StyledContainer>
        {showPart === Sections.LIST && (
          <List
            toDoList={toDoList}
            handleRemove={handleRemove}
            addItem={addItem}
          />
        )}
        {showPart === Sections.SHUFFLE && (
          <ShuffleSection
            toDoList={toDoList}
            handleShuffle={handleShuffle}
            shuffledItem={shuffledItem}
          />
        )}
      </StyledContainer>
    </div>
  );
};

export default ItemList;

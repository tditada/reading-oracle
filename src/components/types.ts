export type ItemType = {
  id: string;
  title: string;
};

export type HandleToggleType = (id: string) => void;

export type AddItemType = (userInput: string) => void;

export type HandleRemoveType = (itemId: string) => void;

export type GetDataType = () => void;

export type ToDoListType = Array<ItemType>;

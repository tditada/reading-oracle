export type ItemType = {
  id: string;
  task: string;
  shuffled: boolean;
};

export type HandleToggleType = (id: string) => void;

export type AddItemType = (userInput: string) => void;

export type HandleRemoveType = (itemId: string) => void;

export type GetDataType = () => void;

export type ToDoListType = Array<ItemType>;

import React from "react";
import { ItemType } from "./types";

//TODO: Can I do this hook and don't loose the typing of the useState?
export const useStickyState = (defaultValue: any, key: any) => {
  const [value, setValue] = React.useState(() => {
    const stickyValue = window.localStorage.getItem(key);
    return stickyValue !== null ? JSON.parse(stickyValue) : defaultValue;
  });
  React.useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);
  return [value, setValue];
};

export const uid = () => {
  return Date.now().toString(36) + Math.random().toString(36).substr(2);
};

export const shuffle = (list: Array<ItemType>) =>
  list[Math.floor(Math.random() * list.length)];

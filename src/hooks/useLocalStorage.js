import { useState } from "react";

export function useLocalStorage(key) {
  const [value, setValue] = useState(window.localStorage.getItem(key));

  function setLocalStorage(value) {
    window.localStorage.setItem(key, value);
    setValue(value);
  }

  return [value, setLocalStorage];
}

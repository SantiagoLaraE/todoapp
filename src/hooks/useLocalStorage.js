import React, { useEffect, useState } from "react";

function useLocalStorage(nameItem, initialValue) {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const [items, setItems] = React.useState(initialValue);
  useEffect(() => {
    try {
      setTimeout(() => {
        const localStorageItems = localStorage.getItem(nameItem);

        let parsedItems;

        if (!localStorageItems) {
          localStorage.setItem(nameItem, JSON.stringify(initialValue));
          parsedItems = initialValue;
        } else {
          parsedItems = JSON.parse(localStorageItems);
        }
        setItems(parsedItems);
        setLoading(false);
      }, 2000);
    } catch (error) {
      setError(error);
    }
  }, [nameItem, initialValue]);

  const saveItems = (newItems) => {
    const stringifiedItems = JSON.stringify(newItems);
    localStorage.setItem(nameItem, stringifiedItems);
    setItems(newItems);
  };


  return { items, saveItems, loading, error };
}

export { useLocalStorage };

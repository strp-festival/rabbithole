import { useEffect, useState } from "react";
import { collection, onSnapshot } from "firebase/firestore";
import { database } from "../services/firestore";

export const useStreamCollection = (path) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const documentCollection = collection(database, path);

    const unsubscribe = onSnapshot(documentCollection, async (snapshot) => {
      const data = await snapshot;

      const newItems = data.docs.map((item) => {
        return { ...item.data(), id: item.id };
      });

      setItems(newItems);
    });

    return () => {
      unsubscribe();
    };
  }, [path]);

  return items;
};

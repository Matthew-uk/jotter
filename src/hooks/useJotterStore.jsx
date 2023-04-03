import { useState } from "react";
import { Timestamp, jotterStore } from "../firebase/firebaseConfig";
import { useAuthContext } from "./useAuthContext";

export const useJotterStore = (collection) => {
  const [loading, setLoading] = useState(false);
  const store = jotterStore.collection(collection);
  const { user } = useAuthContext();
  const addDocument = async (title, description) => {
    setLoading(true);
    const createdAt = Timestamp.fromDate(new Date());
    const newDoc = {
      title,
      description,
      createdAt,
      uid: user.uid,
    };
    await store.add({ ...newDoc });
    setLoading(false);
  };

  const deleteDocument = async (id) => {
    try {
      store.doc(id).delete();
    } catch (err) {
      console.log(err);
    }
  };

  return { addDocument, deleteDocument, loading };
};

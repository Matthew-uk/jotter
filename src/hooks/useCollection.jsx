import { useEffect, useState } from "react";
import { jotterStore } from "../firebase/firebaseConfig";

export const useCollection = (collection) => {
  const [document, setDocument] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const ref = jotterStore.collection(collection);
    setLoading(true);
    setError(null);

    const unsubscribe = ref.onSnapshot(
      (snapShot) => {
        const data = snapShot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setDocument(data);
        setLoading(false);
      },
      (err) => {
        console.log(err);
        setLoading(false);
        setError(err.message);
      }
    );
    return unsubscribe;
  }, [collection]);

  return { document, loading, error };
};

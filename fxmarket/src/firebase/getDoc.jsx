import { getDocs, collection } from "firebase/firestore";
import { db } from "./firebaseSdk";
import { useState, useEffect } from "react";

const useFetchDocs = () => {
  const [docs, setDocs] = useState([]); 
  const fetchDataDocs = async () => {
    try {
      const docRef = await getDocs(collection(db, "product"));
      const data = docRef.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setDocs(data);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    fetchDataDocs();
  }, []); // Executa fetchDataDocs somente quando o componente é montado

  console.log(docs);
  return docs; // Retorna o array de documentos
};

export default useFetchDocs;

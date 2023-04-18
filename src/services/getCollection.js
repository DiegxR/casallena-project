import { getDocs, collection, where, query } from "firebase/firestore";
import { dataBase } from "../firebase/firebaseConfig";
import { notify } from "./notify";

const initialState = {
  collectionName: "",
  key: "",
  value: "",
};

export const getCollection = async (data = initialState) => {
  try {
    const docs = [];
    const collectionRef = collection(dataBase, data.collectionName);
    const ref = data.key
      ? query(collectionRef, where(data.key, "==", data.value))
      : collectionRef;
    const dataDoc = await getDocs(ref);
    dataDoc.forEach((doc) => {
      docs.push({
        id: doc.id,
        ...doc.data(),
      });
    });
    return docs;
  } catch (error) {
    notify("Ocurrió un error por " + error, "#d80416", "#d80416");
    return null;
  }
};

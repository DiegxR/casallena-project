import { getDocs, collection, where, query } from "firebase/firestore";
import { dataBase } from "../firebase/firebaseConfig";
import { notify } from "./notify";

export const getCollection = async (data) => {
  try {
    const docs = [];
    const collectionRef = collection(dataBase, data.collectionName);
    const ref = data.key
      ? data.operator
        ? query(collectionRef, where(data.key, data.operator, data.value))
        : collectionRef
      : collectionRef;
    const dataDoc = await getDocs(ref);

    dataDoc.forEach((doc) => {
      docs.push({
        id: doc.id,
        ...doc.data(),
      });
    });
    console.log(docs);
    return docs;
  } catch (error) {
    notify("Ocurrió un error por " + error, "#d80416", "#d80416");
    return null;
  }
};

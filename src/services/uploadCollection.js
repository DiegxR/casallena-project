import { addDoc, collection } from "firebase/firestore";
import { dataBase } from "../firebase/firebaseConfig";
import { notify } from "./notify";

export const uploadArray = (array, collecName) => {
  const collectionInfo = collection(dataBase, collecName);
  array.map((item) => {
    try {
      addDoc(collectionInfo, item);
      console.log("item Agregado satisfactoriamente");
    } catch (error) {
      notify("Ocurrió algun Error", "#d80416", "#d80416");
    }
  });
};

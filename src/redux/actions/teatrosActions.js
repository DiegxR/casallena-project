import { getCollection } from "../../services/getCollection";
import { notify } from "../../services/notify";
import { dataTypes } from "../types/dataTypes";

const loadTeatros = (data) => {
  return {
    type: dataTypes.LOAD_TEATROS,
    payload: data,
  };
};

export const loadTeatrosAsync = (data) => {
  return async (dispatch) => {
    try {
      const docs = await getCollection({
        collectionName: data.collectionName,
        key: data.key,
        value: data.value,
      });
      dispatch(loadTeatros(docs));
    } catch (error) {
      notify("Ocurrió un error por " + error, "#d80416", "#d80416");
      dispatch(loadTeatros([]));
    }
  };
};

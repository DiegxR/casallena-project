import { getCollection } from "../../services/getCollection";
import { dataTypes } from "../types/dataTypes";

const loadObras = (data) => {
  return {
    type: dataTypes.LOAD_OBRAS,
    payload: data,
  };
};

const loadFilters = (data) => {
  return {
    type: dataTypes.LOAD_FILTERS,
    payload: data,
  };
};

export const getObras = (data) => {
  return async (dispatch) => {
    try {
      const docs = await getCollection({
        collectionName: data.collectionName,
        key: data.key,
        value: data.value,
      });
      dispatch(loadObras(docs));
    } catch (error) {
      notify("Ocurrió un error por " + error, "#d80416", "#d80416");
      dispatch(loadObras([]));
    }
  };
};

export const getFilters = (data) => {
  return async (dispatch) => {
    try {
      const docs = await getCollection({
        collectionName: data.collectionName,
        key: data.key,
        value: data.value,
      });
      dispatch(loadFilters(docs));
    } catch (error) {
      notify("Ocurrió un error por " + error, "#d80416", "#d80416");
      dispatch(loadFilters([]));
    }
  };
};

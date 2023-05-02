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
    const opt = data.operator ? data.operator : "==";
    try {
      const docs = await getCollection({
        collectionName: data.collectionName,
        operator: opt,
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

const getCurrentObra = (obra) => {
  return {
    type: dataTypes.UPDATE_OBRA,
    payload: obra,
  };
};

export const getCurrentObraAsync = (cod) => {
  return async (dispatch) => {
    try {
      const obra = await getCollection({
        collectionName: "Obras",
        key: "cod",
        operator: "==",
        value: Number(cod),
      });
      dispatch(getCurrentObra(obra[0]));
    } catch (error) {
      console.log(error);
    }
  };
};

export const filterSearchObras = (filter) => {
  return async (dispatch) => {
    try {
      const docs = await getCollection({
        collectionName: "Obras",
        operator: "==",
        key: "",
        value: "",
      });
      const filterObras = docs.filter((obra) =>
        obra.name.toLowerCase().includes(filter.toLowerCase())
      );
      dispatch(loadObras(filterObras));
    } catch (error) {}
  };
};

export const filterDates = (data) => {
  return async (dispatch) => {
    const obras = await getCollection({
      collectionName: "Obras",
      operator: "==",
      key: "",
      value: "",
    });
    let date;
    const currentDay = new Date();
    const day = currentDay.getDate();
    const month = (currentDay.getMonth() + 1).toString().padStart(2, "0");
    const year = currentDay.getFullYear();
    date = `${data.day == "today" ? day : day + 1}/${month}/${year}`;
    const filterObras = obras.filter((obra) => {
      let response = false;
      obra.dates.map((item) => {
        if (item.date == date) {
          response = true;
        }
      });
      return response;
    });
    dispatch(loadObras(filterObras));
    console.log(filterObras, date);
  };
};

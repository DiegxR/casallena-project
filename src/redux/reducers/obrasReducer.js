import { dataTypes } from "../types/dataTypes";

const initialState = {
  obras: [],
  filters: [],
};

export const obrasReducer = (state = initialState, action) => {
  switch (action.type) {
    case dataTypes.LOAD_OBRAS:
      return {
        ...state,
        obras: [...action.payload],
      };

    case dataTypes.LOAD_FILTERS:
      return {
        ...state,
        filters: [...action.payload],
      };

    default:
      return state;
  }
};

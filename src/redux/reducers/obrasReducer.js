import { dataTypes } from "../types/dataTypes";

const initialState = {
  obras: [],
  filters: [],
  currentObra: {}
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
    case dataTypes.UPDATE_OBRA:
      return {
        ...state,
        currentObra: action.payload
      }
    default:
      return state;
  }
};

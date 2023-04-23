import { dataTypes } from "../types/dataTypes";

const initialState = {
  obras: [],
  filters: [],
  currentObra: {},
};

export const obrasReducer = (state = initialState, action) => {
  switch (action.type) {
    case dataTypes.LOAD_OBRAS:
      return {
        ...state,
        obras: [...action.payload],
      };

    case dataTypes.LOAD_FILTERS:
      const filtersOrder = action.payload.sort((a, b) => a.cod - b.cod);
      return {
        ...state,
        filters: filtersOrder,
      };
    case dataTypes.UPDATE_OBRA:
      return {
        ...state,
        currentObra: action.payload,
      };
    default:
      return state;
  }
};

import { dataTypes } from "../types/dataTypes";

const initialState = {
  teatros: [],
};

export const teatrosReducer = (state = initialState, action) => {
  switch (action.type) {
    case dataTypes.LOAD_TEATROS:
      return {
        teatros: [...action.payload],
      };
    default:
      return state;
  }
};

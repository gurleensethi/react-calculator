import {
  ResultState,
  ResultActionTypes,
  UPDATE_RESULT,
  UPDATE_RESULT_VALIDATION
} from "./types";

const initialState: ResultState = {
  result: "",
  isValid: true
};

export function resultReducer(
  state: ResultState = initialState,
  action: ResultActionTypes
): ResultState {
  switch (action.type) {
    case UPDATE_RESULT:
      return { ...state, result: action.result };
    case UPDATE_RESULT_VALIDATION:
      return { ...state, isValid: action.isValid };
    default:
      return state;
  }
}

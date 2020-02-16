import { ResultState, ResultActionTypes, UPDATE_RESULT } from "./types";

const initialState: ResultState = {
  result: ""
};

export function resultReducer(
  state: ResultState = initialState,
  action: ResultActionTypes
): ResultState {
  switch (action.type) {
    case UPDATE_RESULT:
      return { result: action.result };
    default:
      return state;
  }
}

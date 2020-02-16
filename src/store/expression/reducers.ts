import {
  ExpressionState,
  ExpressionActionTypes,
  ADD_SYMBOL,
  REMOVE_SYMBOL,
  UPDATE_EXPRESSION
} from "./types";

const initialState: ExpressionState = {
  value: ""
};

export function expressionReducer(
  state: ExpressionState = initialState,
  action: ExpressionActionTypes
): ExpressionState {
  switch (action.type) {
    case ADD_SYMBOL:
      return { value: state.value + action.symbol };
    case REMOVE_SYMBOL:
      const { value } = state;
      return {
        value: value.length > 0 ? value.substr(0, value.length - 1) : value
      };
    case UPDATE_EXPRESSION:
      return { value: action.expression };
    default:
      return state;
  }
}

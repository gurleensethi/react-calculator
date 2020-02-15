import {
  ExpressionState,
  ExpressionActionTypes,
  ADD_SYMBOL,
  REMOVE_SYMBOL
} from "./types";

const initialState: ExpressionState = {
  value: ""
};

export function expressionReducer(
  state: ExpressionState = initialState,
  action: ExpressionActionTypes
): ExpressionState {
  console.log(state, action);
  switch (action.type) {
    case ADD_SYMBOL:
      return { value: state.value + action.symbol };
    case REMOVE_SYMBOL:
      const { value } = state;
      return {
        value: value.length > 0 ? value.substr(0, value.length - 1) : value
      };
    default:
      return state;
  }
}

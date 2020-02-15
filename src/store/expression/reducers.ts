import {
  ExpressionState,
  ExpressionActionTypes,
  ADD_SYMBOL,
  REMOVE_SYMBOL
} from "./types";

const initialState: ExpressionState = {
  expression: ""
};

export function expressionReducer(
  state: ExpressionState = initialState,
  action: ExpressionActionTypes
): ExpressionState {
  switch (action.type) {
    case ADD_SYMBOL:
      return { expression: state.expression + action.symbol };
    case REMOVE_SYMBOL:
      const { expression } = state;
      return {
        expression:
          expression.length > 0
            ? expression.substr(0, expression.length - 1)
            : expression
      };
    default:
      return state;
  }
}

import {
  ExpressionActionTypes,
  ADD_SYMBOL,
  REMOVE_SYMBOL,
  UPDATE_EXPRESSION
} from "./types";
import { Dispatch } from "redux";
import { ThunkAction } from "redux-thunk";
import { RootState, AppThunkAction, AppDispatch } from "../index";
import * as math from "mathjs";
import { updateResult, updateResultValidation } from "../result/actions";

export const handleAddSymbol = (
  symbol: string
): ThunkAction<void, RootState, unknown, ExpressionActionTypes> => (
  dispatch: Dispatch,
  getState: () => RootState
) => {
  const state = getState();
  const expression = state.expression.value + symbol;
  let result: string = state.result.result;
  let isValid: boolean;
  try {
    result = String(math.evaluate(expression));
    isValid = true;
  } catch (error) {
    isValid = false;
  }
  dispatch(addSymbol(symbol));
  dispatch(updateResult(result));
  dispatch(updateResultValidation(isValid));
};

export function addSymbol(symbol: string): ExpressionActionTypes {
  return {
    type: ADD_SYMBOL,
    symbol
  };
}

export function removeSymbol(): ExpressionActionTypes {
  return {
    type: REMOVE_SYMBOL
  };
}

export function updateExpression(expression: string): ExpressionActionTypes {
  return {
    type: UPDATE_EXPRESSION,
    expression
  };
}

export const handleExpressionEqualsResult = (): AppThunkAction<ExpressionActionTypes> => (
  dispatch: AppDispatch,
  getStore: () => RootState
) => {
  const store = getStore();
  const result = store.result.result;
  dispatch(updateExpression(result));
  dispatch(updateResult(""));
};

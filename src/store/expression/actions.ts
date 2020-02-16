import { ExpressionActionTypes, ADD_SYMBOL, REMOVE_SYMBOL } from "./types";
import { Dispatch } from "redux";
import { ThunkAction } from "redux-thunk";
import { RootState } from "../index";
import * as math from "mathjs";
import { updateResult } from "../result/actions";

export const handleAddSymbol = (
  symbol: string
): ThunkAction<void, RootState, unknown, ExpressionActionTypes> => (
  dispatch: Dispatch,
  getState: () => RootState
) => {
  const expression = getState().expression.value + symbol; 
  let result: string;
  try {
    result = String(math.evaluate(expression));
  } catch (error) {
    result = "Invalid Expression";
  }  
  dispatch(addSymbol(symbol));  
  dispatch(updateResult(result));
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

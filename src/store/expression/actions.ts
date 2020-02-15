import { ExpressionActionTypes, ADD_SYMBOL, REMOVE_SYMBOL } from "./types";

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

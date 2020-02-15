export interface ExpressionState {
  value: string;
}

export const ADD_SYMBOL = "ADD_SYMBOL";
export const REMOVE_SYMBOL = "REMOVE_SYMBOL";

interface AddSymbolAction {
  type: typeof ADD_SYMBOL;
  symbol: string;
}

interface RemoveSymbolAction {
  type: typeof REMOVE_SYMBOL;
}

export type ExpressionActionTypes = AddSymbolAction | RemoveSymbolAction;

export interface ExpressionState {
  value: string;
}

export const UPDATE_EXPRESSION = "UPDATE_EXPRESSION";
export const ADD_SYMBOL = "ADD_SYMBOL";
export const REMOVE_SYMBOL = "REMOVE_SYMBOL";
export const CLEAR_EXPRESSION = "CLEAR_EXPRESSION";

interface UpdateExpressionAction {
  type: typeof UPDATE_EXPRESSION;
  expression: string;
}

interface AddSymbolAction {
  type: typeof ADD_SYMBOL;
  symbol: string;
}

interface RemoveSymbolAction {
  type: typeof REMOVE_SYMBOL;
}

interface ClearExpressionAction {
  type: typeof CLEAR_EXPRESSION;
}

export type ExpressionActionTypes =
  | AddSymbolAction
  | RemoveSymbolAction
  | UpdateExpressionAction
  | ClearExpressionAction;

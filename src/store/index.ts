import { combineReducers } from "redux";
import { expressionReducer } from "./expression/reducers";
import { resultReducer } from "./result/reducers";

export const rootReducer = combineReducers({
  expression: expressionReducer,
  result: resultReducer
});

export type RootState = ReturnType<typeof rootReducer>;

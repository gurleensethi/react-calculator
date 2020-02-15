import { combineReducers } from "redux";
import { expressionReducer } from "./expression/reducers";

export const rootReducer = combineReducers({
  expression: expressionReducer
});

export type RootState = ReturnType<typeof rootReducer>;

import { combineReducers, Action } from "redux";
import { expressionReducer } from "./expression/reducers";
import { resultReducer } from "./result/reducers";
import { ThunkAction, ThunkDispatch } from "redux-thunk";

export const rootReducer = combineReducers({
  expression: expressionReducer,
  result: resultReducer
});

export type RootState = ReturnType<typeof rootReducer>;

export type AppThunkAction<T extends Action> = ThunkAction<
  void,
  RootState,
  unknown,
  T
>;

export type AppDispatch = ThunkDispatch<RootState, unknown, Action>;

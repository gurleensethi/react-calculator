import { combineReducers, Action, applyMiddleware } from "redux";
import { expressionReducer } from "./expression/reducers";
import { resultReducer } from "./result/reducers";
import thunk, { ThunkAction, ThunkDispatch } from "redux-thunk";
import logger from "./middleware/logger.middleware";

export const rootReducer = combineReducers({
  expression: expressionReducer,
  result: resultReducer
});

export const middleware = applyMiddleware(thunk, logger);

export type RootState = ReturnType<typeof rootReducer>;

export type AppThunkAction<T extends Action> = ThunkAction<
  void,
  RootState,
  unknown,
  T
>;

export type AppDispatch = ThunkDispatch<RootState, unknown, Action>;

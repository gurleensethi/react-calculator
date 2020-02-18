import { RootState } from "../index";
import { Middleware, Dispatch, AnyAction, MiddlewareAPI } from "redux";

const logger: Middleware<Dispatch, RootState> = (
  state: MiddlewareAPI<Dispatch, RootState>
) => (next: Dispatch) => (action: AnyAction) => {
  console.log(`[${action.type}]: `, action);
  console.log(`Before [${action.type}]: `, state.getState());
  const result = next(action);
  console.log(`After [${action.type}]: `, result);
};

export default logger;

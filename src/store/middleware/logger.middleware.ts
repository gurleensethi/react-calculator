import { RootState } from "../index";
import { Middleware, Dispatch, AnyAction, MiddlewareAPI } from "redux";

const logger: Middleware<Dispatch, RootState> = (
  state: MiddlewareAPI<Dispatch, RootState>
) => (next: Dispatch) => (action: AnyAction) => {
  if (process.env.NODE_ENV !== "production") {
    console.log("#### Logger Middleware ####");
    console.log(`[${action.type}]: `, action);
    console.log(`Before [${action.type}]: `, state.getState());
    const result = next(action);
    console.log(`After [${action.type}]: `, state.getState());
    return result;
  }
  return next(action);
};

export default logger;

import { ResultActionTypes, UPDATE_RESULT } from "./types";

export function updateResult(result: string): ResultActionTypes {
  return {
    type: UPDATE_RESULT,
    result
  };
}

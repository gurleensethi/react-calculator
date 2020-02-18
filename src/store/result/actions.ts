import {
  ResultActionTypes,
  UPDATE_RESULT,
  UPDATE_RESULT_VALIDATION
} from "./types";

export function updateResult(result: string): ResultActionTypes {
  return {
    type: UPDATE_RESULT,
    result
  };
}

export function updateResultValidation(isValid: boolean): ResultActionTypes {
  return {
    type: UPDATE_RESULT_VALIDATION,
    isValid
  };
}

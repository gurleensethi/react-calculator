export interface ResultState {
  result: string;
  isValid: boolean;
}

export const UPDATE_RESULT = "UPDATE_RESULT";
export const UPDATE_RESULT_VALIDATION = "RESULT_VALIDATION";

interface UpdateResultAction {
  type: typeof UPDATE_RESULT;
  result: string;
}

interface UpdateResultValidityAction {
  type: typeof UPDATE_RESULT_VALIDATION;
  isValid: boolean;
}

export type ResultActionTypes = UpdateResultAction | UpdateResultValidityAction;

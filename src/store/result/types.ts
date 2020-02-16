export interface ResultState {
  result: string;
}

export const UPDATE_RESULT = "UPDATE_RESULT";

interface UpdateResultAction {
  type: typeof UPDATE_RESULT;
  result: string;
}

export type ResultActionTypes = UpdateResultAction;

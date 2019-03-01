import { Reducer } from "redux";
import { AuthState } from "./types";

const authDefaultState: AuthState = {
  uid: undefined
};

const authReducer: Reducer<AuthState> = (state = authDefaultState, action) => {
  switch (action.type) {
    case "@@auth/ON_LOGIN":
      return {
        uid: action.uid
      };
    case "@@auth/ON_LOGOUT":
      return {
        uid: undefined
      };
    default:
      return state;
  }
};

export default authReducer;

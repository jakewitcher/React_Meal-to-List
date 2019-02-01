import { Reducer } from "redux";
import { AuthState } from "./types";

const authReducer: Reducer<AuthState> = (state = {}, action) => {
  switch (action.type) {
    case "@@auth/ON_LOGIN":
      return {
        uid: action.uid
      };
    case "@@auth/ON_LOGOUT":
      return {};
    default:
      return state;
  }
};

export default authReducer;

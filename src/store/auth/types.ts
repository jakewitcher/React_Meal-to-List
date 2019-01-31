import { Action } from "redux";

// auth state
export interface Auth {
  uid: string;
}

// auth actions
export interface OnStartLoginAction {
  type: "@@auth/ON_START_LOGIN";
}

export interface OnLoginAction {
  type: "@@auth/ON_LOGIN";
  uid: string;
}

export interface OnStartLogoutAction {
  type: "@@auth/ON_START_LOGOUT";
}

export interface OnLogoutAction {
  type: "@@auth/ON_LOGOUT";
}

export type AuthActions =
  | OnStartLoginAction
  | OnLoginAction
  | OnStartLogoutAction
  | OnLogoutAction;

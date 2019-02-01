import { Action } from "redux";

// auth state
export type AuthState = Auth | NotAuth;

export interface Auth {
  uid: string;
}

export interface NotAuth {}

// auth actions
export interface OnStartLoginAction extends Action {
  type: "@@auth/ON_START_LOGIN";
}

export interface OnLoginAction extends Action {
  type: "@@auth/ON_LOGIN";
  uid: string;
}

export interface OnStartLogoutAction extends Action {
  type: "@@auth/ON_START_LOGOUT";
}

export interface OnLogoutAction extends Action {
  type: "@@auth/ON_LOGOUT";
}

export type AuthActions =
  | OnStartLoginAction
  | OnLoginAction
  | OnStartLogoutAction
  | OnLogoutAction;

import { ActionCreator } from "redux";
import { AuthActions } from "./types";

export const onStartLogin: ActionCreator<AuthActions> = () => ({
  type: "@@auth/ON_START_LOGIN"
});

export const onLogin: ActionCreator<AuthActions> = (uid: string) => ({
  type: "@@auth/ON_LOGIN",
  uid
});

export const onStartLogout: ActionCreator<AuthActions> = () => ({
  type: "@@auth/ON_START_LOGOUT"
});

export const onLogout: ActionCreator<AuthActions> = () => ({
  type: "@@auth/ON_LOGOUT"
});

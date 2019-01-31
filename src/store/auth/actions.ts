import { AuthActions } from "./types";

export const onStartLogin = (): AuthActions => ({
  type: "@@auth/ON_START_LOGIN"
});

export const onLogin = (uid: string): AuthActions => ({
  type: "@@auth/ON_LOGIN",
  uid
});

export const onStartLogout = (): AuthActions => ({
  type: "@@auth/ON_START_LOGOUT"
});

export const onLogout = (): AuthActions => ({
  type: "@@auth/ON_LOGOUT"
});

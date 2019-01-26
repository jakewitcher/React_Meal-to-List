import { takeEvery } from "redux-saga/effects";
import { firebase, googleAuthProvider } from "../firebase/firebase";

function* startLogin() {
  yield firebase.auth().signInWithPopup(googleAuthProvider);
}

function* startLogout() {
  yield firebase.auth().signOut();
}

export function* watchStartLogin() {
  yield takeEvery("ON_START_LOGIN", startLogin);
}

export function* watchStartLogout() {
  yield takeEvery("ON_START_LOGOUT", startLogout);
}

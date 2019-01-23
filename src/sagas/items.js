import { put, takeEvery, select } from "redux-saga/effects";
import database from "../firebase/firebase";

const getUserId = state => state.auth.uid;

function* addItem({ name = "" }) {
  let id;
  const uid = yield select(getUserId);
  yield database
    .ref(`users/${uid}/itemsAll`)
    .push({ name })
    .then(ref => {
      id = ref.key;
    });

  yield put({ type: "ADD_ITEM", name, id });
}

function* setItem() {
  const items = [];
  const uid = yield select(getUserId);
  yield database
    .ref(`users/${uid}/itemsAll`)
    .once("value")
    .then(snapshot => {
      snapshot.forEach(childSnapshot => {
        items.push({
          id: childSnapshot.key,
          ...childSnapshot.val()
        });
      });
    });

  yield put({ type: "SET_ITEM", items });
}

export function* watchAddItems() {
  yield takeEvery("ON_ADD_ITEM", addItem);
}

export function* watchSetItem() {
  yield takeEvery("ON_SET_ITEM", setItem);
}

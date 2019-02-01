import { put, takeEvery, select } from "redux-saga/effects";
import database from "../../firebase/firebase";
import { Auth } from "../auth/types";
import { OnAddItemAction, ItemAll } from "./types";

const getUserId = ({ auth }: { auth: Auth }) => auth.uid;

function* addItem({ name = "" }: OnAddItemAction) {
  let id;
  const uid = yield select(getUserId);
  yield database
    .ref(`users/${uid}/itemsAll`)
    .push({ name })
    .then(ref => {
      id = ref.key;
    });

  yield put({ type: "@@item/ADD_ITEM", name, id });
}

function* setItem() {
  const items: ItemAll[] = [];
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

  yield put({ type: "@@item/SET_ITEM", items });
}

export function* watchAddItems() {
  yield takeEvery("@@item/ON_ADD_ITEM", addItem);
}

export function* watchSetItem() {
  yield takeEvery("@@item/ON_SET_ITEM", setItem);
}

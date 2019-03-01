import { put, takeEvery, select } from "redux-saga/effects";
import database from "../../firebase/firebase";
import { Item } from "../item/types";
import { ApplicationState } from "../index";
import {
  Grocery,
  OnAddGroceryAction,
  OnEditGroceryAction,
  OnDeleteGroceryAction
} from "./types";

interface FBGroceryItemList {
  [itemName: string]: {
    amount: number;
    unit: string;
  };
}

const getUserId = ({ auth }: ApplicationState) => auth.uid;

const formatItemList = (list: Item[]) => {
  return list.reduce((list: FBGroceryItemList, item: Item) => {
    list[item.itemName] = {
      amount: item.amount,
      unit: item.unit
    };
    return list;
  }, {});
};

function* addGrocery({ grocery = {} }: OnAddGroceryAction) {
  const { itemList, name, groceryListMeals } = grocery;
  const items = formatItemList(itemList);
  const meals = groceryListMeals;

  let id;
  const uid = yield select(getUserId);

  yield database
    .ref(`users/${uid}/groceryLists`)
    .push({ name, items, meals })
    .then(ref => {
      id = ref.key;
    });

  yield put({
    type: "@@grocery/ADD_GROCERY",
    grocery: {
      name,
      itemList,
      groceryListMeals,
      id
    }
  });
}

function* editGrocery({ grocery = {} }: OnEditGroceryAction) {
  const { itemList, name, id, groceryListMeals } = grocery;
  const items = formatItemList(itemList);
  const uid = yield select(getUserId);
  const meals = groceryListMeals;

  yield database
    .ref(`users/${uid}/groceryLists/${id}`)
    .update({ name, items, meals });

  yield put({
    type: "@@grocery/EDIT_GROCERY",
    grocery: {
      name,
      itemList,
      groceryListMeals,
      id
    }
  });
}

function* deleteGrocery({ id = "" }: OnDeleteGroceryAction) {
  const uid = yield select(getUserId);

  yield database.ref(`users/${uid}/groceryLists/${id}`).remove();

  yield put({
    type: "@@grocery/DELETE_GROCERY",
    id
  });
}

function* setGrocery() {
  const lists: Grocery[] = [];
  const uid = yield select(getUserId);

  yield database
    .ref(`users/${uid}/groceryLists`)
    .once("value")
    .then(snapshot => {
      snapshot.forEach(childSnapshot => {
        const itemList: Item[] = [];
        childSnapshot.child("items").forEach(item => {
          itemList.push({
            itemName: item.key,
            amount: item.val().amount,
            unit: item.val().unit
          });
        });

        lists.push({
          id: childSnapshot.key,
          name: childSnapshot.val().name,
          itemList,
          groceryListMeals: childSnapshot.val().meals
        });
      });
    });
  yield put({ type: "@@grocery/SET_GROCERY", lists });
}

export function* watchAddGrocery() {
  yield takeEvery("@@grocery/ON_ADD_GROCERY", addGrocery);
}

export function* watchEditGrocery() {
  yield takeEvery("@@grocery/ON_EDIT_GROCERY", editGrocery);
}

export function* watchDeleteGrocery() {
  yield takeEvery("@@grocery/ON_DELETE_GROCERY", deleteGrocery);
}

export function* watchSetGrocery() {
  yield takeEvery("@@grocery/ON_SET_GROCERY", setGrocery);
}

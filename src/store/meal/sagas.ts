import { put, takeEvery, select } from "redux-saga/effects";
import database from "../../firebase/firebase";
import { ApplicationState } from "../index";
import { Item } from "../item/types";
import {
  Meal,
  OnAddMealAction,
  OnEditMealAction,
  OnDeleteMealAction
} from "./types";

interface FBMealItemList {
  [itemName: string]: {
    amount: number;
    unit: string;
  };
}

const getUserId = ({ auth }: ApplicationState) => auth.uid;

const formatItemList = (list: Item[]) => {
  return list.reduce((list: FBMealItemList, item: Item) => {
    list[item.itemName] = {
      amount: item.amount,
      unit: item.unit
    };
    return list;
  }, {});
};

function* addMeal({ meal = {} }: OnAddMealAction) {
  const { itemList, name } = meal;
  const items = formatItemList(itemList);
  console.log(items);
  console.log(name);
  let id;
  const uid = yield select(getUserId);
  yield database
    .ref(`users/${uid}/meals`)
    .push({ name, items })
    .then(ref => {
      id = ref.key;
    });

  yield put({
    type: "@@meal/ADD_MEAL",
    meal: {
      name,
      itemList,
      id
    }
  });
}

function* editMeal({ meal = {} }: OnEditMealAction) {
  const { itemList, name, id } = meal;
  const items = formatItemList(itemList);
  const uid = yield select(getUserId);

  yield database.ref(`users/${uid}/meals/${id}`).update({ name, items });

  yield put({
    type: "@@meal/EDIT_MEAL",
    meal: {
      name,
      itemList,
      id
    }
  });
}

function* deleteMeal({ id = "" }: OnDeleteMealAction) {
  const uid = yield select(getUserId);

  yield database.ref(`users/${uid}/meals/${id}`).remove();

  yield put({
    type: "@@meal/DELETE_MEAL",
    id
  });
}

function* setMeal() {
  const meals: Meal[] = [];
  const uid = yield select(getUserId);

  yield database
    .ref(`users/${uid}/meals`)
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

        meals.push({
          id: childSnapshot.key,
          name: childSnapshot.val().name,
          itemList
        });
      });
    });

  yield put({ type: "@@meal/SET_MEAL", meals });
}

export function* watchAddMeal() {
  yield takeEvery("@@meal/ON_ADD_MEAL", addMeal);
}

export function* watchEditMeal() {
  yield takeEvery("@@meal/ON_EDIT_MEAL", editMeal);
}

export function* watchDeleteMeal() {
  yield takeEvery("@@meal/ON_DELETE_MEAL", deleteMeal);
}

export function* watchSetMeal() {
  yield takeEvery("@@meal/ON_SET_MEAL", setMeal);
}

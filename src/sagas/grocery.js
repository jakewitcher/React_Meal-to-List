import { put, takeEvery, select } from "redux-saga/effects";
import database from "../firebase/firebase";

const getUserId = state => state.auth.uid;

const formatItemList = list => {
  return list.reduce((list, item) => {
    list[item.itemName] = {
      amount: item.amount,
      unit: item.unit
    };
    return list;
  }, {});
};

function* addGrocery({ grocery = {} }) {
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
    type: "ADD_GROCERY",
    grocery: {
      name,
      itemList,
      groceryListMeals,
      id
    }
  });
}

function* editGrocery({ grocery = {} }) {
  const { itemList, name, id, groceryListMeals } = grocery;
  const items = formatItemList(itemList);
  const uid = yield select(getUserId);
  const meals = groceryListMeals;

  yield database
    .ref(`users/${uid}/groceryLists/${id}`)
    .update({ name, items, meals });

  yield put({
    type: "EDIT_GROCERY",
    grocery: {
      name,
      itemList,
      groceryListMeals,
      id
    }
  });
}

function* deleteGrocery({ id = "" }) {
  const uid = yield select(getUserId);

  yield database.ref(`users/${uid}/groceryLists/${id}`).remove();

  yield put({
    type: "DELETE_GROCERY",
    id
  });
}

function* setGrocery() {
  const lists = [];
  const uid = yield select(getUserId);

  yield database
    .ref(`users/${uid}/groceryLists`)
    .once("value")
    .then(snapshot => {
      snapshot.forEach(childSnapshot => {
        const itemList = [];
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
  yield put({ type: "SET_GROCERY", lists });
}

export function* watchAddGrocery() {
  yield takeEvery("ON_ADD_GROCERY", addGrocery);
}

export function* watchEditGrocery() {
  yield takeEvery("ON_EDIT_GROCERY", editGrocery);
}

export function* watchDeleteGrocery() {
  yield takeEvery("ON_DELETE_GROCERY", deleteGrocery);
}

export function* watchSetGrocery() {
  yield takeEvery("ON_SET_GROCERY", setGrocery);
}

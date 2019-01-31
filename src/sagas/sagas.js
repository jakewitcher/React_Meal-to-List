import { all } from "redux-saga/effects";
import { watchAddItems, watchSetItem } from "../store/item/sagas";
import {
  watchAddMeal,
  watchEditMeal,
  watchDeleteMeal,
  watchSetMeal
} from "../store/meal/sagas";
import {
  watchAddGrocery,
  watchEditGrocery,
  watchDeleteGrocery,
  watchSetGrocery
} from "../store/grocery/sagas";
import { watchStartLogin, watchStartLogout } from "../store/auth/sagas";

export default function* rootSaga() {
  yield all([
    watchAddItems(),
    watchSetItem(),
    watchAddMeal(),
    watchEditMeal(),
    watchDeleteMeal(),
    watchSetMeal(),
    watchAddGrocery(),
    watchEditGrocery(),
    watchDeleteGrocery(),
    watchSetGrocery(),
    watchStartLogin(),
    watchStartLogout()
  ]);
}

import { all } from 'redux-saga/effects';
import { watchAddItems, watchSetItem } from './items';
import { watchAddMeal, watchEditMeal, watchDeleteMeal, watchSetMeal } from './meal';
import { watchAddGrocery, watchEditGrocery, watchDeleteGrocery, watchSetGrocery } from './grocery';

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
    ]);
};
import { all } from 'redux-saga/effects';
import { watchAddItemsAsync } from './items';
import { watchAddMealAsync, watchEditMealAsync, watchDeleteMealAsync } from './meal';

export default function* rootSaga() {
    yield all([
        watchAddItemsAsync(),
        watchAddMealAsync(),
        watchEditMealAsync(),
        watchDeleteMealAsync()
    ]);
}
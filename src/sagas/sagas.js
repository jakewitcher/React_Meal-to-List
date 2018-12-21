import { all } from 'redux-saga/effects';
import { watchAddItemsAsync, watchSetItemAsync } from './items';
import { watchAddMealAsync, watchEditMealAsync, watchDeleteMealAsync, watchSetMealAsync } from './meal';
import { watchAddGroceryAsync, watchEditGroceryAsync, watchDeleteGroceryAsync, watchSetGroceryAsync } from './grocery';

export default function* rootSaga() {
    yield all([
        watchAddItemsAsync(),
        watchSetItemAsync(),
        watchAddMealAsync(),
        watchEditMealAsync(),
        watchDeleteMealAsync(),
        watchSetMealAsync(),
        watchAddGroceryAsync(),
        watchEditGroceryAsync(),
        watchDeleteGroceryAsync(),
        watchSetGroceryAsync(),
    ]);
};
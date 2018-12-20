import { put, takeEvery } from 'redux-saga/effects';
import database from '../firebase/firebase';

function* addItemAsync({name = ''}) {
    
    yield database.ref('itemsAll').push({ name });

    yield put ({ type: 'ADD_ITEM', name });
};

export function* watchAddItemsAsync() {
    yield takeEvery('ADD_ITEM_ASYNC', addItemAsync);
};
import { put, takeEvery } from 'redux-saga/effects';
import database from '../firebase/firebase';

function* addItemAsync({name = ''}) {
    let id;
    yield database.ref('itemsAll').push({ name }).then((ref) => {
        id = ref.key;
    });

    yield put ({ type: 'ADD_ITEM', name, id });
};

export function* watchAddItemsAsync() {
    yield takeEvery('ADD_ITEM_ASYNC', addItemAsync);
};
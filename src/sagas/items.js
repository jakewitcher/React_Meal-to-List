import { put, takeEvery } from 'redux-saga/effects';
import database from '../firebase/firebase';

function* addItemAsync({name = ''}) {
    let id;
    yield database.ref('itemsAll').push({ name }).then((ref) => {
        id = ref.key;
    });

    yield put({ type: 'ADD_ITEM', name, id });
};

function* setItemAsync() {
    const items = [];
    yield database.ref('itemsAll').once('value').then((snapshot) => {
        snapshot.forEach((childSnapshot) => {
            items.push({
                id: childSnapshot.key,
                ...childSnapshot.val(),
            });
        });
    });

    yield put({ type: 'SET_ITEM', items })
}

export function* watchAddItemsAsync() {
    yield takeEvery('ADD_ITEM_ASYNC', addItemAsync);
};

export function* watchSetItemAsync() {
    yield takeEvery('SET_ITEM_ASYNC', setItemAsync);
}
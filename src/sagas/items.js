import { put, takeEvery } from 'redux-saga/effects';
import database from '../firebase/firebase';

function* addItem({ name = '' }) {
    let id;
    yield database.ref('itemsAll').push({ name }).then((ref) => {
        id = ref.key;
    });

    yield put({ type: 'ADD_ITEM', name, id });
};

function* setItem() {
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

export function* watchAddItems() {
    yield takeEvery('ON_ADD_ITEM', addItem);
};

export function* watchSetItem() {
    yield takeEvery('ON_SET_ITEM', setItem);
}
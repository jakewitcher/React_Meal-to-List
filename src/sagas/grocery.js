import { put, takeEvery } from 'redux-saga/effects';
import database from '../firebase/firebase';

const formatItemList = (list) => {
    return list.reduce((list, item) => {
        list[item.itemName] = {
            amount: item.amount,
            unit: item.unit
        };
        return list;
    }, {});
};

function* addGrocery({ grocery = {} }) {
    const { items, name } = grocery;
    const itemList = formatItemList(items);
    let id;
    yield database.ref('groceryLists').push({ name, itemList }).then((ref) => {
        id = ref.key;
    });

    yield put({
        type: 'ADD_GROCERY',
        grocery: {
            name,
            items,
            id,
        }
    });
};

function* editGrocery({ grocery = {} }) {
    const { items, name, id } = grocery;
    const itemList = formatItemList(items);

    yield database.ref(`groceryLists/${id}`).update({ name, itemList });

    yield put({
        type: 'EDIT_GROCERY',
        grocery: {
            name,
            items,
            id,
        }
    });
};

function* deleteGrocery({ id = '' }) {
    yield database.ref(`groceryLists/${id}`).remove();

    yield put({
        type: 'DELETE_GROCERY',
        id,
    });
};

function* setGrocery() {
    const lists = [];
    yield database.ref('groceryLists').once('value').then((snapshot) => {
        snapshot.forEach((childSnapshot) => {
            const items = [];
            childSnapshot.child('itemList').forEach((item) => {
                items.push({
                    itemName: item.key,
                    amount: item.val().amount,
                    unit: item.val().unit,
                });
            });

            lists.push({
                id: childSnapshot.key,
                name: childSnapshot.val().name,
                items,
            });
        });
    });
    yield put({ type: 'SET_GROCERY', lists });
};

export function* watchAddGrocery() {
    yield takeEvery('ON_ADD_GROCERY', addGrocery);
};

export function* watchEditGrocery() {
    yield takeEvery('ON_EDIT_GROCERY', editGrocery);
};

export function* watchDeleteGrocery() {
    yield takeEvery('ON_DELETE_GROCERY', deleteGrocery);
};

export function* watchSetGrocery() {
    yield takeEvery('ON_SET_GROCERY', setGrocery);
};
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
    const { itemList, name } = grocery;
    const items = formatItemList(itemList);
    let id;
    yield database.ref('groceryLists').push({ name, items }).then((ref) => {
        id = ref.key;
    });

    yield put({
        type: 'ADD_GROCERY',
        grocery: {
            name,
            itemList,
            id,
        }
    });
};

function* editGrocery({ grocery = {} }) {
    const { itemList, name, id } = grocery;
    const items = formatItemList(itemList);

    yield database.ref(`groceryLists/${id}`).update({ name, items });

    yield put({
        type: 'EDIT_GROCERY',
        grocery: {
            name,
            itemList,
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
            const itemList = [];
            childSnapshot.child('items').forEach((item) => {
                itemList.push({
                    itemName: item.key,
                    amount: item.val().amount,
                    unit: item.val().unit,
                });
            });

            lists.push({
                id: childSnapshot.key,
                name: childSnapshot.val().name,
                itemList,
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
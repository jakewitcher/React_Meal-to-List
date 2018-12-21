import { put, takeEvery } from 'redux-saga/effects';
import database from '../firebase/firebase';

const formatItemList = (list) => {
    return list.reduce((list, item) => { 
        list[item.itemName] = {
        amount: item.amount, 
        unit: item.unit
        };
        return list;
    } ,{});
};

function* addGroceryAsync({ grocery = {} }) {
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

function* editGroceryAsync({ grocery = {} }) {
    const { items, name, id } = grocery;
    const itemList = formatItemList(items);

    yield database.ref(`groceryLists/${id}`).update({ name, itemList });

    yield put ({ 
        type: 'EDIT_GROCERY', 
        grocery: {
            name,
            items,
            id,
    }});
};

function* deleteGroceryAsync({ id = '' }) {
    yield database.ref(`groceryLists/${id}`).remove();

    yield put ({
        type: 'DELETE_GROCERY',
        id,
    });
};

function* setGroceryAsync() {
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

export function* watchAddGroceryAsync() {
    yield takeEvery('ADD_GROCERY_ASYNC', addGroceryAsync);
};

export function* watchEditGroceryAsync() {
    yield takeEvery('EDIT_GROCERY_ASYNC', editGroceryAsync);
};

export function* watchDeleteGroceryAsync() {
    yield takeEvery('DELETE_GROCERY_ASYNC', deleteGroceryAsync);
};

export function* watchSetGroceryAsync() {
    yield takeEvery('SET_GROCERY_ASYNC', setGroceryAsync);
};
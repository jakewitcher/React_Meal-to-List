import { put, takeEvery, select } from 'redux-saga/effects';
import database from '../firebase/firebase';

const getUserId = (state) => state.auth.uid;

const formatItemList = (list) => {
    return list.reduce((list, item) => {
        list[item.itemName] = {
            amount: item.amount,
            unit: item.unit
        };
        return list;
    }, {});
};

function* addMeal({ meal = {} } = {}) {
    const { itemList, name } = meal;
    const items = formatItemList(itemList);

    let id;
    const uid = yield select(getUserId);
    yield database.ref(`users/${uid}/meals`).push({ name, items }).then((ref) => {
        id = ref.key;
    });

    yield put({
        type: 'ADD_MEAL',
        meal: {
            name,
            itemList,
            id,
        }
    });
}

function* editMeal({ meal = {} }) {
    const { itemList, name, id } = meal;
    const items = formatItemList(itemList);
    const uid = yield select(getUserId);

    yield database.ref(`users/${uid}/meals/${id}`).update({ name, items });

    yield put({
        type: 'EDIT_MEAL',
        meal: {
            name,
            itemList,
            id,
        }
    });
};

function* deleteMeal({ id = '' }) {
    const uid = yield select(getUserId);

    yield database.ref(`users/${uid}/meals/${id}`).remove();

    yield put({
        type: 'DELETE_MEAL',
        id,
    });
}

function* setMeal() {
    const meals = [];
    const uid = yield select(getUserId);

    yield database.ref(`users/${uid}/meals`).once('value').then((snapshot) => {
        snapshot.forEach((childSnapshot) => {
            const itemList = [];
            childSnapshot.child('items').forEach((item) => {
                itemList.push({
                    itemName: item.key,
                    amount: item.val().amount,
                    unit: item.val().unit,
                });
            });

            meals.push({
                id: childSnapshot.key,
                name: childSnapshot.val().name,
                itemList,
            });
        });
    });

    yield put({ type: 'SET_MEAL', meals });
};

export function* watchAddMeal() {
    yield takeEvery('ON_ADD_MEAL', addMeal);
};

export function* watchEditMeal() {
    yield takeEvery('ON_EDIT_MEAL', editMeal);
};

export function* watchDeleteMeal() {
    yield takeEvery('ON_DELETE_MEAL', deleteMeal);
};

export function* watchSetMeal() {
    yield takeEvery('ON_SET_MEAL', setMeal);
}
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

function* addMealAsync({ meal = {} } = {}) {
    const { itemList, name } = meal;
    const items = formatItemList(itemList);

    let id;
    yield database.ref('meals').push({ name, items }).then((ref) => {
        id = ref.key;
    });

    yield put ({ 
        type: 'ADD_MEAL', 
        meal: {
            name,
            itemList,
            id,
    }});
}

function* editMealAsync({ meal = {} }) {
    const { itemList, name, id } = meal;
    const items = formatItemList(itemList);

    yield database.ref(`meals/${id}`).update({ name, items });

    yield put ({ 
        type: 'EDIT_MEAL', 
        meal: {
            name,
            itemList,
            id,
    }});
};

function* deleteMealAsync({ id = '' }) {
    yield database.ref(`meals/${id}`).remove();

    yield put ({
        type: 'DELETE_MEAL',
        id,
    });
}

function* setMealAsync() {
    const meals = [];
    yield database.ref('meals').once('value').then((snapshot) => {
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

export function* watchAddMealAsync() {
    yield takeEvery('ADD_MEAL_ASYNC', addMealAsync);
};

export function* watchEditMealAsync() {
    yield takeEvery('EDIT_MEAL_ASYNC', editMealAsync);
};

export function* watchDeleteMealAsync() {
    yield takeEvery('DELETE_MEAL_ASYNC', deleteMealAsync);
};

export function* watchSetMealAsync() {
    yield takeEvery('SET_MEAL_ASYNC', setMealAsync);
}
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

export function* watchAddMealAsync() {
    yield takeEvery('ADD_MEAL_ASYNC', addMealAsync);
};

export function* watchEditMealAsync() {
    yield takeEvery('EDIT_MEAL_ASYNC', editMealAsync);
};

export function* watchDeleteMealAsync() {
    yield takeEvery('DELETE_MEAL_ASYNC', deleteMealAsync);
}
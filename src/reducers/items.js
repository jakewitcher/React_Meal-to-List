// import { itemsAllDefaultState } from './seed';

const itemsAllDefaultState = [];

export default (state = { itemsAll: itemsAllDefaultState }, action) => {
    switch (action.type) {
        case 'ADD_ITEM':
            state.itemsAll.push(action.name);
            return state;
        default:
            return state;
    }
}
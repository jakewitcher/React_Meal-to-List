// import { itemsAllDefaultState } from './seed';

const itemsAllDefaultState = new Map();

export default (state = { itemsAll: itemsAllDefaultState }, action) => {
    switch (action.type) {
        case 'ADD_ITEM':
            state.itemsAll.set(action.name, action.item);
            return state;
        default:
            return state;
    }
}
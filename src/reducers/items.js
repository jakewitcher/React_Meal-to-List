import { itemsAllDefaultState } from './seed';

// const itemsAllDefaultState = [];

export default (state = { itemsAll: itemsAllDefaultState }, action) => {
    switch (action.type) {
        case 'ADD_ITEM':
            state.itemsAll.push({
                name: action.name,
                id: action.id
            });
            return state;
        default:
            return state;
    }
}
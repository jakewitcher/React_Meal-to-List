import { defaultItemsList } from './seed';

// const itemsAllDefaultState = {
//     itemsAll: new Map()
// };

export default (state = {itemsAll: defaultItemsList}, action) => {
    switch(action.type) {
        case 'ADD_ITEM':
            state.itemsAll.set(action.name, action.item);
            return state;
        default:
            return state; 
    }
}
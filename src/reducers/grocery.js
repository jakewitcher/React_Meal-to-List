import { defaultGroceriesList } from './seed';

// const groceryDefaultState = {
//     groceryList: [],
// };

export default (state = {groceryList: defaultGroceriesList}, action) => {
    switch (action.type) {
        case 'ADD_GROCERY':
            return {
                ...state,
                groceryList: [...state.groceryList, action.grocery]
            };
        default:
            return state;
    }
}
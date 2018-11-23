import { createStore, combineReducers } from 'redux';
import mealReducer from '../reducers/meal';
import itemsReducer from '../reducers/items';

export default () => {
    const store = createStore(
        combineReducers({
            meals: mealReducer,
            items: itemsReducer,
        })
    );
    return store;
}
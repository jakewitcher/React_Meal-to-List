import { createStore, combineReducers, applyMiddleware } from 'redux';
import mealReducer from '../reducers/meal';
import itemsReducer from '../reducers/items';
import groceryReducer from '../reducers/grocery';

export default () => {
    const store = createStore(
        combineReducers({
            meals: mealReducer,
            items: itemsReducer,
            groceryLists: groceryReducer,
        }),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );
    return store;
}
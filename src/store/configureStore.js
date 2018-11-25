import { createStore, combineReducers } from 'redux';
import mealReducer from '../reducers/meal';
import itemsReducer from '../reducers/items';

export default () => {
    const store = createStore(
        combineReducers({
            meals: mealReducer,
            items: itemsReducer,
        }),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );
    return store;
}
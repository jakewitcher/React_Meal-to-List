import { createStore } from 'redux';
import mealReducer from '../reducers/meal';

export default () => createStore(mealReducer);
import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import mealReducer from "../reducers/meal";
import itemsReducer from "../reducers/items";
import groceryReducer from "../reducers/grocery";
import authReducer from "../reducers/auth";
import rootSaga from "../sagas/sagas";

const sagaMiddleware = createSagaMiddleware();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
  const store = createStore(
    combineReducers({
      meals: mealReducer,
      items: itemsReducer,
      groceryLists: groceryReducer,
      auth: authReducer
    }),
    composeEnhancers(applyMiddleware(sagaMiddleware))
  );
  sagaMiddleware.run(rootSaga);
  return store;
};

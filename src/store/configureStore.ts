import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import mealReducer from "./meal/reducers";
import itemsReducer from "../store/item/reducers";
import groceryReducer from "./grocery/reducers";
import authReducer from "./auth/reducers";
import rootSaga from "../sagas/sagas";
import { reducers } from "./index";

const sagaMiddleware = createSagaMiddleware();
const composeEnhancers =
  (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
  const store = createStore(
    reducers,
    composeEnhancers(applyMiddleware(sagaMiddleware))
  );
  sagaMiddleware.run(rootSaga);
  return store;
};

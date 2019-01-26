import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import configureStore from "./store/configureStore";
import AppRouter, { history } from "./routers/AppRouter";
import * as serviceWorker from "./serviceWorker";
import "./styles/styles.scss";
import { firebase } from "./firebase/firebase";
import { onSetItem } from "./actions/items";
import { onSetMeal } from "./actions/meal";
import { onSetGrocery } from "./actions/grocery";
import { onLogin, onLogout } from "./actions/auth";
import LoadingPage from "./containers/LoadingPage";

const store = configureStore();

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

let hasRendered = false;
const renderApp = () => {
  if (!hasRendered) {
    ReactDOM.render(jsx, document.getElementById("root"));
    hasRendered = true;
  }
};

async function setStore() {
  await store.dispatch(onSetItem());
  await store.dispatch(onSetMeal());
  await store.dispatch(onSetGrocery());
}

ReactDOM.render(<LoadingPage />, document.getElementById("root"));

firebase.auth().onAuthStateChanged(user => {
  if (user) {
    store.dispatch(onLogin(user.uid));
    setStore().then(() => {
      renderApp();
      if (history.location.pathname === "/") {
        history.push("/meals");
      }
    });
  } else {
    store.dispatch(onLogout());
    renderApp();
    history.push("/");
  }
});

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

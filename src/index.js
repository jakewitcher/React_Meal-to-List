import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import AppRouter from './routers/AppRouter';
import * as serviceWorker from './serviceWorker';
import './styles/styles.scss';
import './firebase/firebase';
import { onSetItemAsync } from './actions/items';
import { onSetMealAsync } from './actions/meal';
import { onSetGroceryAsync } from './actions/grocery';
import LoadingPage from './containers/LoadingPage';

const store = configureStore();

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

async function setStore() {
        await store.dispatch(onSetItemAsync());
        await store.dispatch(onSetMealAsync());
        await store.dispatch(onSetGroceryAsync());
};

ReactDOM.render(<LoadingPage />, document.getElementById('root'));

setStore().then(() => {
    ReactDOM.render(jsx, document.getElementById('root'));
});


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

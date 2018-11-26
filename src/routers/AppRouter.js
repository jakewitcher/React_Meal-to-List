import React from 'react';
import { BrowserRouter, Route, Switch, } from 'react-router-dom';
import LandingPage from '../containers/LandingPage';
import MealPage from '../containers/MealPage';
import GroceryPage from '../containers/GroceryPage';
import CreateMealPage from '../containers/CreateMealPage';
import CreateGroceryPage from '../containers/CreateGroceryPage';
import PageNotFound from '../containers/PageNotFound';
import Header from '../components/Header';
import FormButtons from '../components/FormButtons';

const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header />
            <FormButtons />
            <Switch>
                <Route path="/" component={LandingPage} exact={true}/>
                <Route path="/meals" component={MealPage} exact={true} />
                <Route path="/grocerylists" component={GroceryPage} exact={true} />
                <Route path="/meals/create" component={CreateMealPage} exact={true} />
                <Route path="/grocerylists/create" component={CreateGroceryPage} exact={true} />
                <Route component={PageNotFound}/>
            </Switch>
        </div>
    </BrowserRouter>
);

export default AppRouter;
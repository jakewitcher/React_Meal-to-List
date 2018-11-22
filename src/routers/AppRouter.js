import React from 'react';
import { BrowserRouter, Route, Switch, } from 'react-router-dom';
import LandingPage from '../pages/LandingPage';
import CreateMealPage from '../pages/CreateMealPage';
import CreateGroceryPage from '../pages/CreateGroceryPage';
import PageNotFound from '../pages/PageNotFound';
import Header from '../components/Header';
import FormButtons from '../components/FormButtons';

const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header />
            <FormButtons />
            <Switch>
                <Route path="/" component={LandingPage} exact={true}/>
                <Route path="/meal" component={CreateMealPage} exact={true} />
                <Route path="/grocerylist" component={CreateGroceryPage} exact={true} />
                <Route component={PageNotFound}/>
            </Switch>
        </div>
    </BrowserRouter>
);

export default AppRouter;
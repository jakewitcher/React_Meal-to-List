import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LandingPage from '../containers/LandingPage';
import MealPage from '../containers/MealPage';
import GroceryPage from '../containers/GroceryPage';
import Header from '../components/Header';

const AppRouter = () => (
    <Router>
        <div>
            <Header />
            <Switch>
                <Route path="/" component={LandingPage} exact={true} />
                <Route path="/meals" component={MealPage} exact={true} />
                <Route path="/grocerylists" component={GroceryPage} exact={true} />
            </Switch>
        </div>
    </Router>
);

export default AppRouter;
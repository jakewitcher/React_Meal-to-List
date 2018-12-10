import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LandingPage from '../containers/LandingPage';
import MealPage from '../containers/MealPage';
import MealListsPage from '../containers/MealListsPage';
import GroceryPage from '../containers/GroceryPage';
import GroceryListsPage from '../containers/GroceryListsPage';
import Header from '../components/Header';
import NavBar from '../components/NavBar';

const AppRouter = () => (
    <Router>
        <div>
            <Header />
            <NavBar />
            <Switch>
                <Route path="/" component={LandingPage} exact={true} />
                <Route path="/meals" component={MealListsPage} exact={true} />
                <Route path="/meals/create" component={MealPage} exact={true} />
                <Route path="/meals/edit/:mealId" component={MealPage} exact={true} />
                <Route path="/grocerylists" component={GroceryListsPage} exact={true} />
                <Route path="/grocerylists/create" component={GroceryPage} exact={true} />
                <Route path="/grocerylists/edit/:groceryId" component={GroceryPage} exact={true} />
            </Switch>
        </div>
    </Router>
);

export default AppRouter;
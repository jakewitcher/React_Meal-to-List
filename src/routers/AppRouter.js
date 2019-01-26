import React from "react";
import { Router, Switch } from "react-router-dom";
import createHistory from "history/createBrowserHistory";
import LandingPage from "../containers/LandingPage";
import MealPage from "../containers/MealPage";
import MealListsPage from "../containers/MealListsPage";
import MealDetailsPage from "../containers/MealDetailsPage";
import GroceryPage from "../containers/GroceryPage";
import GroceryListsPage from "../containers/GroceryListsPage";
import GroceryDetailsPage from "../containers/GroceryDetailsPage";
import NavBar from "../components/NavBar";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";

export const history = createHistory();

const AppRouter = () => (
  <Router history={history}>
    <div>
      <NavBar />
      <Switch>
        <PublicRoute path="/" component={LandingPage} exact={true} />
        <PrivateRoute path="/meals" component={MealListsPage} exact={true} />
        <PrivateRoute path="/meals/create" component={MealPage} exact={true} />
        <PrivateRoute
          path="/meals/edit/:mealId"
          component={MealPage}
          exact={true}
        />
        <PrivateRoute
          path="/meals/meal/:mealId"
          component={MealDetailsPage}
          exact={true}
        />
        <PrivateRoute
          path="/grocerylists"
          component={GroceryListsPage}
          exact={true}
        />
        <PrivateRoute
          path="/grocerylists/create"
          component={GroceryPage}
          exact={true}
        />
        <PrivateRoute
          path="/grocerylists/edit/:groceryId"
          component={GroceryPage}
          exact={true}
        />
        <PrivateRoute
          path="/grocerylists/grocery-list/:groceryId"
          component={GroceryDetailsPage}
          exact={true}
        />
      </Switch>
    </div>
  </Router>
);

export default AppRouter;

import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div className="header">
            <h1 className="header__title">Meal to List</h1>
            <hr />
            <h3 className="header__subtitle">Create a grocery list from a selection of saved meals</h3>
            <NavLink to="/" activeClassName="is-active" exact={true}>Home</NavLink>
            <NavLink to="/meal" activeClassName="is-active" exact={true}>Create a Meal</NavLink>
            <NavLink to="grocerylist" activeClassName="is-active" exact={true}>Create a Grocery List</NavLink>
        </div>
    );
};

export default Header;

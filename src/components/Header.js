import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div className="header">
            <h1 className="header__title">Meal to List</h1>
            <hr />
            <h3 className="header__subtitle">Create a grocery list from a selection of saved meals</h3>
            <div style={{ display: 'flex' }}>
                <NavLink to="/" activeClassName="is-active" exact={true}>Home</NavLink>
                <NavLink to="/meals" activeClassName="is-active" exact={true}>Meals</NavLink>
                <NavLink to="/meals/create" activeClassName="is-active" exact={true}>Create a Meal</NavLink>
                <NavLink to="/grocerylists/create" activeClassName="is-active" exact={true}>Create a Grocery List</NavLink>
                <NavLink to="/grocerylists" activeClassName="is-active" exact={true}>Grocery Lists</NavLink>
            </div>
            
        </div>
    );
};

export default Header;

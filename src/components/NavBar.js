import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <div className="form-tabs">
            <Link to="/meals">
                <button className="form-tabs__button form-tabs__button--meal">Meals</button>
            </Link>
            <Link to="/meals/create">
                <button className="form-tabs__button form-tabs__button--meal">Create a New Meal</button>
            </Link>
            <Link to="/grocerylists">
                <button className="form-tabs__button form-tabs__button--meal">Grocery Lists</button>
            </Link>
            <Link to="/grocerylists/create">
                <button className="form-tabs__button form-tabs__button--meal">Create a New Grocery List</button>
            </Link>

        </div>
    );
};

export default NavBar;
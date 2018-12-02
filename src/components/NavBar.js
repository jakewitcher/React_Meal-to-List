import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <div className="form-tabs">
            <Link to="/meals">
                <button className="form-tabs__button form-tabs__button--meal">Meals</button>
            </Link>
            <Link to="/grocerylists">
                <button className="form-tabs__button form-tabs__button--meal">Grocery</button>
            </Link>
           
        </div>
    );
};

export default NavBar;
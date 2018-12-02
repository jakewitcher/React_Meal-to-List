import React from 'react';
import NavBar from './NavBar';

const Header = () => {
    return (
        <div className="header">
            <h1 className="header__title">Meal to List</h1>
            <hr />
            <h3 className="header__subtitle">Meal Planning Made Easy</h3>
            <NavBar />
        </div>
    );
};

export default Header;

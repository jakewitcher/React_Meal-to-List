import React from 'react';
import { Link } from 'react-router-dom';

const FormButtons = () => {
    return (
        <div className="form-tabs">
            <Link to="/meals">
                <button className="form-tabs__button form-tabs__button--meal">New meal</button>
            </Link>
            <Link to="/grocerylists">
                <button className="form-tabs__button form-tabs__button--grocery">New grocery list</button>
            </Link>
        </div>
    );
};

export default FormButtons;
import React from 'react';

const FormButtons = () => {
    return (
        <div className="form-tabs">
            <button className="form-tabs__button form-tabs__button--meal">New meal</button>
            <button className="form-tabs__button form-tabs__button--grocery">New grocery list</button>
        </div>
    );
};

export default FormButtons;
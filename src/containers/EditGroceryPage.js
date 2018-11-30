import React from 'react';

const EditGroceryPage = (props) => {
    const { viewListOfGroceries } = props; 
    return (
        <div>
            <h1>This is the Edit Grocery Page</h1>
            <div className="form-tabs">
                <button onClick={() => viewListOfGroceries()} className="form-tabs__button">View List of Meals</button>
            </div>
        </div>
    );
}

export default EditGroceryPage;
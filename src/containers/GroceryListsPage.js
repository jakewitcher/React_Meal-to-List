import React from 'react';
import Grocery from '../components/grocery/Grocery';

const GroceriesList = (props) => {
    const { groceryLists, createNewGrocery } = props;
    return (
        <div>
            {
                groceryLists.map(list => {
                    return <Grocery
                        name={list.name}
                        key={list.id}
                    />
                })
            }
            <div className="form-tabs">
                <button onClick={() => createNewGrocery()} className="form-tabs__button">Create a New Grocery List</button>
            </div>
        </div>
    );
}

export default GroceriesList;
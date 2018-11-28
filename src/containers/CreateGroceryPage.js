import React from 'react';
import GroceryForm from '../components/grocery/GroceryForm';
import GroceryItems from '../components/grocery/GroceryItems';


const CreateGroceryPage = (props) => {
    const { viewListOfGroceries } = props;
    return (
        <div>
            <div className="grocery">
                <GroceryForm {...props} />
                <GroceryItems
                    groceryName={props.groceryName}
                    itemsList={props.itemsList}
                />
            </div>
            <div className="form-tabs">
                <button onClick={() => viewListOfGroceries()} className="form-tabs__button">View List of Meals</button>
            </div>
        </div>
       
    )
};

export default CreateGroceryPage;
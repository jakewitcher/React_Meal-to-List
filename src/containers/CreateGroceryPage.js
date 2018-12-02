import React from 'react';
import GroceryForm from '../components/grocery/GroceryForm';
import GroceryItems from '../components/grocery/GroceryItems';


const CreateGroceryPage = (props) => {
    return (
        <div>
            <div className="grocery">
                <GroceryForm {...props} />
                <GroceryItems
                    groceryName={props.groceryProps.groceryName}
                    itemsList={props.groceryProps.itemsList}
                />
            </div>
        </div>
       
    )
};

export default CreateGroceryPage;
import React from 'react';
import CreateGroceryForm from '../components/grocery/CreateGroceryForm';
import GroceryItems from '../components/grocery/GroceryItems';
import { addGrocery } from '../actions/grocery';


const CreateGroceryPage = (props) => {
    return (
        <div>
            <div className="grocery">
                <CreateGroceryForm 
                    {...props}
                    addGrocery={addGrocery}
                    />
                <GroceryItems
                    groceryName={props.groceryProps.groceryName}
                    itemsList={props.groceryProps.itemsList}
                />
            </div>
        </div>
       
    )
};

export default CreateGroceryPage;
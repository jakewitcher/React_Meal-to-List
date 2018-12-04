import React from 'react';
import EditGroceryForm from '../components/grocery/EditGroceryForm';
import GroceryItems from '../components/grocery/GroceryItems';
import { editGrocery } from '../actions/grocery';

const EditGroceryPage = (props) => {
    const { groceryName, itemsList, dispatch, deleteGroceryItem } = props.groceryProps;
    return (
        <div className="grocery">
            <EditGroceryForm
                {...props}
                editGrocery={editGrocery}
            />
            <GroceryItems
                groceryName={groceryName}
                itemsList={itemsList}
                deleteGroceryItem={deleteGroceryItem}
                dispatch={dispatch}
            />
        </div>
    );
}

export default EditGroceryPage;
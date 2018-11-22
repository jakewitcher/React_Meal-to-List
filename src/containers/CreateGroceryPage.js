import React from 'react'
import GroceryForm from '../components/grocery/GroceryForm';
import GroceryItems from '../components/grocery/GroceryItems';

const CreateGroceryPage = () => {
    return (
        <div className="grocery">
            <GroceryForm />
            <GroceryItems />
        </div>
    )
}

export default CreateGroceryPage;
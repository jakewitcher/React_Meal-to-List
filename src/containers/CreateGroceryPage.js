import React from 'react';
import GroceryForm from '../components/grocery/GroceryForm';
import GroceryItems from '../components/grocery/GroceryItems';


const CreateGroceryPage = (props) => {
    const {
        meals,
        selectedMeal,
        groceryName,
        itemsList,
        selectedMealChange,
        groceryNameChange,
        addMealToList,
        addGrocery,
        resetGrocery,
        dispatch,
    } = props;

    return (
        <div className="grocery">
            <GroceryForm
                meals={meals}
                selectedMeal={selectedMeal}
                groceryName={groceryName}
                itemsList={itemsList}
                selectedMealChange={selectedMealChange}
                groceryNameChange={groceryNameChange}
                addMealToList={addMealToList}
                addGrocery={addGrocery}
                resetGrocery={resetGrocery}
                dispatch={dispatch}
            />
            <GroceryItems
                groceryName={groceryName}
                itemsList={itemsList}
            />
        </div>
    )
};


export default CreateGroceryPage;
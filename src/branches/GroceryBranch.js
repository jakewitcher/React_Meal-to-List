import React from 'react';
import GroceryListsPage from '../containers/GroceryListsPage';
import CreateGroceryPage from '../containers/CreateGroceryPage';
import EditGroceryPage from '../containers/EditGroceryPage';


const GroceryBranch = (props) => {
    const { listOfGroceryLists, editGroceryList } = props;

    if (listOfGroceryLists) {
        return (
            <div>
                <GroceryListsPage
                    groceryLists={props.groceryLists}
                />
            </div>
        );
    } else if (editGroceryList) {
        return (
            <div>
                <EditGroceryPage {...props} />
            </div>
        )
    } else {
        return (
            <div>
                <CreateGroceryPage {...props} />
            </div>
        );
    }
}

export default GroceryBranch;
import React from 'react';
import Grocery from '../components/grocery/Grocery';

const GroceriesList = (props) => {
    const { groceryLists, dispatch } = props;
    return (
        <div>
            {
                groceryLists.map(list => {
                    return <Grocery
                        name={list.name}
                        id={list.id}
                        dispatch={dispatch}
                        key={list.id}
                    />
                })
            }
        </div>
    );
}

export default GroceriesList;
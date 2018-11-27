import React from 'react';
import Grocery from './Grocery';

const GroceriesList = (props) => {
    const { groceryLists } = props;
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
        </div>
    );
}

export default GroceriesList;
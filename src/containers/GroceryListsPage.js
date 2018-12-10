import React from 'react';
import { connect } from 'react-redux';
import Grocery from '../components/grocery/Grocery';

const GroceryListsPage = (props) => {
    return (
        <div>
            {
                props.groceryLists.groceryList.map(list => {
                    return <Grocery
                        name={list.name}
                        id={list.id}
                        key={list.id}
                    />
                })
            }
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        groceryLists: state.groceryLists,
    }
}

export default connect(mapStateToProps)(GroceryListsPage);
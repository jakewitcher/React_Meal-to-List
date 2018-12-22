import React from 'react';
import { connect } from 'react-redux';
import GroceryItems from '../components/grocery/GroceryItems';

const GroceryDetailsPage = (props) => {
    return (
        <div>
            <GroceryItems 
                groceryName={props.grocery.name}
                itemsList={props.grocery.items}
                isDetails={true}
            />
        </div>
    );
};

const mapStateToProps = (state, props) => {
    return {
        groceryLists: state.groceryLists,
        grocery: state.groceryLists.groceryList.filter((list) => list.id === props.match.params.groceryId)[0],
    }
}

export default connect(mapStateToProps)(GroceryDetailsPage);
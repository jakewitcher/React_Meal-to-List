import React, { Component } from 'react';
import { connect } from 'react-redux';

class GroceryPage extends Component {
    render () {
        return (
            <div>
                <h1>Grocery Page</h1>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        groceryLists: state.groceryLists
    }
} 

export default connect(mapStateToProps)(GroceryPage);
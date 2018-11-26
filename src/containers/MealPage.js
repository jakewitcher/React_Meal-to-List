import React, { Component } from 'react';
import { connect } from 'react-redux';

class MealPage extends Component {
    render () {
        return (
            <div>
                <h1>Meal Page</h1>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        meals: state.meals
    }
} 

export default connect(mapStateToProps)(MealPage);
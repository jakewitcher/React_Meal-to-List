import React, { Component } from 'react';
import { connect } from 'react-redux';
import MealsList from '../components/meal/MealsList';

class MealPage extends Component {
    render () {
        return (
            <div>
                <h1>Meal Page</h1>
                <MealsList 
                    meals={this.props.meals.mealList}
                />
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
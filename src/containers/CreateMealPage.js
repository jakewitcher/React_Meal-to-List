import React, { Component } from 'react';
import { connect } from 'react-redux';
import uuid from 'uuid';
import MealFormView from '../components/meal/MealForm';
import MealItems from '../components/meal/MealItems';
import { addMeal } from '../actions/meal';

class CreateMealPage extends Component {
    state = {
        mealName: '',
        itemName: '',
        amount: '',
        unit: 'pound(s)',
        itemList: []
    };

    mealNameChange = (e) => {
        const mealName = e.target.value;
        this.setState({ mealName });
    };

    itemNameChange = (e) => {
        const itemName = e.target.value;
        this.setState({ itemName });
    };

    amountChange = (e) => {
        const amount = e.target.value;
        this.setState({ amount });
    };

    unitChange = (e) => {
        const unit = e.target.value;
        this.setState({ unit });
    };

    addItem = () => {
        const { itemName, amount, unit, itemList } = this.state;
        const newItem = {
            id: uuid(),
            itemName,
            amount,
            unit,
        };
        this.setState({
            itemName: '',
            amount: '',
            unit: 'pound(s)',
            itemList: [...itemList, newItem]
        });
    }

    resetMeal = () => {
        this.setState({ mealName: '', itemList: [] });
    }

    render() {
        return (
            <div className="meal">
            <MealFormView
                mealNameChange={this.mealNameChange}
                itemNameChange={this.itemNameChange}
                amountChange={this.amountChange}
                unitChange={this.unitChange}
                addItem={this.addItem}
                addMeal={addMeal}
                resetMeal={this.resetMeal}
                mealName={this.state.mealName}
                itemName={this.state.itemName}
                amount={this.state.amount}
                unit={this.state.unit}
                itemList={this.state.itemList}
                dispatch={this.props.dispatch}
            />
                <MealItems 
                    mealName={this.state.mealName}
                    itemList={this.state.itemList}
                />
            </div>
        )
    }
}

export default connect()(CreateMealPage);
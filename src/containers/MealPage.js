import React, { Component } from 'react';
import { connect } from 'react-redux';
import MealForm from '../components/meal/MealForm';
import MealItems from '../components/meal/MealItems';
import { onAddMealAsync, onEditMealAsync } from '../actions/meal';
import { onAddItemAsync } from '../actions/items';

export class MealPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            mealName: props.meal ? props.meal.name : '',
            itemName: '',
            amount: '',
            unit: 'pound',
            itemList: props.meal ? props.meal.itemList : [],
        };
    }

    deleteMealItem = (name) => {
        const newMealList = this.state.itemList.filter(item => item.itemName !== name);
        this.setState({
            itemList: newMealList,
        });
    };

    itemToEdit = (name) => {
        const selectedItem = this.state.itemList.filter(item => item.itemName === name)[0];
        this.setState({
            itemName: selectedItem.itemName,
            amount: selectedItem.amount,
            unit: selectedItem.unit,
        })
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

    findItem = (itemName, itemList) => {
        if (itemList.find((item) => item === itemName)) {
            return true;
        }
        return false
    }

    addItem = () => {
        let { itemName, amount, unit, itemList } = this.state;
        const { items } = this.props;

        if (!this.findItem(itemName, items.itemsAll)) {
            this.props.onAddItemAsync(itemName);
        }
        
        const newItem = {
            itemName,
            amount,
            unit,
        };

        if (this.findItem(itemName, itemList.map(i => i.itemName))) {
            itemList = itemList.filter(item => item.itemName !== itemName);
        }

        this.setState({
            itemName: '',
            amount: '',
            unit: 'pound',
            itemList: [...itemList, newItem]
        });
    }

    resetMeal = () => {
        this.setState({ mealName: '', itemList: [] });
    }

    render() {
        return (
            <div className="meal">
                <MealForm
                    mealNameChange={this.mealNameChange}
                    itemNameChange={this.itemNameChange}
                    amountChange={this.amountChange}
                    unitChange={this.unitChange}
                    addItem={this.addItem}
                    resetMeal={this.resetMeal}
                    mealName={this.state.mealName}
                    itemName={this.state.itemName}
                    amount={this.state.amount}
                    unit={this.state.unit}
                    itemList={this.state.itemList}
                    mealId={this.props.meal ? this.props.meal.id : ''}
                    title={this.props.meal ? 'Edit Meal' : 'Create Meal'}
                    updateMeal={this.props.meal ? this.props.onEditMealAsync : this.props.onAddMealAsync}
                />
                <MealItems
                    mealName={this.state.mealName}
                    itemList={this.state.itemList}
                    itemToEdit={this.itemToEdit}
                    deleteMealItem={this.deleteMealItem}

                />
            </div>
        );
    }

}

const mapStateToProps = (state, props) => {
    return {
        meals: state.meals,
        items: state.items,
        meal: state.meals.mealList.filter((meal) => meal.id === props.match.params.mealId)[0],
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onAddItemAsync: (data) => dispatch(onAddItemAsync(data)),
        onEditMealAsync: (data) => dispatch(onEditMealAsync(data)),
        onAddMealAsync: (data) => dispatch(onAddMealAsync(data)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MealPage);
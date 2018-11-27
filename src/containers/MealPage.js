import React, { Component } from 'react';
import { connect } from 'react-redux';
import uuid from 'uuid';
import CreateMealPage from './CreateMealPage';
import MealsList from '../components/meal/MealsList';
import { addToItemsAll } from '../actions/items';
import { addMeal } from '../actions/meal';

class MealPage extends Component {
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

    createItemId = (itemName, itemMap) => {
        if (itemMap.has(itemName)) {
            return itemMap.get(itemName).id;
        } else {
            return uuid();
        }
    }

    findItemAndSumAmount = (itemName, amount, list) => {
        const currentAmount = Number(list.filter(item => item.itemName === itemName)[0].amount);
        let amountSum = currentAmount + Number(amount);
        let newList = list.map(i => {
            if (i.itemName === itemName) {
                i.amount = amountSum;
                return i;
            }
            return i;
        });
        return newList;
    }

    checkListForItem = (name, list) => {
        return list.filter(item => item.itemName === name).length > 0;
    }

    addItem = () => {
        const { itemName, amount, unit, itemList } = this.state;
        if (this.checkListForItem(itemName, itemList)) {
            const newList = this.findItemAndSumAmount(itemName, amount, itemList)
            this.setState({
                itemName: '',
                amount: '',
                unit: 'pound(s)',
                itemList: newList,
            });
            return;
        }
        const { items, dispatch } = this.props;
        const id = this.createItemId(itemName, items.itemsAll);

        const newItem = {
            id,
            itemName,
            amount,
            unit,
        };

        dispatch(addToItemsAll({
            name: itemName,
            item: {
                name: itemName,
                id: id,
            }
        }));

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

    render () {
        return (
            <div>
                <h1>Meal Page</h1>
                <MealsList 
                    meals={this.props.meals.mealList}
                />
                <CreateMealPage
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
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        meals: state.meals,
        items: state.items,
    }
} 

export default connect(mapStateToProps)(MealPage);
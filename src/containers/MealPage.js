import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import uuid from 'uuid';
import CreateMealPage from './CreateMealPage';
import EditMealPage from './EditMealPage';
import MealListsPage from './MealListsPage';
import { addToItemsAll } from '../actions/items';
import { addMeal, editMeal } from '../actions/meal';

class MealPage extends Component {
    state = {
        mealName: '',
        itemName: '',
        amount: '',
        unit: 'pound(s)',
        itemList: []
    };

    // sets the name and itemList of the selected meal in state so that it can be edited.

    mealToEdit = (id) => {
        const selectedMeal = this.props.meals.mealList.filter(meal => meal.id === id);
        this.setState({
            mealName: selectedMeal.name,
            itemList: selectedMeal.itemList,
            id: selectedMeal.id,
        })
    };

    // on Change event listeners for setting the information for a new item or setting the name of the meal.
    // this includes the item name, amount, and unit of the item.

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

    // all items are stored in a master list. createItemId checks to see if an item for a new meal already exists in the list.
    // if it does, this function ensures that duplicate items have the same id across all meal lists.

    createItemId = (itemName, itemMap) => {
        if (itemMap.has(itemName)) {
            return itemMap.get(itemName).id;
        } else {
            return uuid();
        }
    }

    // when a new item is added to a meal, these functions check to see if the item is already on the list.
    // if not, it adds the item to the list. if it does exist, it sums the amounts. 
    // once editing is in place, this will change and there will be a message that lets you know the item already exists
    // and asks if you would like to edit it.

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

    // resets the mealName and itemList after a new meal was created and saved.

    resetMeal = () => {
        this.setState({ mealName: '', itemList: [] });
    }

    render() {
        const { match } = this.props;
        const mealProps = {
            mealName: this.state.mealName,
            itemName: this.state.itemName,
            amount: this.state.amount,
            unit: this.state.unit,
            itemList: this.state.itemList,
            mealNameChange: this.mealNameChange,
            itemNameChange: this.itemNameChange,
            amountChange: this.amountChange,
            unitChange: this.unitChange,
            addItem: this.addItem,
            addMeal: addMeal,
            editMeal: editMeal,
            resetMeal: this.resetMeal,
            dispatch: this.props.dispatch,
        }
 
        return (
            <Router>
                <div>
                    <MealListsPage
                        createNewMeal={this.createNewMeal}
                        meals={this.props.meals.mealList}
                        dispatch={this.props.dispatch}
                        mealToEdit={this.mealToEdit}
                    />
                    <Link to="/meals/create">
                        <button className="form-tabs__button form-tabs__button--meal">Create Meal</button>
                    </Link>
                    <Link to="/meals/edit">
                        <button className="form-tabs__button form-tabs__button--meal">Edit Meal</button>
                    </Link>

                    <Route path={`${match.path}/create`} render={props => <CreateMealPage {...props} mealProps={mealProps}/>} exact={true}/>
                    <Route path={`${match.path}/edit`} render={props => <EditMealPage {...props} mealProps={mealProps}/>} exact={true}/>
                </div>
            </Router>
            
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
import React, { Component } from 'react';
import { connect } from 'react-redux';
import uuid from 'uuid';
import MealForm from '../components/meal/MealForm';
import MealItems from '../components/meal/MealItems';
import { addMeal, editMeal } from '../actions/meal';
import { addToItemsAll } from '../actions/items';

class MealPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            mealName: props.meal ? props.meal.name : '',
            itemName: '',
            amount: '',
            unit: 'pound(s)',
            itemList: props.meal ? props.meal.itemList : [],
        };
    }

    deleteMealItem = (id) => {
        const newMealList = this.state.itemList.filter(item => item.id !== id);
        this.setState({
            itemList: newMealList,
        });
    };

    itemToEdit = (id) => {
        const selectedItem = this.state.itemList.filter(item => item.id === id)[0];
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

    createItemId = (itemName, itemMap) => {
        if (itemMap.has(itemName)) {
            return itemMap.get(itemName).id;
        } else {
            return uuid();
        }
    }

    findItemAndReplace = (itemName, amount, unit, list) => {
        let newList = list.map(item => {
            if (item.itemName === itemName) {
                item.amount = amount;
                item.unit = unit;
                return item;
            }
            return item;
        });
        return newList;
    }

    checkListForItem = (name, list) => {
        return list.filter(item => item.itemName === name).length > 0;
    }

    addItem = () => {
        const { itemName, amount, unit, itemList } = this.state;
        if (this.checkListForItem(itemName, itemList)) {
            const newList = this.findItemAndReplace(itemName, amount, unit, itemList);
            this.setState({
                itemName: '',
                amount: '',
                unit: 'pound(s)',
                itemList: newList,
            });
            return;
        }
        const { items } = this.props;
        const id = this.createItemId(itemName, items.itemsAll);

        const newItem = {
            id,
            itemName,
            amount,
            unit,
        };

        this.props.addToItemsAll({
            name: itemName,
            item: {
                name: itemName,
                id: id,
            }
        });

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
                    updateMeal={this.props.meal ? this.props.editMeal : this.props.addMeal}
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
        addToItemsAll: (data) => dispatch(addToItemsAll(data)),
        editMeal: (data) => dispatch(editMeal(data)),
        addMeal: (data) => dispatch(addMeal(data)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MealPage);
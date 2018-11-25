import React, { Component } from 'react';
import { connect } from 'react-redux';
import GroceryForm from '../components/grocery/GroceryForm';
import GroceryItems from '../components/grocery/GroceryItems';

class CreateGroceryPage extends Component {
    state = {
        groceryName: "",
        selectedMeal: this.props.meals.mealList[0] || {},
        itemMap: new Map(),
    };

    addMealToMap = () => {
        const { itemMap, selectedMeal } = this.state;
        const CombinedItemsList = selectedMeal.itemList.reduce((a, b) => {
            if (a.has(b.itemName)) {
                const newAmount = Number(a.get(b.itemName).amount) + Number(b.amount);
                const itemCopy = Object.assign({}, b)
                itemCopy.amount = newAmount;
                a.set(itemCopy.itemName, itemCopy);
                return a;
            }
            a.set(b.itemName, b);
            return a;
        }, itemMap);
        this.setState({
            itemMap: CombinedItemsList,
            selectedMeal: this.props.meals.mealList[0],
        })
    };

    selectedMealChange = (e) => {
        const { meals } = this.props;
        const selectedMealName = e.target.value;
        const selectedMeal = meals.mealList.filter(meal => meal.name === selectedMealName);
        this.setState({
            selectedMeal: selectedMeal[0],
        });
    };

    groceryNameChange = (e) => {
        const groceryName = e.target.value;
        this.setState({ groceryName });
    };

    render() {
        return (
            <div className="grocery">
                <GroceryForm 
                    meals={this.props.meals}
                    selectedMeal={this.state.selectedMeal}
                    groceryName={this.state.groceryName}
                    selectedMealChange={this.selectedMealChange}
                    groceryNameChange={this.groceryNameChange}
                    addMealToMap={this.addMealToMap}
                />
                <GroceryItems 
                    groceryName={this.state.groceryName}
                />
            </div>
        )
    }

};

const mapStateToProps = (state) => {
    return {
        meals: state.meals,
    }
};

export default connect(mapStateToProps)(CreateGroceryPage);
import React from "react";
import { connect } from "react-redux";
import Meal from "../components/Meal";

export const MealListsPage = props => {
  return (
    <div className="list__container">
      <div className="list">
        {props.meals.mealList.map(meal => {
          return (
            <Meal
              name={meal.name}
              id={meal.id}
              itemList={meal.itemList}
              key={meal.id}
            />
          );
        })}
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    meals: state.meals
  };
};

export default connect(mapStateToProps)(MealListsPage);

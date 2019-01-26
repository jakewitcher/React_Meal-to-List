import React from "react";
import { connect } from "react-redux";
import MealItems from "../components/meal/MealItems";

export const MealDetailsPage = props => {
  return (
    <div className="details__container">
      <div className="details">
        <MealItems
          mealName={props.meal.name}
          itemList={props.meal.itemList}
          isDetails={true}
        />
      </div>
    </div>
  );
};

const mapStateToProps = (state, props) => {
  return {
    meals: state.meals,
    meal: state.meals.mealList.filter(
      meal => meal.id === props.match.params.mealId
    )[0]
  };
};

export default connect(mapStateToProps)(MealDetailsPage);

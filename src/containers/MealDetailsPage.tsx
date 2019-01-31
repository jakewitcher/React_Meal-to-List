import React from "react";
import { connect } from "react-redux";
import MealItems from "../components/MealItems";
import { Item } from "../store/item/types";

interface IMealDetailsPageProps {
  meal: {
    itemList: Item[];
    name: string;
    id: string;
  };
}

export const MealDetailsPage: React.FC<IMealDetailsPageProps> = props => {
  return (
    <div className="details__container">
      <div className="details">
        <MealItems
          mealName={props.meal.name}
          itemList={props.meal.itemList}
          isDetails={true}
          deleteMealItem={null}
          itemToEdit={null}
        />
      </div>
    </div>
  );
};

const mapStateToProps = (state: any, props: any) => {
  return {
    meals: state.meals,
    meal: state.meals.mealList.filter(
      (meal: any) => meal.id === props.match.params.mealId
    )[0]
  };
};

export default connect(mapStateToProps)(MealDetailsPage);

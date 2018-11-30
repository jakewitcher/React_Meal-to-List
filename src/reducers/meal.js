import { defaultMealsList } from './seed';

// const mealDefaultState = {
//     mealList: [],
// };

export default (state = { mealList: defaultMealsList }, action) => {
    switch (action.type) {

        case 'ADD_MEAL':
            return {
                ...state,
                mealList: [...state.mealList, action.meal],
            };

        case 'DELETE_MEAL':
            const newMealList = state.mealList.filter(({ id }) => id !== action.id);
            return {
                mealList: newMealList,
            };
            
        case 'EDIT_MEAL':
            const editedMealList = state.mealList.map((meal) => {
                if (meal.id === action.meal.id) {
                    meal = action.meal;
                    return meal;
                }
                return meal;
            });
            return editedMealList;

        default:
            return state;
    }
}
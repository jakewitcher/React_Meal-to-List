const mealDefaultState = [];

export default (state = { mealList: mealDefaultState }, action) => {
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
            return {
                mealList: editedMealList
            };

        case 'SET_MEAL':
            return {
                mealList: action.meals
            };

        default:
            return state;
    }
}
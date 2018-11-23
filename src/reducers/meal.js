const mealDefaultState = {
    mealList: [],
};

export default (state = mealDefaultState, action) => {
    switch (action.type) {
        case 'ADD_MEAL':
            return {
                ...state,
                mealList: [...state.mealList, action.meal]
            };
        default:
            return state;
    }
}
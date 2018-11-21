const mealListDefaultState = [];

export default (state = mealListDefaultState, action) => {
    switch (action.type) {
        case 'ADD_MEAL':
            return [
                ...state,
                action.meal,
            ];
        default:
            return state;
    }
};
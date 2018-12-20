export const onAddMealAsync = (
    {
        name = '',
        itemList = [],
    } = {}
) => ({
    type: 'ADD_MEAL_ASYNC',
    meal: {
        name,
        itemList,
    }
});

export const onDeleteMealAsync = (id = '') => ({
    type: 'DELETE_MEAL_ASYNC',
    id,
});

export const onEditMealAsync = (
    {
        name = '',
        id = '',
        itemList = [],
    } = {}
) => ({
    type: 'EDIT_MEAL_ASYNC',
    meal: {
        id,
        name,
        itemList,
    }
});
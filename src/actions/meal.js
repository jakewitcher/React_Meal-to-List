import uuid from 'uuid';

export const addMeal = (
    {
        name = '',
        itemList = [],
    } = {}
) => ({
    type: 'ADD_MEAL',
    meal: {
        id: uuid(),
        name,
        itemList,
    }
});
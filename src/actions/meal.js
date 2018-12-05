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

export const deleteMeal = (id = '') => ({
    type: 'DELETE_MEAL',
    id,
});

export const editMeal = (
    {
        name = '',
        id = '',
        itemList = [],
    } = {}
) => ({
    type: 'EDIT_MEAL',
    meal: {
        id,
        name,
        itemList,
    }
});
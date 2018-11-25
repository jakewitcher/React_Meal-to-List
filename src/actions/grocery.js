import uuid from 'uuid';

export const addGrocery = (
    {
        name = '',
        items = {},
    } = {}
) => ({
    type: 'ADD_GROCERY',
    grocery: {
        id: uuid(),
        name,
        items,
    }
});
import uuid from 'uuid';

export const addGrocery = (
    {
        name = '',
        items = [],
    } = {}
) => ({
    type: 'ADD_GROCERY',
    grocery: {
        id: uuid(),
        name,
        items,
    }
});

export const deleteGrocery = (id = '') => ({
    type: 'DELETE_GROCERY',
    id,
});

export const editGrocery = (
    {
        name = '',
        id = '',
        items = [],
    } = {}
) => ({
    type: 'EDIT_GROCERY',
    grocery: {
        id,
        name,
        items,
    }
});
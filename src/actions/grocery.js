export const onAddGroceryAsync = (
    {
        name = '',
        items = [],
    } = {}
) => ({
    type: 'ADD_GROCERY_ASYNC',
    grocery: {
        name,
        items,
    }
});

export const onDeleteGroceryAsync = (id = '') => ({
    type: 'DELETE_GROCERY_ASYNC',
    id,
});

export const onEditGroceryAsync = (
    {
        name = '',
        id = '',
        items = [],
    } = {}
) => ({
    type: 'EDIT_GROCERY_ASYNC',
    grocery: {
        id,
        name,
        items,
    }
});

export const onSetGroceryAsync = () => ({
    type: 'SET_GROCERY_ASYNC',
});
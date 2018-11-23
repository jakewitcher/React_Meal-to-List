const itemsAllDefaultState = {
    itemsAll: new Map()
};

export default (state = itemsAllDefaultState, action) => {
    switch(action.type) {
        case 'ADD_ITEM':
            state.itemsAll.set(action.name, action.item);
            return state;
        default:
            return state; 
    }
}
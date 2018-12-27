export default (state={}, action) => {
    switch(action.type) {
        case 'ON_LOGIN':
            return {
                uid: action.uid,
            }
        case 'ON_LOGOUT':
            return {}
        default:
            return state;
    }
}
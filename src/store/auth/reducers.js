export default (state = {}, action) => {
  switch (action.type) {
    case "@@auth/ON_LOGIN":
      return {
        uid: action.uid
      };
    case "@@auth/ON_LOGOUT":
      return {};
    default:
      return state;
  }
};

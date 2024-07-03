const initialState = [];

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_USERS':
      return action.payload;
    case 'ADD_USER':
      return [...state, action.payload];
    case 'DELETE_USER':
      return state.filter(user => user.id !== action.payload);
    case 'UPDATE_USER':
      return state.map(user => user.id === action.payload.id ? action.payload : user);
    default:
      return state;
  }
};

export default userReducer;

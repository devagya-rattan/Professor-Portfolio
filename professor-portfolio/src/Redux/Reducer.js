import { USERS_ARRAY,LOGIN_ARRAY } from "./Type";
const initialState = {
  usersData: [],
};
const loginState = {
  loginData: [],
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case USERS_ARRAY:
      return {
        ...state,
        usersData: [...state.usersData, action.payload], // Add the new user to the existing array
      };
    default:
      return state;
  }
};

export const loginReducer = (state = loginState, action) => {
  switch (action.type) {
    case LOGIN_ARRAY:
      return {
        ...state,
        loginData: [...state.loginData, action.payload], // Add the new login data to the existing array
      };
    default:
      return state;
  }
};

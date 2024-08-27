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
        usersData: [action.payload],
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
        loginData: [action.payload],
      };
    default:
      return state;
  }
};

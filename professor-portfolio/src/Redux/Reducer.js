import { USERS_ARRAY } from "./Type";
const initialState = {
  usersData: [],
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

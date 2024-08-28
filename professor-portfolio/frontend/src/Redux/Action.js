import { USERS_ARRAY,LOGIN_ARRAY } from "./Type";
export const userActions = (userDetails) => ({
  type: USERS_ARRAY,
  payload: userDetails,
});
export const loginActions = (loginDetails) => ({
  type: LOGIN_ARRAY,
  payload: loginDetails,
});

// import { legacy_createStore as createStore } from "redux";
// import { userReducer, loginReducer } from "./Reducer";

// // Constants
// const LOGIN_EXPIRY_TIME_MS = 10000; // 10 seconds in milliseconds

// // Function to load state from localStorage
// const loadState = () => {
//   try {
//     const serializedState = localStorage.getItem("state");
//     const loginSavedTime = localStorage.getItem("loginSavedTime");

//     if (serializedState === null) {
//       return undefined; // Return undefined to let reducers initialize state
//     }

//     const currentTime = Date.now();
//     const loginTimeElapsed = currentTime - parseInt(loginSavedTime, 10);

//     const loadedState = JSON.parse(serializedState);

//     // Check if login state has expired
//     if (loginTimeElapsed > LOGIN_EXPIRY_TIME_MS) {
//       return {
//         ...loadedState,
//         loginState: undefined, // Clear login state if expired
//       };
//     }

//     return loadedState;
//   } catch (err) {
//     console.error("Could not load state", err);
//     return undefined;
//   }
// };

// // Function to save state to localStorage
// const saveState = (state) => {
//   try {
//     const stateToPersist = {
//       userState: state.userState, // Persist userState normally
//       loginState: state.loginState, // Persist loginState but with expiry
//     };
//     const serializedState = JSON.stringify(stateToPersist);
//     const currentTime = Date.now();

//     localStorage.setItem("state", serializedState);
//     localStorage.setItem("loginSavedTime", currentTime.toString()); // Save login state time
//   } catch (err) {
//     console.error("Could not save state", err);
//   }
// };

// // Initial state
// const persistedState = loadState();

// // Root reducer combining both reducers manually
// const rootReducer = (state = {}, action) => ({
//   userState: userReducer(state.userState, action),
//   loginState: loginReducer(state.loginState, action),
// });

// // Create the Redux store with the persisted state
// const store = createStore(
//   rootReducer,
//   persistedState // Load persisted state including login state with expiry
// );

// // Subscribe to the store to save the state to localStorage whenever it changes
// store.subscribe(() => {
//   saveState(store.getState()); // Save both userState and loginState
// });

// export default store;


// -----------------------------------------?????????????????>>>>>>>>>>>>>>>>>>>>

import { legacy_createStore as createStore } from "redux";
import { userReducer, loginReducer } from "./Reducer";

// Constants
const LOGIN_EXPIRY_TIME_MS = 6 * 60 * 60 * 1000; // 10 seconds in milliseconds

// Function to load state from localStorage
const loadState = () => {
  try {
    const serializedState = localStorage.getItem("reduxState");
    const loginSavedTime = localStorage.getItem("loginExpiryTime");

    if (serializedState === null) {
      return undefined; // Return undefined to let reducers initialize state
    }

    const currentTime = Date.now();
    const loginTimeElapsed = currentTime - parseInt(loginSavedTime, 10);

    const loadedState = JSON.parse(serializedState);

    // Check if login state has expired
    if (loginTimeElapsed > LOGIN_EXPIRY_TIME_MS) {
      return {
        ...loadedState,
        loginState: undefined, // Clear login state if expired
      };
    }

    return loadedState;
  } catch (err) {
    console.error("Could not load state", err);
    return undefined;
  }
};

// Function to save state to localStorage
const saveState = (state) => {
  try {
    const stateToPersist = {
      userState: state.userState, // Persist userState normally
      loginState: state.loginState, // Persist loginState but with expiry
    };
    const serializedState = JSON.stringify(stateToPersist);
    const currentTime = Date.now();

    localStorage.setItem("reduxState", serializedState);
    localStorage.setItem("loginExpiryTime", currentTime.toString()); // Save login state time
  } catch (err) {
    console.error("Could not save state", err);
  }
};

// Initial state
const persistedState = loadState();

// Root reducer combining both reducers manually
const rootReducer = (state = {}, action) => ({
  userState: userReducer(state.userState, action),
  loginState: loginReducer(state.loginState, action),
});

// Create the Redux store with the persisted state
const store = createStore(
  rootReducer,
  persistedState // Load persisted state including login state with expiry
);

// Subscribe to the store to save the state to localStorage whenever it changes
store.subscribe(() => {
  saveState(store.getState()); // Save both userState and loginState
});


export default store;
=======
export default store;


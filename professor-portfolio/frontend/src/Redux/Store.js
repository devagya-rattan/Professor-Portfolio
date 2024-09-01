// import { legacy_createStore as createStore, combineReducers } from "redux";
// import { userReducer, loginReducer } from "./Reducer";

// // Function to load state from localStorage
// const loadState = () => {
//   try {
//     const serializedState = localStorage.getItem("reduxState");
//     if (serializedState === null) {
//       return undefined; // Return undefined to let reducers initialize state
//     }
//     return JSON.parse(serializedState);
//   } catch (err) {
//     console.error("Could not load state", err);
//     return undefined;
//   }
// };

// // Function to save state to localStorage
// const saveState = (state) => {
//   try {
//     const serializedState = JSON.stringify(state);
//     localStorage.setItem("reduxState", serializedState);
//   } catch (err) {
//     console.error("Could not save state", err);
//   }
// };

// // Function to clear localStorage
// const clearLocalStorage = () => {
//   localStorage.clear();
// };

// // Root reducer combining both reducers
// const rootReducer = combineReducers({
//   userState: userReducer,
//   loginState: loginReducer,
// });

// // Clear localStorage when initializing the store
// clearLocalStorage();

// // Create the Redux store with the persisted state
// const persistedState = loadState();
// const store = createStore(
//   rootReducer,
//   persistedState // Load persisted state
// );

// // Function to clear both userState and loginState
// const clearState = () => {
//   store.dispatch({ type: "CLEAR_STATE" }); // Dispatch an action to clear the state
//   clearLocalStorage(); // Clear the localStorage
// };

// // Subscribe to the store to save the state to localStorage whenever it changes
// store.subscribe(() => {
//   const { userState, loginState } = store.getState(); // Get userState and loginState

//   // Save the state to localStorage
//   saveState(store.getState());

//   // If userState or loginState is an empty array, clear state and localStorage
//   if (
//     Array.isArray(userState) &&
//     userState.length === 0 &&
//     Array.isArray(loginState) &&
//     loginState.length === 0
//   ) {
//     clearState();
//   }
// });

// export default store;

import { legacy_createStore as createStore, combineReducers } from "redux";
import { userReducer, loginReducer } from "./Reducer";

// Function to load state from localStorage
const loadState = () => {
  try {
    // Retrieve serialized states from localStorage
    const serializedUserState = localStorage.getItem("userState");
    const serializedLoginState = localStorage.getItem("loginState");

    // Deserialize state or use undefined if not found
    const userState = serializedUserState ? JSON.parse(serializedUserState) : undefined;
    const loginState = serializedLoginState ? JSON.parse(serializedLoginState) : undefined;

    return { userState, loginState }; // Return the loaded states
  } catch (err) {
    console.error("Could not load state", err);
    return undefined; // Return undefined to let reducers initialize state
  }
};

// Function to save state to localStorage
const saveState = (state) => {
  try {
    const { userState, loginState } = state;

    // Save userState to localStorage indefinitely
    if (userState !== undefined) {
      const serializedUserState = JSON.stringify(userState);
      localStorage.setItem("userState", serializedUserState);
    }

    // Save loginState to localStorage
    if (loginState !== undefined) {
      const serializedLoginState = JSON.stringify(loginState);
      localStorage.setItem("loginState", serializedLoginState);
    }
  } catch (err) {
    console.error("Could not save state", err);
  }
};

// Function to expire loginState after a certain time (3 seconds)
const expireLoginState = () => {
  setTimeout(() => {
    // Remove loginState from localStorage
    localStorage.removeItem("loginState");

    // Dispatch action to clear loginState in the Redux store
    store.dispatch({ type: "CLEAR_LOGIN_STATE" });
  }, 3000); // 3 seconds timeout
};

// Root reducer combining both reducers
const rootReducer = combineReducers({
  userState: userReducer,
  loginState: loginReducer,
});

// Create the Redux store with the persisted state
const persistedState = loadState();
const store = createStore(
  rootReducer,
  persistedState // Load persisted state from localStorage
);

// Subscribe to the store to save the state to localStorage whenever it changes
store.subscribe(() => {
  const state = store.getState(); // Get the current state from the store
  saveState(state); // Save the current state to localStorage

  // If loginState exists, set an expiration timeout
  if (state.loginState) {
    expireLoginState();
  }
});

export default store;





// import { legacy_createStore as createStore, combineReducers } from "redux";
// import { userReducer, loginReducer } from "./Reducer";

// // Constants for expiration times
// const LOGIN_STATE_EXPIRATION = 1000; // 1 minute in milliseconds

// // Function to load state from localStorage
// const loadState = () => {
//   try {
//     const serializedUserState = localStorage.getItem("userState");
//     const serializedLoginState = localStorage.getItem("loginState");

//     const userState = serializedUserState ? JSON.parse(serializedUserState) : undefined;

//     // Check if loginState has expired
//     const loginStateData = serializedLoginState ? JSON.parse(serializedLoginState) : undefined;
//     let loginState;
//     if (loginStateData) {
//       const { state, timestamp } = loginStateData;
//       if (Date.now() - timestamp < LOGIN_STATE_EXPIRATION) {
//         loginState = state; // Load login state if not expired
//       } else {
//         loginState = undefined; // Reset login state if expired
//         localStorage.removeItem("loginState"); // Remove expired login state
//       }
//     }

//     return { userState, loginState };
//   } catch (err) {
//     console.error("Could not load state", err);
//     return undefined;
//   }
// };

// // Function to save state to localStorage
// const saveState = (state) => {
//   try {
//     const { userState, loginState } = state;

//     // Save userState indefinitely
//     if (userState) {
//       const serializedUserState = JSON.stringify(userState);
//       localStorage.setItem("userState", serializedUserState);
//     }

//     // Save loginState with a timestamp for expiration
//     if (loginState) {
//       const serializedLoginState = JSON.stringify({
//         state: loginState,
//         timestamp: Date.now(),
//       });
//       localStorage.setItem("loginState", serializedLoginState);
//     }
//   } catch (err) {
//     console.error("Could not save state", err);
//   }
// };

// // Function to clear localStorage
// const clearLocalStorage = () => {
//   localStorage.removeItem("userState");
//   localStorage.removeItem("loginState");
// };

// // Root reducer combining both reducers
// const rootReducer = combineReducers({
//   userState: userReducer,
//   loginState: loginReducer,
// });

// // Clear localStorage when initializing the store
// clearLocalStorage();

// // Create the Redux store with the persisted state
// const persistedState = loadState();
// const store = createStore(
//   rootReducer,
//   persistedState // Load persisted state
// );

// // Function to clear both userState and loginState
// const clearState = () => {
//   store.dispatch({ type: "CLEAR_STATE" }); // Dispatch an action to clear the state
//   clearLocalStorage(); // Clear the localStorage
// };

// // Subscribe to the store to save the state to localStorage whenever it changes
// store.subscribe(() => {
//   const { userState, loginState } = store.getState(); // Get userState and loginState

//   // Save the state to localStorage
//   saveState({ userState, loginState });

//   // If userState or loginState is an empty array, clear state and localStorage
//   if (
//     Array.isArray(userState) &&
//     userState.length === 0 &&
//     Array.isArray(loginState) &&
//     loginState.length === 0
//   ) {
//     clearState();
//   }
// });

// export default store;

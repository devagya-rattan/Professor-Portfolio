import { legacy_createStore as createStore, combineReducers } from "redux";
import { userReducer, loginReducer } from "./Reducer";

// Function to load state from localStorage
const loadState = () => {
  try {
    const serializedState = localStorage.getItem("reduxState");
    if (serializedState === null) {
      return undefined; // Return undefined to let reducers initialize state
    }
    return JSON.parse(serializedState);
  } catch (err) {
    console.error("Could not load state", err);
    return undefined;
  }
};

// Function to save state to localStorage
const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("reduxState", serializedState);
  } catch (err) {
    console.error("Could not save state", err);
  }
};

// Function to clear localStorage
const clearLocalStorage = () => {
  localStorage.clear();
};

// Root reducer combining both reducers
const rootReducer = combineReducers({
  userState: userReducer,
  loginState: loginReducer,
});

// Clear localStorage when initializing the store
clearLocalStorage();

// Create the Redux store with the persisted state
const persistedState = loadState();
const store = createStore(
  rootReducer,
  persistedState // Load persisted state
);

// Function to clear both userState and loginState after 10 seconds
const clearStateAfterTimeout = () => {
  setTimeout(() => {
    // Clear the state by dispatching an action with initial state
    store.dispatch({ type: 'CLEAR_STATE' });
    // Clear localStorage
    clearLocalStorage();
  }, 10000); // 10 seconds
};

// Subscribe to the store to save the state to localStorage whenever it changes
store.subscribe(() => {
  saveState(store.getState()); // Save both userState and loginState
  clearStateAfterTimeout(); // Set timeout to clear state and localStorage
});

export default store;

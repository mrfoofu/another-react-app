import { createStore } from "redux";
import allReducers from "../reducers";

const store = createStore(
    allReducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

// Display it in the console
store.subscribe(() => console.log(store.getState()))

export default store;

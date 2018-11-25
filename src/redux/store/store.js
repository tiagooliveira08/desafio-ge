import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reduxMulti from "redux-multi";
import reduxPromise from "redux-promise";
import   rootReducer    from "./../ducks/index.js";
const store = createStore(rootReducer, applyMiddleware(thunk, reduxMulti, reduxPromise));
export default store;
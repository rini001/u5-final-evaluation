import { applyMiddleware, compose, createStore } from "redux";
import combineReducers from "./reducer";
import thunk from "redux-thunk"
const combineCompose = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(
	combineReducers,
	combineCompose(applyMiddleware(thunk))
);
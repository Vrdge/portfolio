import { applyMiddleware, combineReducers, compose } from "redux";
import AppReducer from "./Reducers/AppReduces";
import thunk from "redux-thunk";
import { configureStore } from "@reduxjs/toolkit";





let reducer = combineReducers({
    App: AppReducer,
})


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = configureStore({reducer}, /* preloadedState, */ composeEnhancers(
    applyMiddleware(thunk)
));

export default store
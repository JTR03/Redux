import { applyMiddleware, combineReducers, createStore } from "redux";
import { addReducer } from "./reducer";
import thunk from "redux-thunk" 

const rootReducer = combineReducers({addReducer})

export const Store = createStore(rootReducer, applyMiddleware(thunk));
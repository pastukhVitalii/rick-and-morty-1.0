import {applyMiddleware, combineReducers, createStore} from "redux";
import {characterReducer} from "./character-reducer";
import thunk from "redux-thunk";

let rootReducer = combineReducers({
    character: characterReducer,
})

export type AppStateType = ReturnType<typeof rootReducer>

const store = createStore(rootReducer, applyMiddleware(thunk));
export default store;

// @ts-ignore
window.store = store
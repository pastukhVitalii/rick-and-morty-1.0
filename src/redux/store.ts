import {applyMiddleware, combineReducers, createStore} from "redux";
import {characterReducer} from "./character-reducer";
import thunk from "redux-thunk";
import {episodeReducer} from "./episode-reducer";

let rootReducer = combineReducers({
    character: characterReducer,
    episode: episodeReducer
})

export type AppStateType = ReturnType<typeof rootReducer>

const store = createStore(rootReducer, applyMiddleware(thunk));
export default store;

// @ts-ignore
window.store = store
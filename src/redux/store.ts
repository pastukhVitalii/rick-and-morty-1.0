import {applyMiddleware, combineReducers, createStore} from "redux";
import {characterReducer} from "./character-reducer";
import thunk from "redux-thunk";
import {episodeReducer} from "./episode-reducer";
import {watchListReducer} from "./watchList-reducer";
import {locationReducer} from "./location-reducer";

let rootReducer = combineReducers({
    character: characterReducer,
    episode: episodeReducer,
    location: locationReducer,
    myWatchList: watchListReducer,
})

export type AppStateType = ReturnType<typeof rootReducer>

const store = createStore(rootReducer, applyMiddleware(thunk));
export default store;

// @ts-ignore
window.store = store
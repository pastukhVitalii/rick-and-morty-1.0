import {Dispatch} from 'redux'
import {characterApi, CharacterType, ResType} from '../api/character-api'
import {episodeApi, EpisodeType, ResEpisodesType} from "../api/episodes-api";

const initialState: ResEpisodesType = {
    episodes: []
}

export const episodeReducer = (state: ResEpisodesType = initialState, action: ActionsType): ResEpisodesType => {
    switch (action.type) {
        case "SET-EPISODES":
            return {
                ...state,
                episodes: action.episodes
            }
        default:
            return state
    }
}

// actions

export const setEpisodesAC = (episodes: Array<EpisodeType>) => ({type: 'SET-EPISODES', episodes} as const)

// thunks
export const setEpisodesTC = () => {
    return (dispatch: ThunkDispatch) => {
        episodeApi.getEpisodes()
            .then((res) => {
                dispatch(setEpisodesAC(res.data.results))
            })
            .catch(error => {
                console.log(error, dispatch);
            })
    }
}

export const setFilteredEpisodesTC = (e: string) => {
    return (dispatch: ThunkDispatch) => {
        episodeApi.getFilteredEpisodes(e)
            .then((res) => {
                dispatch(setEpisodesAC(res.data.results))
            })
            .catch(error => {
                console.log(error, dispatch);
            })
    }
}
export const setPagesOfEpisodesTC = (pages: Array<number>) => {
    return (dispatch: ThunkDispatch) => {
        episodeApi.getPagesOfEpisodes(pages)
            .then((res) => {
                dispatch(setEpisodesAC(res.data))
            })
            .catch(error => {
                console.log(error, dispatch);
            })
    }
}

// types

export type SetEpisodesActionType = ReturnType<typeof setEpisodesAC>;
type ActionsType = SetEpisodesActionType

type ThunkDispatch = Dispatch<ActionsType>

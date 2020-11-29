import {Dispatch} from 'redux'
import {characterApi, CharacterType, ResType} from '../api/character-api'

const initialState: ResType = {
    characters: []
}

export const characterReducer = (state: ResType = initialState, action: ActionsType): ResType => {
    switch (action.type) {
        case "SET-CHARACTERS":
            return {
                ...state,
                characters: action.characters
            }
        default:
            return state
    }
}

// actions

export const setCharactersAC = (characters: Array<CharacterType>) => ({type: 'SET-CHARACTERS', characters} as const)

// thunks
export const setCharactersTC = () => {
    return (dispatch: ThunkDispatch) => {
        characterApi.getCharacters()
            .then((res) => {
                dispatch(setCharactersAC(res.data.results))
            })
            .catch(error => {
                console.log(error, dispatch);
            })
    }
}

export const setFilteredCharactersTC = (statusApi: string) => {
    return (dispatch: ThunkDispatch) => {
        characterApi.getFilteredCharacters(statusApi)
            .then((res) => {
                dispatch(setCharactersAC(res.data.results))
            })
            .catch(error => {
                console.log(error, dispatch);
            })
    }
}

// types

export type SetCharactersActionType = ReturnType<typeof setCharactersAC>;
type ActionsType = SetCharactersActionType

type ThunkDispatch = Dispatch<ActionsType>

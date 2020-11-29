import {Dispatch} from 'redux'
import {locationApi, LocationType, ResLocationsType} from "../api/location-api";

const initialState: ResLocationsType = {
    locations: []
}

export const locationReducer = (state: ResLocationsType = initialState, action: ActionsType): ResLocationsType => {
    switch (action.type) {
        case "SET-LOCATIONS":
            return {
                ...state,
                locations: action.locations
            }
        default:
            return state
    }
}

// actions

export const setLocationsAC = (locations: Array<LocationType>) => ({type: 'SET-LOCATIONS', locations} as const)

// thunks
export const setLocationTC = () => {
    return (dispatch: ThunkDispatch) => {
        locationApi.getLocations()
            .then((res) => {
                dispatch(setLocationsAC(res.data.results))
            })
            .catch(error => {
                console.log(error, dispatch);
            })
    }
}

export const setFilteredLocationsNameTC = (e: string) => {
    return (dispatch: ThunkDispatch) => {
        locationApi.getFilteredLocationsByName(e)
            .then((res) => {
                dispatch(setLocationsAC(res.data.results))
            })
            .catch(error => {
                console.log(error, dispatch);
            })
    }
}
export const setFilteredLocationsTypeTC = (e: string) => {
    return (dispatch: ThunkDispatch) => {
        locationApi.getFilteredLocationsByType(e)
            .then((res) => {
                dispatch(setLocationsAC(res.data.results))
            })
            .catch(error => {
                console.log(error, dispatch);
            })
    }
}
export const setFilteredLocationsDimensionTC = (e: string) => {
    return (dispatch: ThunkDispatch) => {
        locationApi.getFilteredLocationsByDimension(e)
            .then((res) => {
                dispatch(setLocationsAC(res.data.results))
            })
            .catch(error => {
                console.log(error, dispatch);
            })
    }
}

// types

export type SetLocationsActionType = ReturnType<typeof setLocationsAC>;
type ActionsType = SetLocationsActionType;

type ThunkDispatch = Dispatch<ActionsType>;

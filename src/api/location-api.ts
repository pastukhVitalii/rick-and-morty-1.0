import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://rickandmortyapi.com/api/',
    // ...settings
})

// api
export const locationApi = {
    getLocations() {
        const promise = instance.get<ResponseType>(`location/`);
        return promise;
    },
    getFilteredLocationsByName(e: string) {
        const promise = instance.get<ResponseType>(`location/?name=${e}`);
        return promise;
    },
    getFilteredLocationsByType(e: string) {
        const promise = instance.get<ResponseType>(`location/?type=${e}`);
        return promise;
    },
    getFilteredLocationsByDimension(e: string) {
        const promise = instance.get<ResponseType>(`location/?dimension=${e}`);
        return promise;
    },
}

// types
export type ResponseType = {
    results: Array<LocationType>
}

export type ResLocationsType = {
    locations: Array<LocationType>
}

export type LocationType = {
    id: string
    name: string
    type: string
    dimension: string
    url: string
    created: string
    residents: Array<string>
}

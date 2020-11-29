import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://rickandmortyapi.com/api/',
    // ...settings
})

// api
export const episodeApi = {
    getEpisodes() {
        const promise = instance.get<ResponseType>(`episode/`);
        return promise;
    },
    getFilteredEpisodes(e: string) {
        const promise = instance.get<ResponseType>(`episode/?name=${e}`);
        return promise;
    },
}
// types
export type ResponseType = {
    results: Array<EpisodeType>
}

export type ResEpisodesType = {
    episodes: Array<EpisodeType>
}
export type EpisodeType = {
    id: string
    name: string
    air_date: string
    episode: string
    url: string
    created: string
    characters: Array<string>
}

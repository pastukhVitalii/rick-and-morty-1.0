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
    /*getFilteredCharacters(statusApi: string) {
        let filterStatusApi = '';
        let filterSpeciesApi = '';
        let genderStatusApi = '';
        if (statusApi.toString() === '10') {
            filterStatusApi = 'status=alive&'
        } else if (statusApi.toString() === '20') {
            filterStatusApi = 'status=dead&'
        } else if (statusApi.toString() === '30') {
            filterStatusApi = 'status=unknown&'
        } else if (statusApi.toString() === '40') {
            filterSpeciesApi = 'species=Human&'
        } else if (statusApi.toString() === '50') {
            filterSpeciesApi = 'species=Alien&'
        } else if (statusApi.toString() === '60') {
            filterSpeciesApi = 'species=Humanoid&'
        } else if (statusApi.toString() === '70') {
            filterSpeciesApi = 'species=Poopybutthole&'
        } else if (statusApi.toString() === '80') {
            filterSpeciesApi = 'species=Mythological Creature&'
        } else if (statusApi.toString() === '90') {
            filterSpeciesApi = 'species=Animal&'
        } else if (statusApi.toString() === '100') {
            filterSpeciesApi = 'species=Robot&'
        } else if (statusApi.toString() === '110') {
            filterSpeciesApi = 'species=Cronenberg&'
        } else if (statusApi.toString() === '120') {
            filterSpeciesApi = 'species=Diseas&'
        } else if (statusApi.toString() === '130') {
            filterSpeciesApi = 'species=unknown&'
        } else if (statusApi.toString() === '140') {
            genderStatusApi = 'gender=male&'
        } else if (statusApi.toString() === '150') {
            genderStatusApi = 'gender=female&'
        } else if (statusApi.toString() === '160') {
            genderStatusApi = 'gender=unknown&'
        }
        const promise = instance.get<ResponseType>(`episode/?${filterStatusApi}${filterSpeciesApi}${genderStatusApi}`);
        return promise;
    },
}*/

// types
}
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

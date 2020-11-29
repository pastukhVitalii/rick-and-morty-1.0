import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://rickandmortyapi.com/api/',
    // ...settings
})

export type StatusApiType = {
    statusApi?: 'string'
}

// api
export const characterApi = {
    getCharacters() {

        const promise = instance.get<ResponseType>(`character/`);
        return promise;
    },
    getFilteredCharacters(statusApi: string) {
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
        const promise = instance.get<ResponseType>(`character/?${filterStatusApi}${filterSpeciesApi}${genderStatusApi}`);
        return promise;
    },
}

// types

export type ResponseType = {
    results: Array<CharacterType>
}

export type ResType = {
    characters: Array<CharacterType>
}
export type CharacterType = {
    id: string
    name: string
    status: string
    image: string
    species: string
    gender: string
    type?: string
    origin?: {
        "name": string
        "url": string
    },
    location?: {
        name: string
        url: string
    },
    episode?: Array<string>
    url?: string
    created?: string
}
/*export type ResponseType<D = {}> = {
    resultCode: number
    messages: Array<string>
    data: D
}
export enum TaskStatuses {
    New = 0,
    InProgress = 1,
    Completed = 2,
    Draft = 3
}
export enum TaskPriorities {
    Low = 0,
    Middle = 1,
    Hi = 2,
    Urgently = 3,
    Later = 4
}*/
/*export type TaskType = {
    description: string
    title: string
    status: TaskStatuses
    priority: TaskPriorities
    startDate: string
    deadline: string
    id: string
    todoListId: string
    order: number
    addedDate: string
}
export type UpdateTaskModelType = {
    title: string
    description: string
    status: TaskStatuses
    priority: TaskPriorities
    startDate: string
    deadline: string
}*/
/*type GetTasksResponse = {
    error: string | null
    totalCount: number
    items: TaskType[]
}*/

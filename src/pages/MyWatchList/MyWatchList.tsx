import React, {useEffect, useState} from 'react';
import {AddItemForm} from "../../Components/AddItemForm/AddItemForm";
import {Episode} from "./Episode";

export type EpisodeListType = {
    id: number
    title: string
    status: boolean
}

export const MyWatchList = React.memo(() => {

    let [episodes, handlerEpisodes] = useState<Array<EpisodeListType>>([])

    const saveLocalStorage = (episodes: Array<EpisodeListType>) => {
        let stateAsString = JSON.stringify(episodes);
        localStorage.setItem('episodes', stateAsString)
    }

    let nextId = 3;

    const restoreState = () => {
        let stateAsString = localStorage.getItem('episodes');
        if (stateAsString) {
            handlerEpisodes(JSON.parse(stateAsString));
        }
    };

    useEffect(() => {
        restoreState()
    }, []);

    const addTask = (title: string) => {
        episodes.forEach(e => {
            if (e.id >= nextId) {
                nextId = e.id + 1
            }
        })
        saveLocalStorage([...episodes, {id: nextId, title: title, status: false}]);
        handlerEpisodes([...episodes, {id: nextId, title: title, status: false}]);
    }

    const removeEpisode = (id: number) => {

        let idE = episodes.findIndex(e => e.id === id);
        let newList = [...episodes.slice(0, idE), ...episodes.slice(idE + 1)];

        saveLocalStorage(newList);
        handlerEpisodes(newList);
    }
    const changeStatusEpisode = (id: number) => {

        let newList = episodes.map(e => {
            if (e.id !== id) {
                return e
            } else {
                return {...e, status: !e.status}
            }
        })
        saveLocalStorage(newList);
        handlerEpisodes(newList);
    }

    return (
        <div style={{paddingTop: '20px'}}>
            <AddItemForm addItem={addTask} disabled={false}/>
            {episodes.map(e => <Episode key={e.id} episode={e} removeEpisode={removeEpisode} changeStatusEpisode={changeStatusEpisode}/>)}
        </div>
    );
})


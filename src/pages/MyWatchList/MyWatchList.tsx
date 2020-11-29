import React, {useEffect, useState} from 'react';
import {AddItemForm} from "../../Components/AddItemForm/AddItemForm";
import {Episode} from "./Episode";

export type EpisodeListType = {
    id: number
    title: string
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
        saveLocalStorage([...episodes, {id: nextId, title: title}]);
        handlerEpisodes([...episodes, {id: nextId, title: title}]);
    }

    const removeEpisode = (id: number) => {

        let idt = episodes.findIndex(e => e.id === id);
        let newList = [...episodes.slice(0, idt), ...episodes.slice(idt + 1)];

        saveLocalStorage(newList);
        handlerEpisodes(newList);
    }

    return (
        <div style={{paddingTop: '20px'}}>
            <AddItemForm addItem={addTask} disabled={false}/>
            {episodes.map(e => <Episode key={e.id} episode={e} removeEpisode={removeEpisode}/>)}
        </div>
    );
})


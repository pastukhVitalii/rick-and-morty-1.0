import React, {useEffect, useState} from 'react';
import {EpisodeItem} from "./EpisodeItem";
import {TextField} from "@material-ui/core";
import {Autocomplete} from "@material-ui/lab";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../redux/store";
import {EpisodeType} from "../../api/episodes-api";
import {setEpisodesTC} from "../../redux/episode-reducer";

export type EpisodeListType = {
    id: number
    title: string
    status: boolean
}

export const MyWatchList = React.memo(() => {

    let [toDoEpisodes, handlerEpisodes] = useState<Array<EpisodeListType>>([]);

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(setEpisodesTC())
    }, [dispatch]);

    const episodes = useSelector<AppStateType, Array<EpisodeType>>(state => state.episode.episodes);

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

    let [error, setError] = useState<string | null>(null)

    const addTask = (title: string) => {
        if (title.trim() !== "") {
            toDoEpisodes.forEach(e => {
                if (e.id >= nextId) {
                    nextId = e.id + 1
                }
            })
            setError(null);
            saveLocalStorage([...toDoEpisodes, {id: nextId, title: title, status: false}]);
            handlerEpisodes([...toDoEpisodes, {id: nextId, title: title, status: false}]);
        } else {
            setError("Title is required");
        }
    }

    const removeEpisode = (id: number) => {

        let idE = toDoEpisodes.findIndex(e => e.id === id);
        let newList = [...toDoEpisodes.slice(0, idE), ...toDoEpisodes.slice(idE + 1)];

        saveLocalStorage(newList);
        handlerEpisodes(newList);
    }
    const changeStatusEpisode = (id: number) => {

        let newList = toDoEpisodes.map(e => {
            if (e.id !== id) {
                return e
            } else {
                return {...e, status: !e.status}
            }
        })
        saveLocalStorage(newList);
        handlerEpisodes(newList);
    }
    console.log(episodes);
    return (
        <div style={{paddingTop: '20px'}}>
            <Autocomplete
                id="combo-box-demo"
                options={episodes}
                getOptionLabel={(option) => option.name}
                onInputChange={(event, newInputValue) => {
                    addTask(newInputValue);
                }}
                style={{width: 300, margin: '0 auto'}}
                renderInput={(params) => <TextField {...params} label="Combo box" variant="outlined"
                                                    helperText={error}/>}
            />
            {toDoEpisodes.map(e => <EpisodeItem key={e.id} episode={e} removeEpisode={removeEpisode}
                                                changeStatusEpisode={changeStatusEpisode}/>)}
        </div>
    );
})


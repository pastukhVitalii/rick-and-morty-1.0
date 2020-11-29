import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from '../../redux/store';
import MyTable from './Table'
import {EpisodeType} from "../../api/episodes-api";
import {setEpisodesTC} from "../../redux/episode-reducer";
import MyInput from "../../Components/Input/Input";

export const Episodes = React.memo(() => {

    const episodes = useSelector<AppStateType, Array<EpisodeType>>(state => state.episode.episodes);

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(setEpisodesTC())
    }, [dispatch]);

    console.log(episodes);
    return (
        <div className="App">
            <MyInput/>
            <MyTable episodes={episodes}/>
        </div>
    );
})


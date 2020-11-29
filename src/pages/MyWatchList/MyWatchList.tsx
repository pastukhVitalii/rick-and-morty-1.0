import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from '../../redux/store';
import {EpisodeType} from "../../api/episodes-api";
import {setEpisodesTC} from "../../redux/episode-reducer";

export const MyWatchList = React.memo(() => {

    const episodes = useSelector<AppStateType, Array<EpisodeType>>(state => state.episode.episodes);

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(setEpisodesTC())
    }, [dispatch]);

    console.log(episodes);
    return (
        <div className="App">
            My watch list
        </div>
    );
})


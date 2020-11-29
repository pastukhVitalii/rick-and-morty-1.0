import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {setCharactersTC} from "../../redux/character-reducer";
import {AppStateType} from '../../redux/store';
import {CharacterType} from "../../api/character-api";
import {MySelect} from "../../Components/Select/Select";
import MyTable from './Table'
import {EpisodeType} from "../../api/episodes-api";
import {setEpisodesTC} from "../../redux/episode-reducer";

export const Episodes = React.memo(() => {

    const episodes = useSelector<AppStateType, Array<EpisodeType>>(state => state.episode.episodes);

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(setEpisodesTC())
    }, [dispatch]);

    console.log(episodes);
    return (
        <div className="App">
            <MySelect filterLabel={'Status'} filterItems={[{value: 10, item: 'Alive'}, {value: 20, item: 'Dead'},
                {value: 30, item: 'unknown'}]}/>
            <MyTable episodes={episodes}/>
        </div>
    );
})


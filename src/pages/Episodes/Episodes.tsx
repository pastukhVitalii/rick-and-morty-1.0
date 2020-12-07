import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from '../../redux/store';
import MyTable from './Table'
import {EpisodeType} from "../../api/episodes-api";
import {setEpisodesTC, setFilteredEpisodesTC, setPagesOfEpisodesTC} from "../../redux/episode-reducer";
import MyInput from "../../Components/Input/Input";
import PaginationControlled from '../../Components/Pagination/Pagination';

export const Episodes = React.memo(() => {

    const episodes = useSelector<AppStateType, Array<EpisodeType>>(state => state.episode.episodes);

    const [page, setPage] = React.useState(1);

    let arrEpisodes: Array<number> = [];

    const pagination = (page: number) => {
        const start = portion * (page - 1);
        const end = portion * page + 1;
        for (let i = start; i <  end; i++  ) {
            arrEpisodes.push(i)
        }
    }

    const dispatch = useDispatch();
    useEffect(() => {
        pagination(page);
        dispatch(setPagesOfEpisodesTC(arrEpisodes));
    }, [dispatch, page]);

    const dispatchThunk = (value: string) => {
        dispatch(setFilteredEpisodesTC(value))
    }

    const allEpisodeCount = 41;
    const portion = 25;
    const pageCount = allEpisodeCount / portion;

    console.log(episodes);
    return (
        <div className="App">
            <MyInput label='Episode name' dispatchThunk={dispatchThunk}/>
            <PaginationControlled page={page} setPage={setPage} pageCount={pageCount} portion={portion}/>
            <MyTable episodes={episodes}/>
        </div>
    );
})


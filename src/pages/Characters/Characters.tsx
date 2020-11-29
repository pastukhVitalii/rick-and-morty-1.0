import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {setCharactersTC} from "../../redux/character-reducer";
import {AppStateType} from '../../redux/store';
import {Cards} from './Cards';
import {CharacterType} from "../../api/character-api";
import {MySelect} from "../../Components/Select/Select";

export const Characters = React.memo(() => {

    const characters = useSelector<AppStateType, Array<CharacterType>>(state => state.character.characters)

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(setCharactersTC())
    }, [dispatch]);

    console.log(characters)
    return (
        <div className="App">
            <MySelect filterLabel={'Status'} filterItems={[{value: 10, item: 'Alive'}, {value: 20, item: 'Dead'},
                {value: 30, item: 'unknown'}]}/>
            <MySelect filterLabel={'Species'} filterItems={[{value: 40, item: 'Human'}, {value: 50, item: 'Alien'},
                {value: 60, item: 'Humanoid'}, {value: 70, item: 'Poopybutthole'}, {value: 80, item: 'Mythological Creature'},
                {value: 90, item: 'Animal'}, {value: 100, item: 'Robot'}, {value: 110, item: 'Cronenberg'},
                {value: 120, item: 'Disease'}, {value: 130, item: 'unknown'}]}/>
            <MySelect filterLabel={'Gender'} filterItems={[{value: 140, item: 'Male'}, {value: 150, item: 'Female'},
                {value: 160, item: 'unknown'}]}/>
            <Cards characters={characters}/>
        </div>
    );
})


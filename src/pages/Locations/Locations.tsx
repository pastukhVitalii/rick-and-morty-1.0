import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from '../../redux/store';
import MyTable from './Table'
import MyInput from "../../Components/Input/Input";
import {LocationType} from "../../api/location-api";
import {
    setFilteredLocationsDimensionTC,
    setFilteredLocationsNameTC,
    setFilteredLocationsTypeTC,
    setLocationTC
} from "../../redux/location-reducer";

export const Locations = React.memo(() => {

    const locations = useSelector<AppStateType, Array<LocationType>>(state => state.location.locations);

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(setLocationTC())
    }, [dispatch]);

    const dispatchThunk1 = (value: string) => {
        dispatch(setFilteredLocationsNameTC(value))
    }
    const dispatchThunk2 = (value: string) => {
        dispatch(setFilteredLocationsTypeTC(value))
    }
    const dispatchThunk3 = (value: string) => {
        dispatch(setFilteredLocationsDimensionTC(value))
    }

    console.log(locations);
    return (
        <div className="App">
            <div style={{display: 'flex', justifyContent: 'center'}}><MyInput label='Location name' dispatchThunk={dispatchThunk1}/>
                <MyInput label='Type' dispatchThunk={dispatchThunk2}/>
                <MyInput label='Dimension' dispatchThunk={dispatchThunk3}/></div>
            <MyTable locations={locations}/>
        </div>
    );
})


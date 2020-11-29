import React from 'react';
import {Grid, Paper} from "@material-ui/core";
import {CharacterType} from "../../api/character-api";
import {MyCard} from "./Card";

type PropsType = {
    characters: Array<CharacterType>
}

export const Cards = React.memo(function (props: PropsType) {
    console.log('render Cards');

    return (
        <>
            <Grid container spacing={1} justify='center'>
                {props.characters.map(c => {
                    return <Paper key={c.id}
                                  style={{backgroundColor: 'blue', margin: '30px', width: '300px', height: '400px'}}>
                        <MyCard character={c}/>
                    </Paper>
                })}
            </Grid>
        </>
    );
})


import React, {ChangeEvent} from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import {useDispatch} from "react-redux";
import {setFilteredEpisodesTC} from "../../redux/episode-reducer";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            '& > *': {
                margin: theme.spacing(1),
                width: '25ch',
            },
        },
    }),
);

export default function MyInput() {
    const classes = useStyles();

    const dispatch = useDispatch();

    const onChange = (event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        // debugger
        console.log(event.currentTarget.value)
        dispatch(setFilteredEpisodesTC(event.currentTarget.value))
    }

    return (
        <form className={classes.root} noValidate autoComplete="off">
            <TextField id="outlined-basic" label="Outlined" variant="outlined" onChange={onChange}/>
        </form>
    );
}
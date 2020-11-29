import React, {ChangeEvent} from 'react';
import {createStyles, makeStyles, Theme} from '@material-ui/core/styles';
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
type PropsType = {
    dispatchThunk: (value: string) => void
    label: string
}
export default function MyInput(props: PropsType) {
    const classes = useStyles();

    const onChange = (event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        const value = event.currentTarget.value;
        props.dispatchThunk(value);
    }

    return (
        <form className={classes.root} noValidate autoComplete="off">
            <TextField id="outlined-basic" label={props.label} variant="outlined" onChange={onChange}/>
        </form>
    );
}
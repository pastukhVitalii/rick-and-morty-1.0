import React, {useEffect} from 'react';
import {makeStyles, createStyles} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Pagination from '@material-ui/lab/Pagination';
import {useDispatch} from "react-redux";
import {setPagesOfEpisodesTC} from "../../redux/episode-reducer";

const useStyles = makeStyles((theme) =>
    createStyles({
        root: {
            '& > * + *': {
                marginTop: theme.spacing(2),
            },
        },
    }),
);

type PropsType = {
    page: number
    setPage: (page: number) => void
    pageCount: number
    portion: number
};

export default function PaginationControlled(props: PropsType) {
    const classes = useStyles();

    // let arrEpisodes: Array<number> = [];
   /* useEffect(() => {
        pagination()
    })*/

    /*const pagination = ({pageCount, portion} = props) => {
        arrEpisodes = new Array(portion).fill(null, portion * (page - 1), portion * (page + 1)).map((_, index) => (index))
    }*/

    const dispatch = useDispatch();
    const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
        props.setPage(value);
        // dispatch(setPagesOfEpisodesTC(arrEpisodes));
    };

    return (
        <div className={classes.root}>
            <Typography>Page: {props.page}</Typography>
            <Pagination count={props.pageCount} page={props.page} onChange={handleChange}/>
        </div>
    );
}
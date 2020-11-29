import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import {EpisodeType} from "../../api/episodes-api";

const useRowStyles = makeStyles({
    root: {
        '& > *': {
            borderBottom: 'unset',
        },
    },
});

/*function createData(
    name: string,
    calories: number,
    fat: number,
    carbs: number,
    protein: number,
    price: number,
) {
    return {
        name,
        calories,
        fat,
        carbs,
        protein,
        price,
        history: [
            { date: '2020-01-05', customerId: '11091700', amount: 3 },
            { date: '2020-01-02', customerId: 'Anonymous', amount: 1 },
        ],
    };
}*/
let row = {
    history: [
        {date: '2020-01-05', customerId: '11091700', amount: 3},
        {date: '2020-01-02', customerId: 'Anonymous', amount: 1},
    ],
}

type RowType = {
    episode: EpisodeType
}

function Row(props: RowType) {
    // const { row } = props;
    const [open, setOpen] = React.useState(false);
    const classes = useRowStyles();

    return (
        <React.Fragment>
            <TableRow className={classes.root}>
                <TableCell>
                    <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
                        {open ? <KeyboardArrowUpIcon/> : <KeyboardArrowDownIcon/>}
                    </IconButton>
                </TableCell>
                <TableCell component="th" scope="row">
                    {props.episode.name}
                </TableCell>
                {/*<TableCell align="right">{props.episode.name}</TableCell>*/}
                <TableCell align="right">{props.episode.air_date}</TableCell>
                <TableCell align="right">{props.episode.episode}</TableCell>
                <TableCell align="right">{props.episode.created}</TableCell>
                <TableCell align="right">{props.episode.url}</TableCell>
            </TableRow>
            <TableRow>
                <TableCell style={{paddingBottom: 0, paddingTop: 0}} colSpan={6}>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <Box margin={1}>
                            <Table size="small" aria-label="purchases">
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Characters</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {props.episode.characters.map((ch) => (
                                        <TableRow key={ch}>
                                            <TableCell component="th" scope="row">
                                                {ch}
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </Box>
                    </Collapse>
                </TableCell>
            </TableRow>
        </React.Fragment>
    );
}

/*const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0, 3.99),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3, 4.99),
    createData('Eclair', 262, 16.0, 24, 6.0, 3.79),
    createData('Cupcake', 305, 3.7, 67, 4.3, 2.5),
    createData('Gingerbread', 356, 16.0, 49, 3.9, 1.5),
];*/
console.log('')

type MyTableProps = {
    episodes: Array<EpisodeType>
}

export default function MyTable(props: MyTableProps) {
    return (
        <TableContainer component={Paper}>
            <Table aria-label="collapsible table">
                <TableHead>
                    <TableRow>
                        <TableCell/>
                        <TableCell>Episodes</TableCell>
                        <TableCell align="right">Air date</TableCell>
                        <TableCell align="right">Episode</TableCell>
                        <TableCell align="right">Created</TableCell>
                        <TableCell align="right">Url</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {props.episodes.map((e) => (
                        <Row key={e.name} episode={e}/>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
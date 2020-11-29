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
import {LocationType} from "../../api/location-api";

const useRowStyles = makeStyles({
    root: {
        '& > *': {
            borderBottom: 'unset',
        },
    },
});

type RowType = {
    location: LocationType
}

function RowLocations(props: RowType) {
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
                    {props.location.name}
                </TableCell>
                <TableCell align="right">{props.location.type}</TableCell>
                <TableCell align="right">{props.location.dimension}</TableCell>
                <TableCell align="right">{props.location.created}</TableCell>
                <TableCell align="right">{props.location.url}</TableCell>
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
                                    {props.location.residents.map((r) => (
                                        <TableRow key={r}>
                                            <TableCell component="th" scope="row">
                                                {r}
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

type MyTableProps = {
    locations: Array<LocationType>
}

export default function LocationTable(props: MyTableProps) {
    return (
        <TableContainer component={Paper}>
            <Table aria-label="collapsible table">
                <TableHead>
                    <TableRow>
                        <TableCell/>
                        <TableCell>Locations</TableCell>
                        <TableCell align="right">Type</TableCell>
                        <TableCell align="right">Dimension</TableCell>
                        <TableCell align="right">Created</TableCell>
                        <TableCell align="right">Url</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {props.locations.map((l) => (
                        <RowLocations key={l.id} location={l}/>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

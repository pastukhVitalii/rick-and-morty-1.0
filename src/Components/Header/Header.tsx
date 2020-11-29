import React from 'react';
import './Header.css';
import {BottomNavigation, ListItem, ListItemText} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import {NavLink} from "react-router-dom";

type PropsType = {}

export const Header = React.memo(function (props: PropsType) {

        const useStyles = makeStyles({
            root: {
                display: 'flex',
                backgroundColor: 'blanchedalmond',
                height: '100%',
                textDecoration: 'none'
            },
        });
        const classes = useStyles();

        return (
            <div className='header'>
                <BottomNavigation
                    className={classes.root}
                >
                    <NavLink to="/">
                        <ListItem button style={{color: 'black', textDecoration: 'none'}}>
                            <ListItemText primary="Characters"/>
                        </ListItem>
                    </NavLink>
                    <NavLink to="/episodes">
                        <ListItem button style={{color: 'black', textDecoration: 'none'}}>
                            <ListItemText primary="Episodes"/>
                        </ListItem>
                    </NavLink>
                    <NavLink to="/locations">
                        <ListItem button style={{color: 'black', textDecoration: 'none'}}>
                            <ListItemText primary="Locations"/>
                        </ListItem>
                    </NavLink>
                    <NavLink to="/myWatchList">
                        <ListItem button style={{color: 'black', textDecoration: 'none'}}>
                            <ListItemText primary="MyWatchList"/>
                        </ListItem>
                    </NavLink>
                </BottomNavigation>
            </div>
        );
    }
)


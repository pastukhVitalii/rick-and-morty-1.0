import React from 'react';
import {createStyles, makeStyles, Theme} from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import {Avatar, Grid, Link, Typography} from "@material-ui/core";
import {CharacterType} from "../../api/character-api";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        modal: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto',
        },
        paper: {
            backgroundColor: theme.palette.background.paper,
            border: '2px solid #000',
            boxShadow: theme.shadows[5],
            padding: theme.spacing(2, 2, 2),
            display: 'flex'

        },
        large: {
            width: '100px',
            height: '100px',
            marginRight: '20px',
        },
    }),
);

type PropsType = {
    open: boolean
    setOpen: (open: boolean) => void
    character: CharacterType
}

export default function MyModal(props: PropsType) {

    const classes = useStyles();

    const handleClose = () => {
        props.setOpen(false);
    };

    return (
        <div>
            <Modal
                className={classes.modal}
                open={props.open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={props.open}>
                    <div className={classes.paper}>
                        <Avatar className={classes.large} variant={"square"} alt="Remy Sharp"
                                src={props.character.image}/>
                        <Grid container justify={"center"} direction={"column"}>
                            <Typography variant="h5">
                                Name: {props.character.name}
                            </Typography>
                            <Typography variant="subtitle1">
                                Species: {props.character.species}
                            </Typography>
                            <Typography variant="subtitle1">
                                Status: {props.character.status}
                            </Typography>
                            <Typography variant="subtitle1">
                                Gender: {props.character.gender}
                            </Typography>
                            <Typography variant="subtitle1">
                                Type: {props.character.type}
                            </Typography>
                            <Typography variant="subtitle1">
                                Origin name: {props.character.origin?.name}
                            </Typography>
                            <Typography variant="subtitle1">
                                Origin url: <Link
                                href={props.character.origin?.url}>{props.character.origin?.url}</Link>
                            </Typography>
                            <Typography variant="subtitle1">
                                Location name:{props.character.location?.name}
                            </Typography>
                            <Typography variant="subtitle1">
                                Location url: {props.character.location?.url}
                            </Typography>
                            <Typography variant="subtitle1">
                                Url: <Link href={props.character.url}>{props.character.url}</Link>
                            </Typography>
                            <Typography variant="subtitle1">
                                Created: {props.character.created}
                            </Typography>
                        </Grid>
                    </div>
                </Fade>
            </Modal>
        </div>
    );
}
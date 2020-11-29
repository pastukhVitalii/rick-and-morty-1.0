import React from 'react';
import {Card, CardContent, CardHeader, CardMedia, createStyles, Theme, Typography} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import {CharacterType} from "../../api/character-api";
import MyModal from "../../Components/Modal/Modal";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            maxWidth: 345,
            height: '400px',
        },
        media: {
            width: '70%',
            margin: '0 auto',
            height: '230px',
        },
    }),
);

export type PropsType = {
    character: CharacterType,
}
export type CardType = {}

export const MyCard = React.memo(function (props: PropsType & CardType) {
        console.log('render Card')
        const classes = useStyles();

        const [open, setOpen] = React.useState(false);

        const handleOpen = () => {
            setOpen(true);
        };

        const handleClos = () => {
            setOpen(false);
        };

        return (
            <div onClick={handleOpen}>
                <Card className={classes.root}>
                    <CardHeader
                        title={props.character.name}
                    />
                    <CardMedia
                        className={classes.media}
                        image={props.character.image}
                    />
                    <CardContent>
                        <Typography variant="body2" color="textSecondary" component="p">
                            {props.character.status}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            {props.character.species}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            {props.character.gender}
                        </Typography>
                    </CardContent>
                </Card>
                <MyModal open={open} setOpen={setOpen}/>
            </div>
        );
    }
);

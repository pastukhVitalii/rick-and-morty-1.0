import React from 'react';
import {Delete} from "@material-ui/icons";
import {Checkbox, IconButton} from "@material-ui/core";
import {EpisodeListType} from "./MyWatchList";

type PropsType = {
    episode: EpisodeListType
    removeEpisode: (id: number) => void
    changeStatusEpisode: (id: number) => void
}

export const EpisodeItem = React.memo((props: PropsType) => {

    const opacity = props.episode.status?{ opacity: '0.5'}: { opacity: '1'};
    return (
        <>
            <div>
                <Checkbox
                    checked={props.episode.status}
                    color="primary"
                    onChange={() => props.changeStatusEpisode(props.episode.id)}
                />
                <span style={opacity} >{props.episode.title}</span>
                <span>
                    <IconButton onClick={() => props.removeEpisode(props.episode.id)} style={opacity}>
                    <Delete/>
                </IconButton>
                </span>
            </div>
        </>
    )
})


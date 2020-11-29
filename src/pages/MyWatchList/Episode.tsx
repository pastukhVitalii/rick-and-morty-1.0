import React from 'react';
import {Delete} from "@material-ui/icons";
import {IconButton} from "@material-ui/core";
import {EpisodeListType} from "./MyWatchList";

type PropsType = {
    episode: EpisodeListType
    removeEpisode: (id: number) => void
}

export const Episode = React.memo((props: PropsType) => {

    return (
        <>
            <span>{props.episode.title}</span>
            <IconButton onClick={() => props.removeEpisode(props.episode.id)}>
                <Delete/>
            </IconButton>
        </>
    )
})


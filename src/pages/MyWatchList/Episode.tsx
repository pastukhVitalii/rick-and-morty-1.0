import React from 'react';
import {Delete} from "@material-ui/icons";
import {Checkbox, IconButton} from "@material-ui/core";
import {EpisodeListType} from "./MyWatchList";

type PropsType = {
    episode: EpisodeListType
    removeEpisode: (id: number) => void
    changeStatusEpisode: (id: number) => void
}

export const Episode = React.memo((props: PropsType) => {

    return (
        <>
            <div>
                <Checkbox
                    checked={props.episode.status}
                    color="primary"
                    onChange={() => props.changeStatusEpisode(props.episode.id)}
                />
                <span>{props.episode.title}</span>
                <span>
                    <IconButton onClick={() => props.removeEpisode(props.episode.id)}>
                    <Delete/>
                </IconButton>
                </span>
            </div>
        </>
    )
})


import React, {useEffect, useState} from 'react';

import {episodeService} from "../../services/episodeService";
import {Episode} from "./Episode";
const Episodes = () => {
    const [episodes, setEpisodes] = useState([]);
    useEffect(() => {
        episodeService.getAll().then(({data})=> setEpisodes(data.results));
    }, []);
    return (
        <div>
            {episodes.map(episode=><Episode key={episode.id} data={episode}/>)}
        </div>
    );
};

export {Episodes};
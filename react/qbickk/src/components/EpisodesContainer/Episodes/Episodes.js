import React, {useEffect, useState} from 'react';

import {episodeService} from "../../../services/episodeService";
import {Episode} from "../Episode/Episode";
import css from './Episodes.module.css';
import {useSearchParams} from "react-router-dom";

const Episodes = () => {
    const [episodesResponse, setEpisodesResponse] = useState({prev: null, next:null, results:[]});
    
    const [query, setQuery] = useSearchParams({page: '1'});
    const page = query.get('page');
    
    useEffect(() => {
        episodeService.getAll(page)
            .then(({data:{info:{prev, next}, results}})=>setEpisodesResponse({prev, next, results}))
    }, [page]);


    const prevHandler = () => {
        setQuery(prev=>{
            prev.set('page', `${+page - 1}`);
            return prev
        })
    };

    const nextHandler = () => {
        setQuery(prev=>{
            prev.set('page', `${+page + 1}`);
            return prev
        })
    };


    return (
        <div>
            <div className={css.Episodes}>
                {episodesResponse.results.map(episode=><Episode key={episode.id} episode={episode}/>)}
            </div>
            <div className={css.buttons}>
                <button disabled={!episodesResponse.prev}  onClick={prevHandler}>previous page</button>
                <button disabled={!episodesResponse.next} onClick={nextHandler}>next page</button>
            </div>
        </div>
    );
};

export {Episodes};
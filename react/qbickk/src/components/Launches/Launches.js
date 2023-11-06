import React, {useEffect, useState} from 'react';
import {launchesService} from "../../services/launchesService";
import {Launch} from "../Launch/Launch";

const Launches = () => {

    const [launches, setLaunches] = useState([]);

    useEffect(() => {
        launchesService.getAll().then(({data}) => {
           const filtered = data.filter(item=>item.launch_year !== '2020');
           setLaunches(filtered);
        });
    }, []);
    return (
        <div>
            {launches.map(launch=><Launch key={launch.launch_date_unix} launch={launch}/>)}
        </div>
    );
};

export {Launches};
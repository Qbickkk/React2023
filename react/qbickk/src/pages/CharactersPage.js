import React from 'react';

import {Characters} from "../components/CharactersContainer/Characters";
import {CharactersPagination} from "../components/CharactersContainer/CharactersPagination";

const CharactersPage = () => {
    return (
        <div>
            <Characters/>
            <CharactersPagination/>
        </div>
    );
};

export {CharactersPage};
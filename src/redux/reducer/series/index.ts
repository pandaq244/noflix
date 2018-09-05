import {
    initSeries as init
} from '../../init/';

import {
    ISeries as IState
} from '../../interface/';

export default (state: IState = init, action: any) => {
    switch(action.type) {
        case '@@series/UPDATE_SETTINGS':
            state = {
                ...state,
                description: action.payload.description,
                episodes: action.payload.episodes,
                id: action.payload.id,
                name: action.payload.name,

            };
            break;
        case '@@series/UPDATE_EPISODE':
            state = {
                ...state,
                episodeNumber: action.payload.episodeNumber,
                seasonNumber: action.payload.seasonNumber
            };
            break;
    };
    return state;
};

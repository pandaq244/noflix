import init from './init';
import * as types from './types';

import {
    IState
} from './interface';

export default (state: IState = init, action: any) => {
    switch(action.type) {
        case types.UPDATE_SETTINGS:
            state = {
                ...state,
                description: action.payload.description,
                episodes: action.payload.episodes,
                id: action.payload.id,
                name: action.payload.name
            };
            break;
        case types.UPDATE_EPISODE:
            state = {
                ...state,
                episodeNumber: action.payload.episodeNumber,
                seasonNumber: action.payload.seasonNumber
            };
            break;
    };
    return state;
};

export * from './actions';

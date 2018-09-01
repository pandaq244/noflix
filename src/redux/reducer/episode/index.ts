import {
    initEpisode
} from '../../init/';

import {
    IEpisode,
    IEpisodeAction
} from '../../interface/';

export default (state: IEpisode = initEpisode, action: IEpisodeAction) => {
    switch(action.type) {
        case '@@episode/UPDATE_INFO':
            state = {
                description: action.payload.description,
                name: action.payload.name,
                source: action.payload.source
            };
            break;
    };
    return state;
};

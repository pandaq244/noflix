import { initEpisode } from '../../init/';
import { IEpisodeAction } from '../../interface/';

export default (state = initEpisode, action: IEpisodeAction) => {
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

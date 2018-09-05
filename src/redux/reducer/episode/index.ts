import {
    initEpisode as init
} from '../../init/';

import {
    IEpisode as IState,
    IEpisodeAction as IAction
} from '../../interface/';

export default (state: IState = init, action: IAction) => {
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

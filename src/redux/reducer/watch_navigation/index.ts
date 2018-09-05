import {
    initWatchNavigation as init
} from '../../init/';

import {
    IWatchNavigation as IState,
    IWatchNavigationAction as IAction
} from '../../interface/';

export default (state: IState = init, action: IAction) => {
    switch(action.type) {
        case '@@watch_navigation/UPDATE_BOOKMARK':
            state = {
                ...state,
                bookmark: action.payload
            };
            break;
    };
    return state;
};

import {
    initHomeNavigation as init
} from '../../init/';

import {
    IHomeNavigation as IState,
    IHomeNavigationAction as IAction
} from '../../interface/';

export default (state: IState = init, action: IAction) => {
    switch(action.type) {
        case '@@home_navigation/UPDATE_PAGE':
            state = {
                ...state,
                page: action.payload
            };
            break;
    };
    return state;
};

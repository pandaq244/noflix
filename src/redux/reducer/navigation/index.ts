import {
    initNavigation
} from '../../init/';

import {
    INavigation,
    INavigationAction
} from '../../interface/';

export default (state: INavigation = initNavigation, action: INavigationAction) => {
    switch(action.type) {
        case '@@navigation/UPDATE_BOOKMARK':
            state = {
                ...state,
                bookmark: action.payload
            };
            break;
    };
    return state;
};

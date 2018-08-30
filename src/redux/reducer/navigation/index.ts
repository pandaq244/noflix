import { initNavigation } from '../../init/';
import { INavigationAction } from '../../interface/';

export default (state = initNavigation, action: INavigationAction) => {
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

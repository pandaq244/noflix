import init from './init';
import * as types from './types';

import {
    IState
} from './interface';

export default (state: IState = init, action: any) => {
    switch(action.type) {
        case types.UPDATE_BOOKMARK:
            state = {
                ...state,
                bookmark: action.payload
            };
            break;
    };
    return state;
};

export * from './actions';

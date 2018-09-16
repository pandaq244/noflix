import init from './init';
import * as types from './types';

import {
    IState
} from './interface';

export default (state: IState = init, action: any) => {
    switch(action.type) {
        case types.UPDATE_INFO:
           state = {
               description: action.payload.description,
               name: action.payload.name,
               source: action.payload.source
           };
           break;
    };
    return state;
};

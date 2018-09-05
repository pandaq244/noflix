import {
    applyMiddleware,
    combineReducers,
    createStore
} from 'redux';

import {
    logger
} from 'redux-logger';

import {
    episode,
    homeNavigation,
    series,
    watchNavigation
} from './reducer/';

const allReducer = combineReducers({
    episode,
    homeNavigation,
    series,
    watchNavigation
});

export default createStore(
    allReducer,
    {},
    applyMiddleware(logger)
);

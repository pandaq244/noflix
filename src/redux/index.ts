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
    navigation,
    series
} from './reducer/';

const allReducer = combineReducers({
    episode,
    navigation,
    series
});

export default createStore(
    allReducer,
    {},
    applyMiddleware(logger)
);

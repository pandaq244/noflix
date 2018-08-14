import { applyMiddleware, combineReducers, createStore } from 'redux';
import { logger } from 'redux-logger';

import { episodeReducer, seriesNavReducer, seriesReducer  } from './reducers';

const allReducer=combineReducers({
    episode: episodeReducer,
    series: seriesReducer,
    seriesNav: seriesNavReducer
});

export default createStore(
    allReducer,
    {},
    applyMiddleware(logger)
);
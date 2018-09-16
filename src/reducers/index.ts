import {
    combineReducers
} from 'redux';

import episode from '../ducks/episode/';
import homeNavigation from '../ducks/home_navigation/';
import series from '../ducks/series/';
import watchNavigation from '../ducks/watch_navigation/';

export default combineReducers({
    episode,
    homeNavigation,
    series,
    watchNavigation
});

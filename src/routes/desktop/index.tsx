import * as React from 'react';
import {
    Route,
    Switch
} from 'react-router-dom';

import {
    DesktopHome as Home,
} from '../../components/home/';

import {
    DesktopSeries as Series
} from '../../components/series/';

import {
    DesktopWatch as Watch
} from '../../components/watch/';

export default () => (
    <Switch>
        <Route path="/" exact={ true } component={ Home } />
        <Route path="/series" exact={ true } component={ Series } />
        {/*<Route path="/search/:id" exact={ true } component={ Search } />*/}
        <Route path="/series/:id" exact={ true } component={ Watch } />
    </Switch>
);

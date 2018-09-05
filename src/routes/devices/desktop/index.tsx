import * as React from 'react';
import {
    Route,
    Switch
} from 'react-router-dom';

import {
    DesktopHome as Home,
    DesktopSearchScreen as Search,
    DesktopSeriesSceen as Series,
    DesktopWatchScreen as Watch
} from '../../../containers/';

export default () => (
    <Switch>
        <Route path="/" exact={ true } component={ Home } />
        <Route path="/series" exact={ true } component={ Series } />
        <Route path="/search/:id" exact={ true } component={ Search } />
        <Route path="/series/:id" exact={ true } component={ Watch } />
    </Switch>
);

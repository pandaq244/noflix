import * as React from 'react';
import {
    Route,
    Switch
} from 'react-router-dom';

import {
    DesktopHome,
    DesktopSearchScreen,
    DesktopSeriesSceen,
    DesktopWatchScreen
} from '../../containers/';

export const DesktopRouter = () => (
    <Switch>
        <Route exact={true} path="/" component={DesktopHome} />
        <Route exact={true} path="/series" component={DesktopSeriesSceen} />
        <Route exact={true} path="/series/:id" component={DesktopWatchScreen} />
        <Route exact={true} path="/search/:id" component={DesktopSearchScreen} />
    </Switch>
);

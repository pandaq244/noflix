import * as React from 'react';
import {
    Route,
    Switch
} from 'react-router-dom';

import Main from '../../containers/';

import Search from '../../containers/search/';
import Series from '../../containers/series/';
import Watch from '../../containers/watch/';


export const BaseRouter = () => (
    <Switch>
        <Route exact={true} path="/" component={Main} />
        <Route exact={true} path="/series" component={Series} />
        <Route exact={true} path="/series/:id" component={Watch} />
        <Route exact={true} path="/search/:id" component={Search} />
    </Switch>
);

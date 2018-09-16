import * as React from 'react';
import {
    Route,
    Switch
} from 'react-router-dom';

import {
    MobileHome as Home
} from '../../components/home';

export default () => (
    <Switch>
        <Route path="/" exact={ true } component={ Home } />
    </Switch>
);

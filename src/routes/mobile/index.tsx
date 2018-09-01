import * as React from 'react';
import {
    Route,
    Switch
} from 'react-router-dom';

import {
    MobileHome
} from '../../containers/';

export const MobileRouter = () => (
    <Switch>
        <Route path="/" exact={true} component={MobileHome} />
    </Switch>
);

import * as React from 'react';

import {
     MobileHeader
 }from '../../../containers/header/';

import {
    MobileRouter
} from '../../../routes/';


export default () => (
    <div className="app-grid mobile-grid">
        <MobileRouter />
        <MobileHeader />
    </div>
);

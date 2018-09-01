import * as React from 'react';

import {
     DesktopHeader
 }from '../../../containers/header/';

import {
    DesktopRouter
} from '../../../routes/';

export default () => (
    <div className="app-grid desktop-grid">
        <DesktopHeader />
        <DesktopRouter />
    </div>
);

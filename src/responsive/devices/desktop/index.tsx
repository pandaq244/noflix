import * as React from 'react';
import MediaQuery from 'react-responsive';

import devices from '../../settings/';

import {
     DesktopHeader
 }from '../../../containers/';

import {
    DesktopRouter
} from '../../../routes/';

import './index.css';

export default () => (
    <MediaQuery minWidth={devices.default.minWidth} >
        <div className="app-grid desktop-grid">
            <DesktopHeader />
            <DesktopRouter />
        </div>
    </MediaQuery>
);

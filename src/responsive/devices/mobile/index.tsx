import * as React from 'react';
import MediaQuery from 'react-responsive';

import devices from '../../settings/';

import {
     MobileHeader
 }from '../../../containers/';

import {
    MobileRouter
} from '../../../routes/';

import './index.css';

export default () => (
    <MediaQuery maxWidth={devices.mobile.maxWidth} >
        <div className="app-grid mobile-grid">
            <MobileRouter />
            <MobileHeader />
        </div>
    </MediaQuery>
);

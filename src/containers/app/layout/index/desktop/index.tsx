import * as React from 'react';

import {
     DesktopHeader
 }from '../../header/';

import {
    DesktopRouter
} from '../../../../../routes/';

import './index.css';

export default () => (
    <div className="app-grid desktop-grid">
        <DesktopHeader />
        <DesktopRouter />
    </div>
);

import * as React from 'react';
import Responsive from 'react-responsive';

import {
     DesktopHeader
 }from '../../components/header/';

import DesktopRouter from '../../routes/desktop/';

import './index.css';

export default () => (
    <Responsive minWidth={1200}>
        <div className="app-grid desktop-grid">
            <DesktopHeader />
            <DesktopRouter />
        </div>
    </Responsive>
);

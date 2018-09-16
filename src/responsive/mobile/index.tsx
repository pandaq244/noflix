import * as React from 'react';
import Responsive from 'react-responsive';

import {
     MobileHeader
 }from '../../components/header/';

import MobileRouter from '../../routes/mobile/';

import './index.css';

export default () => (
    <Responsive maxWidth={700}>
        <div className="app-grid mobile-grid">
            <MobileRouter />
            <MobileHeader />
        </div>
    </Responsive>
);

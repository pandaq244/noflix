import * as React from 'react';

import {
     MobileHeader
 }from '../../header/';

import {
    MobileRouter
} from '../../../../../routes/';

import './index.css';

export default () => (
    <div className="app-grid mobile-grid">
        <MobileRouter />
        <MobileHeader />
    </div>
);

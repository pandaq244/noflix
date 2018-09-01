import * as React from 'react';

import {
    DefaultDevice,
    MobileDevice
} from '../../responsive/';

import './index.css';

export default () => (
    <React.Fragment>
        <DefaultDevice />
        <MobileDevice />
    </React.Fragment>
);

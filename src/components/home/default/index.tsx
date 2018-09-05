import * as React from 'react';

import {
    DesktopDevice,
    MobileDevice
} from '../../../responsive/';

import '../../../style/index.css';

export default () => (
    <React.Fragment>
        <DesktopDevice />
        <MobileDevice />
    </React.Fragment>
);

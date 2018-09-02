import * as React from 'react';
import MediaQuery from 'react-responsive';

import devices from './devices/';

import {
    DesktopMain,
    MobileMain
} from '../containers/';

export const DefaultDevice = (props: {}) => (
    <MediaQuery minWidth={devices.default.minWidth} >
        <DesktopMain />
    </MediaQuery>
);

export const MobileDevice = (props: {}) => (
    <MediaQuery maxWidth={devices.mobile.maxWidth} >
        <MobileMain />
    </MediaQuery>
);

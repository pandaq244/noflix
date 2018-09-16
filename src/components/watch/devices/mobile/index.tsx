import * as React from 'react';
import {
    RouteComponentProps
} from 'react-router-dom';

import Watch from '../../../../containers/watch/';
import AppWrapper from '../../../default/';

import './style/index.css';

export default (props: RouteComponentProps<any>) => (
    <AppWrapper class="main-watch--desktop">
        <Watch id={props.match.params.id} />
    </AppWrapper>
);

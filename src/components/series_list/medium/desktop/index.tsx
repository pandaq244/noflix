import * as React from 'react';

import MediumUpdate from '../../../../containers/series/type/medium/';

import {
    IProps
} from '../../interface/';

import './style/index.css';

export default (props: IProps) => (
    <MediumUpdate classList="element-list-medium--desktop" title={props.title} query={{
            collection: props.query.collection,
            count: 6,
            name: props.query.name,
            order: props.query.order
        }}
    />
);
